const viaturasRouter = require('express').Router();
const controller = require('../controllers/viatura');

viaturasRouter.get('/:number', controller.getById); //ler id de viaturas
viaturasRouter.post('/create', controller.create); //create new viaturas
viaturasRouter.put('/update', controller.update); //update viaturas
viaturasRouter.delete('/delete/:number', controller.delete); //delete viaturas

module.exports = viaturasRouter;