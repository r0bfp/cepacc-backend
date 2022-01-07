const { Model, DataTypes } = require('sequelize');


class Course extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING,
            duration: DataTypes.INTEGER,
            area: DataTypes.STRING,
            value: DataTypes.FLOAT
        }, {
            sequelize: connection,
            tableName: 'tbl_courses'
        });
    }

    static associate(models) {
        this.belongsToMany(models.User, { 
            through: 'tbl_users_courses',
            as: 'users',
            foreignKey: 'id_course'
        });
        this.belongsToMany(models.Modality, { 
            through: 'tbl_modalities_courses',
            as: 'modalities',
            foreignKey: 'id_course'
        });
    }
}

module.exports = Course;