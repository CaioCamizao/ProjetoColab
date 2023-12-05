import { all, create } from '../services/usersServices';

const getAll = async (req, res) => {
  const users = await all();
  return res.status(200).json(users);
};

const createUser = async () => {
  const { email, senha } = req.body;

  const user = await create({ email, senha });
  return res.status(200).json(user);
};

const login = async () => null;

export { getAll, login, createUser };