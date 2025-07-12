require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/alunos', require('./routes/alunoRoutes'));
app.use('/cursos', require('./routes/cursoRoutes'));

// Conexão ao MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('🟢 Conectado ao MongoDB Atlas');
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Servidor iniciado em http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => console.error('Erro ao conectar:', err));
