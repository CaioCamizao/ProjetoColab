import { all, create } from '../services/usersServices';

const getAll = async (req, res) => {
  const users = await all();
  return res.status(200).json(users);
};

const createUser = async () => {
  const { email, senha } = req.body;

  const { email: mail, _id } = await create({ email, senha });
  return res.status(200).json({ mail, _id });
};

const login = async () => null;

export { getAll, login, createUser };