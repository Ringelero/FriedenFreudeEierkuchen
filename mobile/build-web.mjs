import { copyFile, mkdir, readFile, readdir, rm, writeFile, lstat, realpath } from 'node:fs/promises';
import path from 'node:path';

const mobile = await realpath(import.meta.dirname);
const site = path.dirname(mobile);
const target = path.join(mobile, 'www');
const roots = ['assets', 'community', 'en', 'gassi', 'gestalten', 'hilfe', 'impressum', 'info',
  'julius', 'kalender', 'konto', 'leistungen', 'system', 'tickets', 'treffpunkte', 'willkommen'];
const files = ['index.html', '404.html'];

async function collect(directory) {
  for (const entry of await readdir(path.join(site, directory), { withFileTypes: true })) {
    const name = directory + '/' + entry.name;
    if (name.startsWith('en/entwuerfe') || name.startsWith('en/verwaltung')) continue;
    if (entry.isDirectory()) await collect(name);
    if (entry.isFile()) files.push(name);
  }
}

await Promise.all(roots.map(collect));
const routes = new Set(files.filter(file => file.endsWith('index.html')).map(file => '/' + file.slice(0, -'index.html'.length)));
const origin = 'https://gemden.red';
const supabaseUrl = 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.3';
const routesScript = await readFile(path.join(mobile, 'native-routes.js'), 'utf8');

function bundlePage(html, file) {
  return html.replaceAll(/(<script\s+src=")https:\/\/cdn\.jsdelivr\.net\/npm\/@supabase\/supabase-js@2\.117\.3(?:\/dist\/umd\/supabase\.js)?(")/g,
    '$1/assets/mobile-supabase.js$2')
    .replace(/<head(?:\s[^>]*)?>/i, '$&<script src="/assets/mobile-routes.js" defer></script>')
    .replaceAll(/(<a\b[^>]*?\bhref=")([^"]+)(")/gi, (match, start, value, end) => {
      if (!value || /^(?:#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(value)) return match;
      const url = new URL(value.replaceAll('&amp;', '&'), origin + '/' + file);
      if (routes.has(url.pathname)) return start + url.pathname + 'index.html' + url.search.replaceAll('&', '&amp;') + url.hash + end;
      if (url.pathname.startsWith('/verwaltung/') || url.pathname.startsWith('/en/verwaltung/')
        || url.pathname.startsWith('/entwuerfe/') || url.pathname.startsWith('/en/entwuerfe/')) {
        return start + url.href.replaceAll('&', '&amp;') + end;
      }
      return match;
    });
}

const existing = await lstat(target).catch(error => {
  if (error.code !== 'ENOENT') throw error;
  return null;
});
if (existing) {
  if (!existing.isDirectory() || await realpath(target) !== target) throw Error('Unexpected mobile web directory');
  await rm(target, { recursive: true });
}
for (const file of files) {
  const source = path.join(site, file);
  const dest = path.join(target, file);
  await mkdir(path.dirname(dest), { recursive: true });
  if (!file.endsWith('.html')) {
    await copyFile(source, dest);
    continue;
  }
  const html = bundlePage(await readFile(source, 'utf8'), file);
  if (html.includes(supabaseUrl)) throw Error('Unbundled Supabase client in ' + file);
  await writeFile(dest, html);
}
await copyFile(path.join(mobile, 'node_modules/@supabase/supabase-js/dist/umd/supabase.js'), path.join(target, 'assets/mobile-supabase.js'));
await writeFile(path.join(target, 'assets/mobile-routes.js'), routesScript.replace('__BUNDLED_ROUTES__', JSON.stringify([...routes].sort())));
console.log(`GemDen web bundle ready (${files.length} files, ${routes.size} routes)`);
