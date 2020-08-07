import ModelMembros from '../../models/Membros/Membros'

class MembrosFIlter {
    async show(req, res) {
        const { id } = req.params

        await ModelMembros.findOne({ where: { id } })
            .then(ret => res.status(200).json(ret))
            .catch(error => res.status(400).json(error))
    }
}

export default new MembrosFIlter()