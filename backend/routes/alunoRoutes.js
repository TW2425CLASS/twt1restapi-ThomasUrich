const express = require('express');
const router = express.Router();
const alunoCtrl = require('../controllers/alunoController');

router.get('/', alunoCtrl.getAlunos);
router.post('/', alunoCtrl.createAluno);
router.put('/:id', alunoCtrl.updateAluno);
router.delete('/:id', alunoCtrl.deleteAluno);

module.exports = router;
