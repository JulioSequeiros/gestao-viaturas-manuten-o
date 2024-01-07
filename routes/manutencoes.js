const manutencoesRouter = require('express').Router();
const controller = require('../controllers/manutencao');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
manutencoesRouter.use(authMiddleware);

manutencoesRouter.get('/', controller.getAll);
manutencoesRouter.get('/:id', controller.getById); //ler id de manutençoes
manutencoesRouter.post('/create', controller.create); //create new manutençoes
manutencoesRouter.put('/update/:id', controller.update); //update manutençoes
manutencoesRouter.delete('/delete/:id', controller.delete); //delete manutençoes

module.exports = manutencoesRouter;