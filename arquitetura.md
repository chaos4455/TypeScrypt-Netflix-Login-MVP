# Arquitetura do Projeto Tela-Login-Netflix

Este documento descreve a arquitetura do projeto Tela-Login-Netflix.

## Visão Geral

O projeto é composto por duas partes principais:

* **Frontend:** Responsável pela interface do usuário, construída com HTML, CSS e JavaScript.
* **Backend:** Responsável pela lógica de negócio e acesso ao banco de dados, construído com TypeScript, Express.js, TypeORM e SQLite.

## Frontend

O frontend utiliza HTML para a estrutura, CSS para o estilo (provavelmente Tailwind CSS, baseado nas dependências) e JavaScript para a interação com o usuário.  Os arquivos estão localizados na pasta `frontend/`.

## Backend

O backend é construído com TypeScript, utilizando o framework Express.js para criar um servidor RESTful.  O TypeORM é usado para interagir com o banco de dados SQLite.  A lógica de autenticação provavelmente utiliza o bcrypt para criptografar senhas.  Os arquivos estão localizados na pasta `backend/`.

### Banco de Dados

O projeto utiliza um banco de dados SQLite.  A estrutura do banco de dados é definida em `backend/user.entity.ts` (e possivelmente outros arquivos `.entity.ts` que podem ser adicionados futuramente).

### Componentes Principais

* **`backend/server.ts`:** Arquivo principal do backend, responsável por iniciar o servidor.
* **`backend/auth.controller.ts`:** Controlador responsável pela lógica de autenticação.
* **`backend/database.ts`:** Arquivo responsável pela configuração e conexão com o banco de dados.
* **`backend/user.entity.ts`:** Define a entidade `User` para o banco de dados.


## Tecnologias Utilizadas

* **Frontend:** HTML, CSS (Tailwind CSS), JavaScript
* **Backend:** TypeScript, Express.js, TypeORM, SQLite, bcrypt

## Diagrama (futuro)

Um diagrama UML será adicionado futuramente para representar graficamente a arquitetura.
