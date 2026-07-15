'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { spawnSync } = require('node:child_process');
const path = require('node:path');

const cli = path.resolve(__dirname, '../bin/br-docs-validator.js');

function run(...args) {
  return spawnSync(process.execPath, [cli, ...args], { encoding: 'utf8' });
}

test('CLI retorna sucesso para um documento válido', () => {
  const result = run('cpf', '529.982.247-25');

  assert.equal(result.status, 0);
  assert.match(result.stdout, /CPF válido/);
});

test('CLI retorna código 1 para um documento inválido', () => {
  const result = run('cnpj', '11.222.333/0001-80');

  assert.equal(result.status, 1);
  assert.match(result.stderr, /CNPJ inválido/);
});

test('CLI retorna código 2 quando os argumentos estão incorretos', () => {
  const result = run('rg');

  assert.equal(result.status, 2);
  assert.match(result.stderr, /Uso:/);
});
