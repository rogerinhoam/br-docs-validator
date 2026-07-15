# br-docs-validator

Validador pequeno de CPF e CNPJ para Node.js. Funciona como biblioteca e pela linha de comando, sem dependências externas.

> Este pacote valida a estrutura e os dígitos verificadores de documentos numéricos. Ele não consulta a situação cadastral na Receita Federal.

## Requisitos

- Node.js 18 ou mais recente

## Instalação

```bash
npm install br-docs-validator
```

## Uso como biblioteca

```js
const { isValidCPF, isValidCNPJ } = require('br-docs-validator');

isValidCPF('529.982.247-25'); // true
isValidCPF('529.982.247-24'); // false

isValidCNPJ('11.222.333/0001-81'); // true
isValidCNPJ('11.222.333/0001-80'); // false
```

As duas funções aceitam documentos com ou sem pontuação e sempre retornam um valor booleano.

## Uso pela linha de comando

Depois de instalar globalmente (`npm install -g br-docs-validator`) ou usando `npx`:

```bash
br-docs-validator cpf 529.982.247-25
br-docs-validator cnpj 11.222.333/0001-81
```

Códigos de saída:

- `0`: documento válido;
- `1`: documento inválido;
- `2`: argumentos incorretos.

## Desenvolvimento

Clone o projeto e execute:

```bash
npm test
npm run check
```

Os testes usam apenas o executor nativo `node:test`.

## Como contribuir

Contribuições são bem-vindas. Abra uma issue descrevendo a proposta ou envie um pull request com testes para o comportamento alterado.

1. Crie um fork e uma branch para sua mudança.
2. Implemente a alteração e adicione testes.
3. Execute `npm test` e `npm run check`.
4. Abra um pull request explicando o problema e a solução.

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE).
