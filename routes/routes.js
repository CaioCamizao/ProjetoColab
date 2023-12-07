import { Router } from "express";
import { createUser, getAll, deleteUser } from "../controllers/UsersController";

const routes = new Router();

routes.get('/', (req, res) => {
    res.status(200).json({ ok: 'conected' });
});

routes.get('/user', getAll);

routes.post('/user', createUser);

routes.delete('user/:id', deleteUser);

export default routes;