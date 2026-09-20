import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import ts from 'typescript';

const source = await readFile(new URL('../src/app/api/intake/route.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { POST } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString('base64')}`);

test('closed intake never reads bodies or forwards, including direct bursts with a configured legacy key', async () => {
  const previousFetch = globalThis.fetch;
  const previousKey = process.env.WEB3FORMS_ACCESS_KEY;
  let calls = 0;
  let reads = 0;
  process.env.WEB3FORMS_ACCESS_KEY = 'test-only-obsolete-key';
  globalThis.fetch = async () => { calls++; throw new Error('Unexpected outbound request'); };
  try {
    const bodies = ['not-json', '{}', JSON.stringify({name:'Test',email:'test@example.com',confidentiality:'Attorney-directed',message:'test',objective:'test',consent:'Agreed'}), JSON.stringify({botcheck:'filled'})];
    const responses = await Promise.all(Array.from({length:100}, (_, i) => {
      const request = new Request('https://example.test/api/intake', {method:'POST',body:bodies[i % bodies.length]});
      request.json = async () => { reads++; throw new Error('Unexpected body read'); };
      return POST(request);
    }));
    for (const response of responses) {
      assert.equal(response.status, 503);
      assert.equal(response.headers.get('Cache-Control'), 'no-store');
      assert.deepEqual(await response.json(), {ok:false,code:'INTAKE_CLOSED',error:'Online intake is currently closed. No submission was accepted.'});
    }
    assert.equal(calls, 0);
    assert.equal(reads, 0);
  } finally {
    globalThis.fetch = previousFetch;
    if (previousKey === undefined) delete process.env.WEB3FORMS_ACCESS_KEY;
    else process.env.WEB3FORMS_ACCESS_KEY = previousKey;
  }
});
