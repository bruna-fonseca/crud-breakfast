const httpStatus = require('http-status-codes');

const { getAllService,
  createdService,
  updateUserService,
  deleteUserService } = require('../services/serviceCadastro');

const getAll = async (_req, res) => {
  const list = await getAllService();

  res.status(httpStatus.OK).json(list);
};


const createLogin = async (req, res) => {
  try {
    const { nome, cpf, comida } = req.body;
    await createdService(nome, cpf, comida);
    res.status(httpStatus.CREATED).json({ message: 'cadastro criado com sucesso!' });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { info, cadastro } = req.body;
    await updateUserService(info, cadastro);
    res.status(httpStatus.OK).json({ message: 'cadastro atualizado com sucesso!'});
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({ message: error.message});
  }
};

const deleteUserController = async (req, res) => {
  try {
    const { cpf } = req.params;
    await deleteUserService(cpf);
    res.status(httpStatus.NO_CONTENT).json({ message: 'cadastro deletado com sucesso'});
  } catch (error) {
    res.stauts(httpStatus.BAD_REQUEST).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  createLogin,
  updateUser,
  deleteUserController,
};
