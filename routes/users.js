const usersRouter = require('express').Router();
const controller = require('../controllers/user.js');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
usersRouter.use(authMiddleware);

usersRouter.get('/:number', controller.getById); //update
usersRouter.put('/update', controller.update); //update
usersRouter.put('/update', controller.update); //update
usersRouter.put('/update', controller.update); //update

module.exports = usersRouter;