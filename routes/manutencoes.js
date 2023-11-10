const manutencoesRouter = require('express').Router();
const controller = require('../controllers/manutencao');

//use auth middleware
manutencoesRouter.use(authMiddleware);

manutencoesRouter.get('/:number', controller.getById); //ler id de manutençoes
manutencoesRouter.post('/create', controller.create); //create new manutençoes
manutencoesRouter.put('/update', controller.update); //update manutençoes
manutencoesRouter.delete('/delete/:number', controller.delete); //delete manutençoes

module.exports = manutencoesRouter;