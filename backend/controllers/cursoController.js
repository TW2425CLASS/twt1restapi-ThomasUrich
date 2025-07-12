const Curso = require('../models/curso');

exports.getCursos = async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
};
