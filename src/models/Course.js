const { Model, DataTypes } = require('sequelize');


class Course extends Model {
    static init(connection) {
        super.init({
            id_user: DataTypes.INTEGER,
            name: DataTypes.STRING,
            duration: DataTypes.INTEGER,
            area: DataTypes.STRING
        }, {
            sequelize: connection
        });
    }
}

module.exports = Course;