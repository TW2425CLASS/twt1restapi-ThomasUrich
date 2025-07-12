const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/alunoController');

/**
 * @swagger
 * tags:
 *   name: Alunos
 *   description: Endpoints para gestão de alunos
 */

/**
 * @swagger
 * /alunos:
 *   get:
 *     summary: Lista todos os alunos
 *     tags: [Alunos]
 *     responses:
 *       200:
 *         description: Lista de alunos
 */
router.get('/', alunoCtrl.getAlunos);

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     tags: [Alunos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - apelido
 *               - curso
 *               - anoCurricular
 *             properties:
 *               nome:
 *                 type: string
 *               apelido:
 *                 type: string
 *               curso:
 *                 type: string
 *               anoCurricular:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Aluno criado com sucesso
 */
router.post('/', alunoCtrl.createAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   put:
 *     summary: Atualiza um aluno existente
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               apelido:
 *                 type: string
 *               curso:
 *                 type: string
 *               anoCurricular:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Aluno atualizado com sucesso
 */
router.put('/:id', alunoCtrl.updateAluno);

/**
 * @swagger
 * /alunos/{id}:
 *   delete:
 *     summary: Remove um aluno
 *     tags: [Alunos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Aluno removido com sucesso
 */
router.delete('/:id', alunoCtrl.deleteAluno);

module.exports = router;
