const categoriasRouter = require('express').Router();
const controller = require('../controllers/categoria');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
categoriasRouter.use(authMiddleware);

categoriasRouter.get('/:id', controller.getById); //id categoria
categoriasRouter.post('/create', controller.create); //create new categoria
categoriasRouter.put('/update/:id', controller.update); //update categoria
categoriasRouter.delete('/delete/:id', controller.delete); //delete categoria

module.exports = categoriasRouter;