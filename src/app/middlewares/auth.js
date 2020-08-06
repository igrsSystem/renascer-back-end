import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import  secretAut  from '../../config/auth';
import { returnNotAuth } from '../helpers/returnsNotAuth/index';

export default  async  (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(secretAut)
    if (!authHeader)
        return returnNotAuth('Token não enviado na requisição', res);

    const [, token] = authHeader.split(' ');

    try {
        const decode = await promisify(jwt.verify)(token, secretAut.secret);
        req.userId = decode.id
      
    } catch (error) {
        return returnNotAuth(error, res);
    }

    return next()
}