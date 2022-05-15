# Back end Challenge Voll Solutions

# Contexto
Este projeto trata-se de uma plataforma para controle de pontos com loja virtual.

# Frontend

O frontend deste projeto esta situado em outro repositório, você pode encontra-lo neste [link.](https://github.com/Henrique-M01/frontVollSollutions)

## Técnologias usadas

Back-end:
> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6, Typescript, Prisma, Json-Web-Token


## Instalando Dependências

Para tudo funcionar corretamente você precisa ter um Banco de Dados MySQL localmente, você encontra-ra mais informações sobre a instalação [aqui.](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

Crie um arquivo .env seguindo o padrão de .env.example, adicionando suas credenciais do banco de dados, a porta do servidor (Use 3006 para rodar o frontend corretamente) e o segredo da autenticação via token.

> Backend

Após clonar o projeto:

```bash
cd challengeVollSolutions/ 
npm install
``` 

## Executando aplicação

* Para rodar o back-end:

  ```
  npm run db:start // Este comando ira criar seu banco de dados, as tabelas e popula-lo.

  // Ira aparecer uma pergunta na tela, aperte Y e prossiga a criação do banco.
  ```

  ```
  npm start // Este comando coloca a aplicação rodando, cheque que ela esteja rodando na porta 3006
  ```


## Executando Testes

* Para rodar todos os testes:

  ```
    npm run test
  ```

## Melhorias a serem realizadas


