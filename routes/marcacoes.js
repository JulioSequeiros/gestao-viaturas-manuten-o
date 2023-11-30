const marcacoesRouter = require('express').Router();
const controller = require('../controllers/marcacao');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
marcacoesRouter.use(authMiddleware);

marcacoesRouter.get('/:id', controller.getById); //ler id de marcaçoes
marcacoesRouter.post('/create', controller.create); //create new marcaçoes
marcacoesRouter.put('/update/:id', controller.update); //update marcaçoes
marcacoesRouter.delete('/delete/:id', controller.delete); //delete marcaçoes

module.exports = marcacoesRouter;