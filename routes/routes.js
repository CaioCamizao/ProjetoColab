import { Router } from "express";
import { createUser, getAll } from "../controllers/UsersController";

const routes = new Router();

routes.get('/', (req, res) => {
    res.status(200).json({ ok: 'conected' });
});

routes.get('/user', getAll);

routes.post('/user', createUser);

export default routes;