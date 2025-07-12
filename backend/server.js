require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.use('/alunos', require('./routes/alunoRoutes'));
app.use('/cursos', require('./routes/cursoRoutes'));

mongoose.connect(process.env.MONGO_URI, {

})
.then(() => {
  console.log(' Conectado ao MongoDB Atlas');
  app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado em http://localhost:${process.env.PORT}`);
  });
})
.catch((err) => console.error('Erro ao conectar:', err));
