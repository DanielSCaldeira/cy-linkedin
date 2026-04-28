# cy-linkedin

Automação de testes E2E para LinkedIn utilizando Cypress.

## Descrição
Este projeto tem como objetivo automatizar cenários de testes end-to-end (E2E) na plataforma LinkedIn, utilizando o framework [Cypress](https://www.cypress.io/). Os testes simulam interações reais de um usuário, como login, busca de vagas e aplicação em oportunidades.

## Instalação
Clone o repositório e instale as dependências:

```bash
git clone https://github.com/seu-usuario/cy-linkedin.git
cd cy-linkedin
npm install
```

## Executando os Testes
Para abrir o Test Runner do Cypress:

```bash
npm run cypress:open
```

Ou para rodar os testes em modo headless:

```bash
npx cypress run
```

## Estrutura do Projeto

```
cy-linkedin/
├── cypress.config.js         # Configuração do Cypress
├── package.json              # Dependências e scripts
├── cypress/
│   ├── e2e/
│   │   ├── spec.cy.js        # Especificação dos testes E2E
│   │   ├── elements.js       # Mapeamento de elementos da interface
│   ├── fixtures/             # Dados mockados para os testes
│   └── support/
│       ├── commands.js       # Comandos customizados
│       └── e2e.js            # Configuração global dos testes
```

## Principais Dependências

- [cypress](https://www.npmjs.com/package/cypress)
- [cypress-xpath](https://www.npmjs.com/package/cypress-xpath)
- [cypress-dark](https://www.npmjs.com/package/cypress-dark) (tema escuro para o runner)

## Observações Importantes

- **Nunca compartilhe credenciais reais em arquivos de teste.**
- Os seletores e fluxos podem mudar conforme atualizações do LinkedIn.
- Para customizar comandos, utilize o arquivo `cypress/support/commands.js`.

---
Desenvolvido por Daniel S Caldeira.

