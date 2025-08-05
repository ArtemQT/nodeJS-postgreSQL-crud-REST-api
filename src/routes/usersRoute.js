import {Router} from 'express';
import UsersController from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.get('/', UsersController.getAllUsers);
usersRouter.get('/:id', UsersController.getUser);
usersRouter.post('/', UsersController.createUser);
usersRouter.put('/:id', UsersController.updateUser);
usersRouter.delete('/:id', UsersController.deleteUser);

export default usersRouter;

