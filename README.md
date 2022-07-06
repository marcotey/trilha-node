## 💻 Sobre o projeto

Esse é um pequeno projeto feito para atender ao teste prático proposto pela contratante.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

-   [Node.js][nodejs]
-   [TypeScript][typescript]

## 🚀 Como executar o projeto

### Pré-requisitos

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs] e o [Docker].

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/xxxxx

# execute o comando abaixo para levantar a instância do docker com os componentes necessários.
$ docker-compose up -d

# O servidor inciará na porta:3333 - acesse http://localhost:3333

# Os testes podem ser feitos localmente por questões de conexão entre o jest e o redis dentro do container.

# Para tanto, é necessário instalar todas as dependências do projeto.
$ yarn

# Depois basta executar o comando abaixo para executar a suit de testes do jest.
$ yarn test
```

### Observações sobre a autenticação

```bash
# Como não foi possível realizar a validação do token, pois não houve acesso ao recurso. Assim sendo, foi inserido o uuid fixo: "794fad69-3917-498f-8a65-1ecde969f0db" que é retornado pela "sub" do jwt e usado como parametro de comparação para realizar a "validação" do token. Essa validação foi feita no arquivo "ensureAuthenticated.ts".

# O token utilizado para o desenvolvimento dessa aplicação foi:{eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyTGYtamFReXZmQTNCN3dpVHZ3VkxhMjV1cHhiXzUtQXhZSDhmY3kySHhVIn0.eyJleHAiOjE2NTcxNDAzNTIsImlhdCI6MTY1NzE0MDA1MiwianRpIjoiNDc3Mzc1ZTUtYmE5Zi00ZjJkLTg3MDUtODI4MTMwZjBhMWIxIiwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zZWd1cm9zLnZpdHRhLmNvbS5ici9hdXRoL3JlYWxtcy9jYXJlZXJzIiwic3ViIjoiNzk0ZmFkNjktMzkxNy00OThmLThhNjUtMWVjZGU5NjlmMGRiIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoiY3VzdG9tZXJzIiwiYWNyIjoiMSIsInJlc291cmNlX2FjY2VzcyI6eyJjdXN0b21lcnMiOnsicm9sZXMiOlsidXNlciJdfX0sInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwiLCJjbGllbnRJZCI6ImN1c3RvbWVycyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiY2xpZW50SG9zdCI6IjEwLjUwLjIuMjQ0IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic2VydmljZS1hY2NvdW50LWN1c3RvbWVycyIsImNsaWVudEFkZHJlc3MiOiIxMC41MC4yLjI0NCJ9.F10zVjA8Aj8oeZmTHauVpMw9FrMShM0y5I4zn34DldoQE0YHPALGaS5ohMA8OxtAePwD4CH7tkb8eyaV7OVaoTqq7tK551AmRoDJPcPLPq40QTkvTXrUnhFONS3MUamZlyN-WZOFOgiRfDp_smxNU5nWW5toH016tH4lZHseGSNTHsULHsGf15ov2r7NGGdSCzZ1JG9HzmThaDW2fyMwjxrKqukujC_z1ie9TppeLd_61IwalKwOJ63piH58CTxAKfOhO6EU-vgfDWeZBPKuvP56YgyuUlr-NGwu-NMKAukPHgxSL9gDrK7W3Jv0xAX4TVctb6q8ebHKduDwxkmakQ}


# Caso seja necessário remover essa validação, basta tirar o middleware ensureAuthtenticated das rotas no arquivo "customer.routes.ts"
```

Feito por Marco Antonio 👋🏽 [Entre em contato!](https://www.linkedin.com/in/marcoantonio12111992/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
