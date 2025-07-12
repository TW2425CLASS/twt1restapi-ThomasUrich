# API de Gestão de Alunos e Cursos

Este projeto é uma aplicação web completa que permite cadastrar, listar, editar e excluir **alunos** e **cursos**. A aplicação possui um backend em Node.js com MongoDB e um frontend simples em HTML/JavaScript.

---

## Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **Banco de Dados**: MongoDB Atlas
- **Documentação**: Swagger (via `swagger-ui-express`)
- **Frontend**: HTML, CSS e JS puro
- **Hospedagem**: Render

---

## Funcionalidades

### Alunos

- Criar aluno
- Editar aluno
- Remover aluno
- Listar todos os alunos

### Cursos

- Criar curso
- Editar curso
- Remover curso
- Listar todos os cursos

### Swagger

- Documentação acessível na rota `/api-docs`
---

## Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz com o seguinte conteúdo:

```
MONGO_URI=Sua_string_de_conexao_do_MongoDB_Atlas
PORT=3000
```

### 4. Inicie o servidor

```bash
node server.js
```

Acesse em: [http://localhost:3000](http://localhost:3000)

---

## Endpoints Principais

### Alunos

- `GET /alunos` – Lista todos os alunos
- `POST /alunos` – Cria um novo aluno
- `PUT /alunos/:id` – Atualiza um aluno
- `DELETE /alunos/:id` – Remove um aluno

### Cursos

- `GET /cursos` – Lista todos os cursos
- `POST /cursos` – Cria um novo curso
- `PUT /cursos/:id` – Atualiza um curso
- `DELETE /cursos/:id` – Remove um curso

---

## Estrutura do Projeto

```
/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── docs/ (opcional)
├── frontend/
│   └── index.html
├── server.js
├── .env
└── README.md
```

---
## Links Funcionais
- [Aplicação completa (Frontend + Backend)](https://twt1restapi-thomas-urich-rivv.vercel.app/)
- [API REST de Alunos](https://twt1restapi-thomasurich.onrender.com/alunos)
- [API REST de Cursos](https://twt1restapi-thomasurich.onrender.com/cursos)
- [Swagger funcional](https://twt1restapi-thomasurich.onrender.com/api-docs/#/)
