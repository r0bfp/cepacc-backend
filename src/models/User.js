const { Model, DataTypes } = require('sequelize');


class User extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            last_name: DataTypes.STRING,
            cpf: DataTypes.INTEGER,
            rg: DataTypes.INTEGER,
            birth_date: DataTypes.DATE,
            email: DataTypes.STRING,
            password: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'tbl_users'
        });
    }

    static associate(models) {
        this.belongsToMany(models.Course, { 
            through: 'tbl_users_courses',
            as: 'courses',
            foreignKey: 'id_user'
        })
    }
}

module.exports = User;