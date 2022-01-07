const UserModel = require('../models/User');

module.exports = {
    async store(req, res){
        const { name, duration, area, value } = req.body;

        const dbResponse = await UserModel.create({ name, duration, area, value });

        return res.json(dbResponse);
    }
}