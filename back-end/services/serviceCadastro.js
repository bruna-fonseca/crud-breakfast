const { getList,
  insertOne,
  getByIdCard,
  getByFood, 
  updateUser,
  deleteUser } = require('../models/modelCadastro');

const getAllService = async () => {
  const list = await getList();

  return list;
};

const verifyCPF = async (cpf) => {
  const getCadastro = await getByIdCard(cpf);
  if (getCadastro.length > 0) {
    throw new Error('CPF já está sendo utilizado!');
  }
};

const verifyFood = async (food) => {
  const getFood = await getByFood(food);
  if (getFood.length > 0) {
    throw new Error('CPF já está sendo utilizado!');
  }
};


const createdService = async (name, cardId, breakfast) => {
  await verifyCPF(cardId);
  await verifyFood(breakfast);

  const createdLogin = await insertOne(name, cardId, breakfast);
  return createdLogin;
};

const updateUserService = async (info, cadastro) => {
  const updatedUser = await updateUser(info, cadastro);
  return updatedUser;
}

const deleteUserService = async (cardId) => {
  const userToBeDeleted = await deleteUser(cardId);

  return userToBeDeleted;
}

module.exports = {
  getAllService,
  createdService,
  updateUserService,
  deleteUserService,
};