const marcacoesRouter = require('express').Router();
const controller = require('../controllers/marcacao');

marcacoesRouter.get('/:number', controller.getById); //ler id de marcaçoes
marcacoesRouter.post('/create', controller.create); //create new marcaçoes
marcacoesRouter.put('/update', controller.update); //update marcaçoes
marcacoesRouter.delete('/delete/:number', controller.delete); //delete marcaçoes

module.exports = marcacoesRouter;