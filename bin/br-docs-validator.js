#!/usr/bin/env node
'use strict';

const { isValidCPF, isValidCNPJ } = require('../src');

const [, , type, value] = process.argv;

function printUsage() {
  console.error('Uso: br-docs-validator <cpf|cnpj> <documento>');
  console.error('Exemplo: br-docs-validator cpf 529.982.247-25');
}

if (!type || !value || !['cpf', 'cnpj'].includes(type.toLowerCase())) {
  printUsage();
  process.exitCode = 2;
} else {
  const normalizedType = type.toLowerCase();
  const isValid = normalizedType === 'cpf' ? isValidCPF(value) : isValidCNPJ(value);
  const label = normalizedType.toUpperCase();

  if (isValid) {
    console.log(`${label} válido`);
  } else {
    console.error(`${label} inválido`);
    process.exitCode = 1;
  }
}
