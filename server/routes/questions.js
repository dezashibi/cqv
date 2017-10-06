let QuestionsController = require('../controllers/questions');
let questionsController = new QuestionsController();
let securityController = require('../middlewares/security');

module.exports = (app) => {

    app.prefix("/api/v1/questions",(router) => {
        router.route('/').get(questionsController.index);
        router.route('/').post(questionsController.store);
        router.route('/raise/:id').get(questionsController.raise);

        // Moderation Routes
        router.route('/answered/:id').get(securityController.jwtAuth,questionsController.answered);
        router.route('/:id').delete(securityController.jwtAuth,questionsController.destroy);
    });
};