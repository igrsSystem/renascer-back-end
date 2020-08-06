import { v4 as uuidV4 } from 'uuid'
import ModelMenbros from '../../models/Membros/Membros';
import { returnInfo } from '../../helpers/returnsMessage/';



class Membros {
    async index(req, res) {

    }
    async store(req, res) {
        const data = req.body

        const verifyMembros = await ModelMenbros.findOne({ where: { rg: data.rg } });

        if (verifyMembros)
            return returnInfo('Membro já possui cadastro !', res)

        await ModelMenbros.create({ id: uuidV4(), id_user_cadastro : req.userId, id_user_atualizacao: req.userId , ...data })
            .then(() => res.status(201).json({ message: true }))
            .catch(error => res.status(400).json({ error: error }))
    }
}
export default new Membros();