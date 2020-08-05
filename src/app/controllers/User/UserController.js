import { v4 as uuidV4 } from 'uuid'
import User from '../../models/Users/Users';
import { returnInfo } from '../../helpers/returnsMessage/index';
class UserController {
    async store(req, res) {
        const data = req.body

        const userExists = await User.findOne({ where: { email: data.email } });

        if (userExists)
            return returnInfo('Usuario já exite', res)

        const { id, name, email } = await User.create({ id: uuidV4(), ...data });

        return res.status(201).json({
            id,
            name,
            email
        })
    }
}

export default new UserController();