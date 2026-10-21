import {readFile,writeFile,readdir,mkdir,unlink} from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {parse} from './vendor/acorn.mjs';
const site=path.resolve(import.meta.dirname,'..');
const check=process.argv.includes('--check');
const dictionary=JSON.parse(await readFile(path.join(site,'translations/en.json'),'utf8'));
const termTranslations=JSON.parse(await readFile(path.join(site,'translations/en-search-terms.json'),'utf8'));
const sources=new Map(),outputs=new Map(),missing=new Map(),stableValues=new Set();
const skip=new Set(['en','scripts','translations','node_modules','.git','tests','editor-src','assistant','supabase','vendor']);
const german=/[äöüÄÖÜß]|\b(?:der|die|das|den|dem|des|ein|eine|einer|einen|einem|und|oder|für|mit|von|zum|zur|dein|deine|deinen|deinem|deiner|du|dich|dir|ist|sind|wird|werden|nicht|noch|auch|bitte|hier|kann|kannst|kein|keine|nur|auf|bei|im|aus|nach|durch|sich|soll|darf|wer|was|wie|wenn|dann|aber|alle|neu|laden|geladen|Fehler|Anmelden|Abmelden|Schließen|Speichern|Abbrechen|Bearbeiten|Löschen|Entwurf|Vorschau|Anfrage|Privat|Privates|Titel|Beschreibung|Ort|Typ|Art|Stand|Status|Offen|Zurück|Weiter|Nächste|Vorige|Heute|Morgen|Bereit|Datum|Uhrzeit|Beginn|Ende|Name|Quelle|Angebot|Teilen|Suchen|Filter|Inhalt|Menü|Sprache|Deutsch|Englisch)\b/i;
const normalize=s=>s.replace(/\s+/g,' ').trim();
const own=(object,key)=>Object.hasOwn(object,key);
const encode=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
const decode=s=>s.replace(/&(?:amp|lt|gt|quot|apos|#\d+|#x[0-9a-f]+);/gi,m=>({ '&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'" }[m]??String.fromCodePoint(m[2].toLowerCase()==='x'?parseInt(m.slice(3,-1),16):Number(m.slice(2,-1)))));
function candidate(s,compiled=false){s=normalize(s);if(!/[a-zäöü]/i.test(s)||s.length>3000)return false;if(own(dictionary,s))return true;if(/^[A-Z0-9_-]+$/.test(s)||/^(?:[#.\[][\s\S]*|&[a-z]+=?|\/?(?:[a-z0-9._-]+\/)+[a-z0-9._?#=/%&: -]*|[a-z0-9_-]+\.(?:js|mjs|json|css|svg|html|webp|png)(?:\?[\s\S]*)?)$/i.test(s))return false;return german.test(s)||(!compiled&&(/^[A-ZÄÖÜ][a-zäöüß]{2,}[:.!?]?$/.test(s)||/\s/.test(s)));}
function translated(s,file,{required=false,compiled=false}={}){const key=normalize(s);if(!key||!/[a-zA-ZäöüÄÖÜß]/.test(key))return s;const replacement=dictionary[key];if(typeof replacement==='string')return s.replace(/\S(?:[\s\S]*\S)?/,()=>replacement);if(required||candidate(s,compiled)){if(!missing.has(key))missing.set(key,new Set());missing.get(key).add(file);}return s;}
async function walk(dir){for(const entry of await readdir(dir,{withFileTypes:true})){if(skip.has(entry.name))continue;const absolute=path.join(dir,entry.name),name=path.relative(site,absolute).split(path.sep).join('/');if(entry.isDirectory())await walk(absolute);else if(/\.(?:html|css|js|mjs|json|svg)$/.test(name)&&!/^package(?:-lock)?\.json$/.test(name)&&!/^assets\/language\./.test(name))sources.set(name,(await readFile(absolute,'utf8')).replace(/\r\n/g,'\n'));}}
await walk(site);
// Keep only the editor bundles reachable from its current entry point.
const activeBundles=new Set(),queue=[...sources.get('gestalten/index.html').matchAll(/(?:src|href)="(\/gestalten\/assets\/[^"?]+\.(?:js|css))/g)].map(m=>m[1].slice(1));
while(queue.length){const name=queue.pop();if(activeBundles.has(name)||!sources.has(name))continue;activeBundles.add(name);for(const match of sources.get(name).matchAll(/["']([^"']+\.(?:js|css))["']/g)){for(const target of [path.posix.normalize(path.posix.join(path.posix.dirname(name),match[1])),path.posix.normalize('gestalten/'+match[1])])if(sources.has(target)&&!activeBundles.has(target))queue.push(target);}}
for(const name of [...sources.keys()])if(name.startsWith('gestalten/assets/')&&!activeBundles.has(name))sources.delete(name);
const pages=[...sources.keys()].filter(name=>name.endsWith('.html'));
const routes=pages.map(name=>'/'+name.replace(/index\.html$/,'')).sort();
for(const name of pages){for(const match of sources.get(name).matchAll(/\b(?:value|name|id|data-[a-z-]+)="([^"]*)"/g))stableValues.add(decode(match[1]));}
function assetTarget(value,file){if(!value||/^(?:#|[a-z][a-z0-9+.-]*:|\/\/)/i.test(value))return value;const url=new URL(value,'https://gemden.red/'+file);let target=decodeURIComponent(url.pathname.slice(1));if(!target)target='index.html';else if(!path.posix.extname(target))target=(target.endsWith('/')?target:target+'/')+'index.html';if(sources.has(target))return '/en/'+url.pathname.slice(1)+url.search+url.hash;return url.pathname+url.search+url.hash;}
function text(s,file,required=false,compiled=false){const value=translated(decode(s),file,{required,compiled});return encode(value);}
function fragment(s,file,compiled=false,state={}){
 if(!state.inTag&&!/<\/?[a-z]|['"]>/i.test(s))return translated(s,file,{compiled});
 let output='',pending='';
 const attributes=tag=>tag.replace(/\b(aria-label|title|placeholder|alt)=(['"])(.*?)\2/g,(all,key,quote,value)=>`${key}=${quote}${text(value,file,false,compiled)}${quote}`);
 for(const c of s){
  if(state.inTag){pending+=c;if(state.quote){if(c===state.quote)state.quote=null;}else if(c==='"'||c==="'")state.quote=c;else if(c==='>'){output+=attributes(pending);pending='';state.inTag=false;}}
  else if(c==='<'){output+=text(pending,file,false,compiled);pending='<';state.inTag=true;}
  else pending+=c;
 }
 return output+(state.inTag?pending:text(pending,file,false,compiled));
}
function script(source,file){
 const compiled=file.startsWith('gestalten/assets/')&&!/^gestalten\/assets\/index-/.test(file);const ast=parse(source,{ecmaVersion:'latest',sourceType:'module',allowReturnOutsideFunction:true}),changes=[];
 function value(s,parent,key,termContext){
  if(parent?.type==='CallExpression'&&['getItem','setItem','removeItem','querySelector','querySelectorAll','getElementById','getAttribute','hasAttribute','closest','matches','rpc','from'].includes(parent.callee?.property?.name))return s;
  if(s==='de-DE')return 'en-GB';
  if(termContext&&own(termTranslations,s))return termTranslations[s];
  if(s==='/assets/data'||s==='/assets/data/')return '/en'+s;
  if(stableValues.has(s))return s;
  if(/^\/[^\s]+\.(?:js|mjs|css|json|html|svg|png|webp)(?:[?#].*)?$/.test(s))return assetTarget(s,file);
  if(file==='assets/opportunity-entry.js'&&normalize(s)==='Aus')return s.replace('Aus','From');
  if(parent?.type==='Property'&&key==='key'||parent?.type==='MemberExpression'&&key==='property')return s;
  if(parent?.type==='CallExpression'&&['get','set','delete','getItem','setItem','removeItem','querySelector','querySelectorAll','getElementById','getAttribute','hasAttribute','closest','matches','rpc','from','select','order','eq'].includes(parent.callee?.property?.name)&&!/[\säöüÄÖÜß]/.test(s))return s;
  return fragment(s,file,compiled);
 }
 function visit(node,parent,key,termContext=false){if(!node||typeof node!=='object')return;const terms=termContext||(node.type==='Property'&&['terms','keywords','aliases'].includes(node.key?.name||node.key?.value));
  if(node.type==='TemplateLiteral'){
   if(parent?.type==='Property'&&key==='key'||parent?.type==='MemberExpression'&&key==='property')return;
   const state={};for(const quasi of node.quasis){const cooked=quasi.value.cooked??quasi.value.raw,next=node.expressions.length?fragment(cooked,file,compiled,state):value(cooked,parent,key,terms);if(next!==cooked)changes.push({start:quasi.start,end:quasi.end,value:next.replace(/\\/g,'\\\\').replace(/`/g,'\\`').replace(/\$\{/g,'\\${')});}
   node.expressions.forEach(expression=>visit(expression,node,'expressions',terms));return;
  }
  if(node.type==='Literal'&&typeof node.value==='string'){
   if(parent?.type==='Property'&&key==='key'||parent?.type==='MemberExpression'&&key==='property')return;
   const next=value(node.value,parent,key,terms);if(next!==node.value)changes.push({start:node.start,end:node.end,value:JSON.stringify(next)});
  }
  for(const [k,v] of Object.entries(node)){if(k==='value'&&node.type==='TemplateElement')continue;if(Array.isArray(v))v.forEach(n=>visit(n,node,k,terms));else if(v&&typeof v==='object')visit(v,node,k,terms);}
 }visit(ast,null,'');let result=source;for(const edit of changes.sort((a,b)=>b.start-a.start))result=result.slice(0,edit.start)+edit.value+result.slice(edit.end);
 // Recovery redirects keep the existing, already allowed canonical callback URL.
 if(file==='konto/konto.js')result=result.replace("new URL('./', location.href).href","new URL('/konto/', location.href).href");
 const localized=parse(result,{ecmaVersion:'latest',sourceType:'module',allowReturnOutsideFunction:true});
 function protectedCalls(tree){const calls=[];function visit(node){if(!node||typeof node!=='object')return;if(node.type==='CallExpression'&&['rpc','from','getElementById','querySelector','querySelectorAll','getAttribute','hasAttribute','closest','matches','getItem','setItem','removeItem'].includes(node.callee?.property?.name)){const arg=node.arguments[0],text=arg?.type==='Literal'&&typeof arg.value==='string'?arg.value:arg?.type==='TemplateLiteral'&&!arg.expressions.length?arg.quasis[0].value.cooked:null;if(text!==null)calls.push([node.callee.property.name,text]);}for(const value of Object.values(node))if(Array.isArray(value))value.forEach(visit);else if(value&&typeof value==='object')visit(value);}visit(tree);return JSON.stringify(calls);}
 if(protectedCalls(ast)!==protectedCalls(localized))throw new Error(file+': translation changed a protected API, selector or storage identifier.');
 return result;
}
function json(value,file,key=''){if(typeof value==='string'){
 if(/(?:^|_)(?:id|path|url|version|hash|timezone|time_zone|icon|slug|type|kind|mode|schema|format|ref|permission|action|slot|method)$/.test(key)||key==='status'&&!/\s/.test(value))return value;
 return translated(value,file);
 }if(Array.isArray(value))return value.map(v=>json(v,file,key));if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,json(v,file,k)]));return value;}
function tag(source,file,english){return source.replace(/\b(href|src|action|poster|srcset|placeholder|aria-label|alt|title|content)=(['"])([\s\S]*?)\2/g,(all,key,quote,value)=>{
 let next=value;if(english&&['href','src','action','poster'].includes(key))next=assetTarget(decode(value),file);
 else if(english&&key==='srcset')next=value.split(',').map(part=>{const bits=part.trim().split(/\s+/);bits[0]=assetTarget(bits[0],file);return bits.join(' ');}).join(', ');
 else if(english&&['placeholder','aria-label','alt','title'].includes(key))next=text(value,file,true);
 else if(english&&key==='content'&&/name=["']description["']/i.test(source))next=text(value,file,true);
 else if(english&&key==='content'&&/http-equiv=["']refresh["']/i.test(source))next=value.replace(/(url=)(.*)$/i,(_,prefix,target)=>prefix+assetTarget(target,file));
 return `${key}=${quote}${next}${quote}`;
 });}
function html(source,file,english){
 // Tokenise tags while respecting quoted attributes; script/style bodies are opaque.
 let output='',i=0,skipBody=null;
 while(i<source.length){
  if(skipBody){const end=source.toLowerCase().indexOf('</'+skipBody,i);const body=source.slice(i,end<0?source.length:end);output+=english&&skipBody==='script'&&body.trim()?script(body,file):body;i=end<0?source.length:end;skipBody=null;continue;}
  if(source.startsWith('<!--',i)){const end=source.indexOf('-->',i);const next=end<0?source.length:end+3;output+=source.slice(i,next);i=next;continue;}
  if(source[i]==='<'){let end=i+1,quote=null;for(;end<source.length;end++){const c=source[end];if(quote){if(c===quote)quote=null;}else if(c==='"'||c==="'")quote=c;else if(c==='>')break;}const raw=source.slice(i,end+1);output+=tag(raw,file,english);if(/^<(script|style)\b/i.test(raw))skipBody=raw.match(/^<([a-z]+)/i)[1].toLowerCase();i=end+1;
  }else{const end=source.indexOf('<',i),next=end<0?source.length:end;output+=english?text(source.slice(i,next),file,true):source.slice(i,next);i=next;}
 }
 if(english)output=output.replace('<html lang="de">','<html lang="en">');
 const route='/'+file.replace(/index\.html$/,'');
 const legacyCanonical=output.match(/<link\b[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
 const canonicalPath=legacyCanonical?new URL(legacyCanonical[1],'https://gemden.red').pathname:route;
 const injection=`<!-- gemden-language:start -->\n<meta name="gemden-languages" content="${routes.join(' ')}">\n<link rel="alternate" hreflang="de" href="https://gemden.red${route}">\n<link rel="alternate" hreflang="en" href="https://gemden.red/en${route}">\n<link rel="canonical" href="https://gemden.red${english?'/en':''}${route}">\n<link rel="stylesheet" href="/assets/language.css?v=20261020-1">\n<script src="/assets/language.js?v=20261020-1" defer></script>\n<!-- gemden-language:end -->\n`;
 output=output.replace(/<!-- gemden-language:start -->[\s\S]*?<!-- gemden-language:end -->\s*/g,'').replace('</head>',injection+'</head>');
 let canonicalSeen=false;output=output.replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi,()=>{if(canonicalSeen)return '';canonicalSeen=true;return `<link rel="canonical" href="https://gemden.red${english?'/en':''}${canonicalPath}">`;});
 const switcher=`<!-- gemden-language-switcher:start --><nav class="language-switcher" data-language-switcher aria-label="${english?'Website language':'Sprache der Website'}"><a href="${route}" lang="de" hreflang="de" aria-label="Deutsch"${english?'':' aria-current="true"'}>DE</a><a href="/en${route}" lang="en" hreflang="en" aria-label="English"${english?' aria-current="true"':''}>EN</a></nav><!-- gemden-language-switcher:end -->`;
 if(/<nav[^>]*data-site-nav/.test(output))output=output.replace(/(<nav[^>]*data-site-nav[^>]*>[\s\S]*?<a class="site-mark"[^>]*>[\s\S]*?<\/a>)/,(_,start)=>start+switcher);
 else output=output.replace('</body>',switcher.replace('class="language-switcher"','class="language-switcher language-switcher-floating"')+'</body>');
 if(english&&file==='system/index.html')output=output.replace('<main id="inhalt">','<main id="inhalt"><p class="language-source-note" lang="en">This is an English translation for orientation. The <a href="/assets/data/ffe-systemindex-v0.6.json" lang="de" hreflang="de">original German FFE source</a> remains the reference.</p>');
 return output;
}
for(const [file,source] of sources){let result;
 if(file.endsWith('.html')){const clean=source.replace(/<!-- gemden-language:start -->[\s\S]*?<!-- gemden-language:end -->\s*/g,'').replace(/<!-- gemden-language-switcher:start -->[\s\S]*?<!-- gemden-language-switcher:end -->/g,'');outputs.set(file,html(clean,file,false));result=html(clean,file,true);}
 else if(/\.(?:js|mjs)$/.test(file))result=script(source,file);
 else if(file.endsWith('.json'))result=JSON.stringify(json(JSON.parse(source),file),null,2)+'\n';
 else if(file.endsWith('.css'))result=source.replace(/url\(\s*(['"]?)([^)'"\s]+)\1\s*\)/g,(_,quote,url)=>`url(${quote}${assetTarget(url,file)}${quote})`);
 else result=source;
 outputs.set('en/'+file,result);
}
if(missing.size){const report=[...missing].map(([de,files])=>({de,files:[...files]}));if(!check)await writeFile(path.join(site,'translations/missing-en.json'),JSON.stringify(report,null,2)+'\n');console.error(JSON.stringify({error:'English translations missing',count:report.length,examples:report.slice(0,12)},null,2));process.exitCode=1;}
else{
 if(!check)await unlink(path.join(site,'translations/missing-en.json')).catch(error=>{if(error.code!=='ENOENT')throw error;});
 const manifest=[...outputs.keys()].filter(p=>p.startsWith('en/')).sort();outputs.set('en/generated-files.json',JSON.stringify({generated_by:'scripts/build-languages.mjs',language:'en',files:manifest},null,2)+'\n');
 const different=[];for(const [file,content] of outputs){let previous;try{previous=(await readFile(path.join(site,file),'utf8')).replace(/\r\n/g,'\n');}catch{}if(previous!==content){different.push(file);if(!check){await mkdir(path.dirname(path.join(site,file)),{recursive:true});await writeFile(path.join(site,file),content);}}}
 if(check&&different.length){console.error(JSON.stringify({error:'Generated translations are out of date. Run node scripts/build-languages.mjs.',files:different},null,2));process.exitCode=1;}
 else console.log(JSON.stringify({mode:check?'check':'build',pages:pages.length,generated_files:manifest.length,changed_files:different.length,translation_entries:Object.keys(dictionary).length,source_hash:createHash('sha256').update([...sources].map(([name,text])=>name+'\0'+text).join('\0')).digest('hex')}));
}
