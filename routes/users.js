const usersRouter = require('express').Router();
const controller = require('../controllers/marcacao');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
usersRouter.use(authMiddleware);

usersRouter.put('/update', controller.update); //update
usersRouter.put('/update', controller.update); //update
usersRouter.put('/update', controller.update); //update

module.exports = marcacoesRouter;