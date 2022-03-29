const { proyectosGet, proyectosPost, proyectosGetDetail, proyectoFilterName, proyectosUpdate, proyectosDelete, proyectosAsign } = require('../../controllers/proyectos-controller');
const { validarAdminRol, validarCampos, checkToken } = require('../../middlewares/middlewares');
const router = require('express').Router();

//LISTAR TODOS LOS PROYECTOS
router.get('/', proyectosGet);

//CREAR PROYECTO
router.post('/', [
    checkToken,
    validarCampos
], proyectosPost);


//LISTAR PROYECTO CON DETALLE
router.get('/detalle/:proyectoId', proyectosGetDetail);


//FILTRO POR NOMBRE
router.get('/filter/name', proyectoFilterName);


//ACTUALIZAR PROYECTO
router.put('/:proyectoId', [
    checkToken,
    validarCampos
], proyectosUpdate);

//ASIGNAR PROYECTOS
router.post('/asign', [
    checkToken,
], proyectosAsign);

//BORRAR PROYECTO
router.delete('/:proyectoId', [
    checkToken,
    validarCampos
], proyectosDelete);

module.exports = router;