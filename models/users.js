import connection from './mongoDbConnection';

const getAll = async () => {
  const db = await connection();
  return db.collection('users').find().toArray();
};

const newUser = async ({ email, senha }) => {
  const db = await connection();
  const user = await db.collection('users').insertOne({ email, senha });
  const { insertedId: _id } = user;
  return { email, _id };
};

const userExists = async ({ email, uuid }) => {
  const db = await connection();
  let user = null;
  if (uuid) {
    user = await db.collection('users').findOne({ uuid });
  } else {
    user = await db.collection('users').findOne({ email });
  }
  return user;
}

const login = async () => null;

export { getAll, login, newUser, userExists };
