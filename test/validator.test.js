'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidCPF, isValidCNPJ } = require('..');

test('aceita CPFs válidos com e sem formatação', () => {
  assert.equal(isValidCPF('529.982.247-25'), true);
  assert.equal(isValidCPF('11144477735'), true);
});

test('rejeita CPFs com dígito verificador incorreto', () => {
  assert.equal(isValidCPF('529.982.247-24'), false);
  assert.equal(isValidCPF('123.456.789-00'), false);
});

test('rejeita CPFs repetidos, incompletos ou ausentes', () => {
  assert.equal(isValidCPF('111.111.111-11'), false);
  assert.equal(isValidCPF('123'), false);
  assert.equal(isValidCPF(null), false);
});

test('aceita CNPJs válidos com e sem formatação', () => {
  assert.equal(isValidCNPJ('11.222.333/0001-81'), true);
  assert.equal(isValidCNPJ('11444777000161'), true);
});

test('rejeita CNPJs com dígito verificador incorreto', () => {
  assert.equal(isValidCNPJ('11.222.333/0001-80'), false);
  assert.equal(isValidCNPJ('11.444.777/0001-60'), false);
});

test('rejeita CNPJs repetidos, incompletos ou ausentes', () => {
  assert.equal(isValidCNPJ('00.000.000/0000-00'), false);
  assert.equal(isValidCNPJ('11222333'), false);
  assert.equal(isValidCNPJ(undefined), false);
});
