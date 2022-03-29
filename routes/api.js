const router = require('express').Router();

const apiProyectosRouter = require('./api-routes/proyectos');
const apiUsersRouter = require('./api-routes/users');
router.use('/projects', apiProyectosRouter);
router.use('/auth', apiUsersRouter);
module.exports = router;


