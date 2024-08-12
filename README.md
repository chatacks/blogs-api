# Blogs API

Esta é uma aplicação de gerenciamento de conteúdo para blogs desenvolvida em Node.js, utilizando o pacote Sequelize para realizar operações CRUD (Criar, Ler, Atualizar, Deletar) em posts. A aplicação é construída seguindo os princípios REST, com endpoints conectados ao banco de dados.

## Visão Geral

O Blog API permite criar e gerenciar posts de blog, onde cada post está associado a um usuário e pode ser categorizado em uma ou mais categorias. A aplicação também lida com a autenticação de usuários, garantindo que apenas usuários autenticados possam criar, editar ou excluir posts.

## Estrutura do Projeto

Este projeto foi desenvolvido utilizando a arquitetura de camadas **MSC (Model, Service, Controller)**, visando uma melhor organização e separação de responsabilidades. A camada **Model** cuida da interação com o banco de dados, a camada **Service** implementa a lógica de negócios, e a camada **Controller** é responsável por gerenciar as requisições e respostas da API.

## Funcionalidades

- **CRUD de Posts**: Operações de criação, leitura, atualização e exclusão de posts.
- **Autenticação de Usuários**: Requer login para criação e gerenciamento de posts.
- **Categorias de Posts**: Implementa a relação entre posts e categorias, permitindo que cada post seja associado a uma ou mais categorias.
- **Relação User-Post**: Associa cada post a um usuário específico, permitindo a gestão personalizada de conteúdo.
- **Endpoints RESTful**: Estrutura de API seguindo os princípios REST, conectando os endpoints ao banco de dados.

## Tecnologias Utilizadas

- **Linguagem**: JavaScript (Node.js)
- **Framework Web**: Express
- **ORM**: Sequelize
- **Banco de Dados**: MySQL
- **Validação**: Joi
- **Autenticação**: JSON Web Token (JWT)
- **Registro de Logs**: Morgan
- **Testes**: Mocha, Chai, Sinon, Jest, Supertest
- **Ferramentas de Desenvolvimento**: Nodemon, ESLint, NYC, Sequelize CLI, ShellJS

## Instalação

1. **Clone o repositório**:

   ```bash
   git clone git@github.com:chatacks/blogs-api.git
   cd blogs-api
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Configure o banco de dados**:

   - Crie um banco de dados MySQL e configure suas credenciais no arquivo `.env`.

   - Execute as migrações para criar as tabelas necessárias:

     ```bash
     npx sequelize-cli db:migrate
     ```

4. **Inicie a aplicação**:

   ```bash
   npm run dev || npm start
   ```

   A aplicação estará disponível em `http://localhost:3000`.

## Endpoints Principais

- **POST /login**: Autenticação do usuário, retornando um token JWT.
- **POST /posts**: Criação de um novo post (necessita de autenticação).
- **GET /posts**: Recupera todos os posts.
- **GET /posts/:id**: Recupera um post específico pelo ID.
- **PUT /posts/:id**: Atualiza um post existente (necessita de autenticação).
- **DELETE /posts/:id**: Exclui um post específico (necessita de autenticação).
- **GET /categories**: Recupera todas as categorias.
- **POST /categories**: Criação de uma nova categoria (necessita de autenticação).

## Testes

Os testes foram configurados para garantir a confiabilidade da aplicação. Para executá-los, utilize o comando:

```bash
npm test
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues para relatar problemas ou sugerir melhorias. Pull requests também são apreciados.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Referências

- [Documentação do Node.js](https://nodejs.org/)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do Sequelize](https://sequelize.org/)
- [Documentação do MySQL](https://dev.mysql.com/doc/)
- [Documentação do JWT](https://jwt.io/)
- [Documentação do Mocha](https://mochajs.org/)
- [Documentação do Chai](https://www.chaijs.com/)
