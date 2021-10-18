const connect = require('../config/config');

const getList = async () => {
  const [getAll] = await connect.execute(
    'SELECT * FROM Cafezin.cadastros;'
  );
  return getAll;
}

const getByIdCard = async (cardId) => {
  const [getByIdCard] = await connect.execute(
    'SELECT * FROM Cafezin.cadastros WHERE CPF = ?;',
    [cardId],
  );

  return getByIdCard;
};

const getByFood = async (food) => {
  const [getByFoodChosen] = await connect.execute(
    'SELECT * FROM Cafezin.cadastros WHERE comida = ?;',
    [food],
  );

  return getByFoodChosen;
};


const insertOne = async (name, cardId, breakfast) => {
  const inserted = await connect.execute(
    'INSERT INTO Cafezin.cadastros (nome, CPF, comida) VALUES (?, ?, ?);',
    [name, cardId, breakfast]
  );

  return inserted;
};

const updateUser = async (info, cadastro) => {
  const {nome, cpf, comida } = info;
  const userToUpdate = await connect.execute(
    'UPDATE Cafezin.cadastros SET nome = ?, cpf = ?, comida = ? WHERE cpf = ?',
    [nome, cpf, comida, cadastro]
  );
  return userToUpdate;
};

const deleteUser = async (cardId) => {
  const deletedUser = await connect.execute(
    'DELETE FROM Cafezin.cadastros WHERE cpf = ?',
    [cardId]
  );
  return deletedUser;
};

module.exports = {
  getList,
  getByIdCard,
  getByFood,
  insertOne,
  updateUser,
  deleteUser,
};