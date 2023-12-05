import { getAll, newUser, userExists } from "../models/Users";

const all = async () => {
    const users = await getAll();
    return users;
};

const create = async ({ email, senha }) => {
    const usuario = await  userExists({ email });

    if(usuario) return usuario;

    const user = await newUser({ email, senha });
    return user;
};

const login = async () => null;

export { all, login, create };