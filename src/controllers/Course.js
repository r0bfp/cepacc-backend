const CourseModel = require('../models/Course');
const ModalityModel = require('../models/Modality');

module.exports = {
    async store(req, res){
        const { modalities, ...data } = req.body;

        const course = await CourseModel.create(data);

        if(modalities && !modalities.length){
            return res.status(400).json({'error': 'Modalities is required.'})
        }

        course.setModalities(modalities);

        return res.json(course);
    },
    async list(req, res){
        const courses = await CourseModel.findAll({
            include: [{
                model: ModalityModel,
                as: 'modalities',
                attributes: ['name'],
                through: { attributes: [] }
            }]
        });

        return res.json(courses);
    }
}