import { Router } from 'express';
import { auth } from './app/middlewares/auth'
import UserController from './app/controllers/User/UserController';
import SessioController from './app/controllers/Session/SessionContoller';

const routes = new Router();

routes.post('/session', SessioController.store);

routes.use(auth);

routes.post('/users', UserController.store);




export default routes 