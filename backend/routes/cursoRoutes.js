const express = require('express');
const router = express.Router();
const cursoCtrl = require('../controllers/cursoController');

router.get('/', cursoCtrl.getCursos);
router.post('/', cursoCtrl.createCurso);
router.put('/:id', cursoCtrl.updateCurso);
router.delete('/:id', cursoCtrl.deleteCurso);

module.exports = router;
