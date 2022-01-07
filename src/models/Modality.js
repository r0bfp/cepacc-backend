const { Model, DataTypes } = require('sequelize');


class Modality extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection,
            tableName: 'tbl_modalities'
        });
    }

    static associate(models) {
        this.belongsToMany(models.Course, { 
            through: 'tbl_modalities_courses',
            as: 'courses',
            foreignKey: 'id_modality'
        });
    }
}

module.exports = Modality;