const categoriasRouter = require('express').Router();
const controller = require('../controllers/categoria');

//use auth middleware
categoriasRouter.use(authMiddleware);

categoriasRouter.get('/:number', controller.getById); //id categoria
categoriasRouter.post('/create', controller.create); //create new categoria
categoriasRouter.put('/update', controller.update); //update categoria
categoriasRouter.delete('/delete/:number', controller.delete); //delete categoria

module.exports = categoriasRouter;