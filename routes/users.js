const usersRouter = require('express').Router();
const controller = require('../controllers/user.js');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
usersRouter.use(authMiddleware);

usersRouter.get('/', controller.getAll); //update
usersRouter.put('/update/:id', controller.update); //update
usersRouter.put('/update/:id', controller.update); //update
usersRouter.put('/update/:id', controller.update); //update

module.exports = usersRouter;