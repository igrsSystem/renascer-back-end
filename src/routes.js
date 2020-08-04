import { Router } from 'express';
import User from './app/models/Users/Users';
const routes = new Router();


routes.get('/', async (req, res) => {
  const user  =  await User.create({id : '232538' , email : 'igorsoaress771@gmail.com' , password_hash: 'sdfhgqkhgfakgk' })
    return res.status(200).json( user )

})
export default routes 