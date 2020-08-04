import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../app/models/Users/Users';

const models = [User];
class Databse {
    constructor() {
        this.init();
    }
    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection))
    }
}
export default new Databse();