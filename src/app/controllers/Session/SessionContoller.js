import jwt from 'jsonwebtoken';
import User from '../../models/Users/Users';
import { returnNotAuth } from '../../helpers/returnsNotAuth/index';
import { secretAut } from '../../../config/auth';


class SessionController {
    async store(req, res) {
        const { email, password } = req.body

        const user = await User.findOne({ where: { email } })

        if (!user)
            return returnNotAuth('Usuario não encontrado', res);

        if (!(await user.checkPassoword(password)))
            return returnNotAuth('Senha Invalida', res);

        const { id, name } = user;

        return res.status(201).json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id } , secretAut.secret, {
                expiresIn : secretAut.expiresIn
            }),
        })


    }
}

export default new SessionController()