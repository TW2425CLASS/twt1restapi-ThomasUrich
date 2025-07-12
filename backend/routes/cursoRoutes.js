const express = require('express');
const router = express.Router();
const cursoCtrl = require('../controllers/cursoController');

router.get('/', cursoCtrl.getCursos);

module.exports = router;
