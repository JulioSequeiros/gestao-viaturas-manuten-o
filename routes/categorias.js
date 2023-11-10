const categoriasRouter = require('express').Router();
const controller = require('../controllers/categoria');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
categoriasRouter.use(authMiddleware);

categoriasRouter.get('/:number', controller.getById); //id categoria
categoriasRouter.post('/create', controller.create); //create new categoria
categoriasRouter.put('/update', controller.update); //update categoria
categoriasRouter.delete('/delete/:number', controller.delete); //delete categoria

module.exports = categoriasRouter;