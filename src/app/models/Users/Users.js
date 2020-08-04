import { model } from 'sequelize';
import Sequelize, { Model } from 'sequelize';

class tbl_users extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password_hash: Sequelize.STRING,
            
        }, {
            sequelize,
        })
    }
}
export default tbl_users