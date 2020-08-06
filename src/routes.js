import { Router } from 'express';
import  auth  from './app/middlewares/auth'
import UserController from './app/controllers/User/UserController';
import SessioController from './app/controllers/Session/SessionContoller';
import MembroController from './app/controllers/Membros/MembrosController';

const routes = new Router();

routes.post('/session', SessioController.store);

routes.use(auth);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/:id', UserController.update);

routes.post('/membros', MembroController.store);




export default routes 