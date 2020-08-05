import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs'

class tbl_users extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.VIRTUAL,
            password_hash: Sequelize.STRING,

        }, {
            sequelize,
        })
        this.addHook('beforeSave', async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        });
        return this;
    }
    checkPassoword(password){
        return bcrypt.compare( password , this.password_hash )
    }
}
export default tbl_users