const router = require('express').Router();

const categoriasRouter = require('./categorias');
const manutencoesRouter = require('./manutencoes');
const marcacoesRouter = require('./marcacoes');
const viaturasRouter = require('./viaturas');
const authRouter = require('./auth');



router.use('/categorias', categoriasRouter);
router.use('/manutencoes', manutencoesRouter);
router.use('/marcacoes', marcacoesRouter);
router.use('/viaturas', viaturasRouter);
router.use('/auth', authRouter);

module.exports = router;