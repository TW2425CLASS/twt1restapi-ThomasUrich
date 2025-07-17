const Aluno = require('../models/aluno');

exports.getAlunos = async (req, res) => {
  const alunos = await Aluno.find();
  res.json(alunos);
};

exports.createAluno = async (req, res) => {
  const novoAluno = new Aluno(req.body);
  await novoAluno.save();
  res.status(201).json(novoAluno);
};

exports.updateAluno = async (req, res) => {
  const alunoAtualizado = await Aluno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(alunoAtualizado);
};

exports.deleteAluno = async (req, res) => {
  await Aluno.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

exports.getAlunoPorId = async (req, res) => {
  try {
    const aluno = await Aluno.findById(req.params.id);
    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }
    res.json(aluno);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar aluno' });
  }
};
