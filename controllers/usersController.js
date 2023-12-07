import { all, create, deleter } from '../services/usersServices';

const getAll = async (req, res) => {
  const users = await all();

  const id = '_id';

  const newList = users.map((user) => ({
    email: user.email,
    _id: user[`${id}`],
  }));
  return res.status(200).json(newList);
};

const createUser = async (req, res) => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await create({ email, senha });
  return res.status(200).json({ mail, _id });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const user = deleter({ id });
  return res.status(200).json(user);
};

const login = async () => null;

export { getAll, login, createUser, deleteUser };
