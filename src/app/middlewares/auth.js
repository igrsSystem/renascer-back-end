import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import { secretAut } from '../../config/auth';
import { returnNotAuth } from '../helpers/returnsNotAuth/index';

export const auth = async  (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    if (!authHeader)
        return returnNotAuth('Token não enviado na requisição', res);

    const [, token] = authHeader.split(' ');

    try {
        const decode = await promisify(jwt.verify)(token, secretAut.secret);
        console.log(decode)
    } catch (error) {
        return returnNotAuth(error, res);
    }

    return next()
}