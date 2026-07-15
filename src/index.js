'use strict';

/**
 * Remove a formatação comum de um documento e devolve apenas os dígitos.
 * Valores que não sejam strings ou números resultam em uma string vazia.
 *
 * @param {string|number} value
 * @returns {string}
 */
function onlyDigits(value) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    return '';
  }

  return String(value).replace(/\D/g, '');
}

/**
 * Verifica se todos os caracteres de uma string são iguais.
 *
 * @param {string} value
 * @returns {boolean}
 */
function hasRepeatedDigits(value) {
  return /^(\d)\1+$/.test(value);
}

/**
 * Valida um CPF numérico, com ou sem pontuação.
 *
 * @param {string|number} value
 * @returns {boolean}
 */
function isValidCPF(value) {
  const cpf = onlyDigits(value);

  if (cpf.length !== 11 || hasRepeatedDigits(cpf)) {
    return false;
  }

  for (let position = 9; position < 11; position += 1) {
    let sum = 0;

    for (let index = 0; index < position; index += 1) {
      sum += Number(cpf[index]) * (position + 1 - index);
    }

    const remainder = (sum * 10) % 11;
    const checkDigit = remainder === 10 ? 0 : remainder;

    if (checkDigit !== Number(cpf[position])) {
      return false;
    }
  }

  return true;
}

/**
 * Valida um CNPJ numérico, com ou sem pontuação.
 *
 * @param {string|number} value
 * @returns {boolean}
 */
function isValidCNPJ(value) {
  const cnpj = onlyDigits(value);

  if (cnpj.length !== 14 || hasRepeatedDigits(cnpj)) {
    return false;
  }

  const calculateDigit = (base) => {
    let weight = base.length - 7;
    let sum = 0;

    for (const digit of base) {
      sum += Number(digit) * weight;
      weight -= 1;
      if (weight < 2) weight = 9;
    }

    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const firstDigit = calculateDigit(cnpj.slice(0, 12));
  const secondDigit = calculateDigit(`${cnpj.slice(0, 12)}${firstDigit}`);

  return cnpj.endsWith(`${firstDigit}${secondDigit}`);
}

module.exports = {
  isValidCPF,
  isValidCNPJ,
};
