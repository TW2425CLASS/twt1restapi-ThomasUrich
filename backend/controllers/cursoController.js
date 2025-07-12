const Curso = require('../models/curso');

// GET - Listar todos os cursos
exports.getCursos = async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
};

// POST - Criar um novo curso
exports.createCurso = async (req, res) => {
  const novoCurso = new Curso(req.body);
  await novoCurso.save();
  res.status(201).json(novoCurso);
};

// PUT - Atualizar um curso por ID
exports.updateCurso = async (req, res) => {
  const cursoAtualizado = await Curso.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(cursoAtualizado);
};

// DELETE - Deletar um curso por ID
exports.deleteCurso = async (req, res) => {
  await Curso.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
