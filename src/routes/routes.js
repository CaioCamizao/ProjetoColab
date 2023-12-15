import { Router } from "express";
import { createUser, getAll, deleteUser, updateUser} from "../controllers/UsersController";

const routes = new Router();

routes.get('/', (req, res) => {
    res.status(200).json({ ok: 'connected' });
});

routes.get('/user', getAll);

routes.post('/user', createUser);

routes.delete('/user/:id', deleteUser);

routes.put('/user/:id', updateUser);

export default routes;
