const CourseModel = require('../models/Course');

module.exports = {
    async store(req, res){
        const { name, duration, area } = req.body;

        const dbResponse = await CourseModel.create({ name, duration, area });

        return res.json(dbResponse);
    }
}