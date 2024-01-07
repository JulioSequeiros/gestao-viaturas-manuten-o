const viaturasRouter = require('express').Router();
const controller = require('../controllers/viatura');
const authMiddleware = require('../middlewares/auth');

//use auth middleware
viaturasRouter.use(authMiddleware);

viaturasRouter.get('/', controller.getAll);
viaturasRouter.get('/:id', controller.getById); //ler id de viaturas
viaturasRouter.post('/create', controller.create); //create new viaturas
viaturasRouter.put('/update/:id', controller.update); //update viaturas
viaturasRouter.delete('/delete/:id', controller.delete); //delete viaturas

module.exports = viaturasRouter;