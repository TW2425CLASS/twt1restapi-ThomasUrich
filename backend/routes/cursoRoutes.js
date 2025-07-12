const express = require('express');
const router = express.Router();
const cursoCtrl = require('../controllers/cursoController');

/**
 * @swagger
 * tags:
 *   name: Cursos
 *   description: Endpoints para gestão de cursos
 */

/**
 * @swagger
 * /cursos:
 *   get:
 *     summary: Lista todos os cursos
 *     tags: [Cursos]
 *     responses:
 *       200:
 *         description: Lista de cursos
 */
router.get('/', cursoCtrl.getCursos);

/**
 * @swagger
 * /cursos:
 *   post:
 *     summary: Cria um novo curso
 *     tags: [Cursos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Curso criado com sucesso
 */
router.post('/', cursoCtrl.createCurso);

/**
 * @swagger
 * /cursos/{id}:
 *   put:
 *     summary: Atualiza um curso
 *     tags: [Cursos]
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
 *     responses:
 *       200:
 *         description: Curso atualizado com sucesso
 */
router.put('/:id', cursoCtrl.updateCurso);

/**
 * @swagger
 * /cursos/{id}:
 *   delete:
 *     summary: Remove um curso
 *     tags: [Cursos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Curso removido com sucesso
 */
router.delete('/:id', cursoCtrl.deleteCurso);

module.exports = router;
