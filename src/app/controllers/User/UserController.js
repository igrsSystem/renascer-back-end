import { v4 as uuidV4 } from 'uuid'
import User from '../../models/Users/Users';
import { returnInfo } from '../../helpers/returnsMessage/index';
import { userSchema } from '../../../database/validacaoCampos/userSchema';

class UserController {
    async index(req, res) {
        await User.findOne({ where: { id: req.userId }, attributes: { exclude: ['password_hash'] } })
            .then(ret => res.status(200).json(ret))
            .catch(error => res.status(400).json({ message: error }))
    }
    async store(req, res) {

        const data = req.body

        await userSchema.validate(data).then(async () => {

            const userExists = await User.findOne({ where: { email: data.email } });

            if (userExists)
                return returnInfo('Usuario já exite', res)

            const { id, name, email } = await User.create({ id: uuidV4(), ...data });

            return res.status(201).json({
                id,
                name,
                email
            })
        }).catch(err => res.status(400).json({ error: err.errors[0] }))


    }
    async update(req, res) {

        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        if (email != user.email) {
            const verifyUser = await User.findOne({ where: { email } })

            if (verifyUser) {
                return returnInfo('Email já exite', res)
            }
        }

        if (oldPassword && !(await user.checkPassoword(oldPassword)))
            return returnInfo('Senha errada', res)


        await user.update(req.body)
            .then(ret => res.status(200).json({ name: ret.name, email: ret.email }))
            .catch(error => res.status(400).json({ message: error }))


    }
}

export default new UserController();