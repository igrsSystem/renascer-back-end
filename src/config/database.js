module.exports = {
    dialect: 'mariadb',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'renacer_db',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    },
    timezone: 'Etc/GMT0' 
}