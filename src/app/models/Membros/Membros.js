import Sequelize, { Model } from 'sequelize'

class tbl_membros extends Model {
    static init(sequelize) {
        super.init({
            id_user_cadastro: Sequelize.UUIDV4,
            id_user_atualizacao: Sequelize.UUIDV4,
            nome_completo: Sequelize.STRING,
            estado_civil: Sequelize.STRING,
            uf: Sequelize.STRING,
            conjuge: Sequelize.STRING,
            cidade: Sequelize.STRING,
            bairro: Sequelize.STRING,
            rua: Sequelize.STRING,
            numero: Sequelize.STRING,
            pai: Sequelize.STRING,
            mae: Sequelize.STRING,
            dh_nacimento: Sequelize.DATE,
            natural_de: Sequelize.STRING,
            trabalho: Sequelize.STRING,
            funcao: Sequelize.STRING,
            batismo: Sequelize.BOOLEAN,
            transferecia: Sequelize.BOOLEAN,
            jurisdicao: Sequelize.BOOLEAN,
            ativo:Sequelize.BOOLEAN,
        }, {
            sequelize
        })
    }

}

export default tbl_membros 