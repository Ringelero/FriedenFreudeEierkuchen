import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import Ajv2020 from 'ajv/dist/2020.js';

async function json(path) {
  return JSON.parse(await readFile(new URL(path, import.meta.url), 'utf8'));
}

const fixtures = [
  ['../schemas/gemden-capability.v1.schema.json', '../assets/data/capabilities.v1.json'],
  ['../schemas/gemden-module-manifest.v1.schema.json', '../assets/data/modules.v1.json'],
  ['../schemas/gemden-page-document.v1.schema.json', '../assets/data/pages/julius.v1.json']
];

test('published capability, module and page JSON satisfy their Draft 2020-12 schemas', async () => {
  for (const [schemaPath, dataPath] of fixtures) {
    const [schema, data] = await Promise.all([json(schemaPath), json(dataPath)]);
    const ajv = new Ajv2020({ allErrors: true, strict: true });
    const validate = ajv.compile(schema);
    assert.equal(validate(data), true, `${dataPath}: ${ajv.errorsText(validate.errors)}`);
  }
});
