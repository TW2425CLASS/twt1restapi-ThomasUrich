// backend/docs/swaggerConfig.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Gestão de Alunos',
      version: '1.0.0',
      description: 'Documentação da API de Alunos e Cursos',
    },
    servers: [
      {
        url: 'https://twt1restapi-thomasurich.onrender.com',
      },
    ],
  },
  apis: [__dirname + '/../routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
