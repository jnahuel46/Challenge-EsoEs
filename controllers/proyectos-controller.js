const Proyecto = require("../models/Proyecto");
const proyectos_usuarios = require("../models/proyectos_usuarios");
const User = require("../models/User");



const proyectosGet = async (req, res) => {
    const proyectos = await Proyecto.findAndCountAll({
        attributes: ['id', 'name', 'description'],
        limit: 5,
        offset: 0,// change the offset to show the next page
    });
    res.json(proyectos);
};

const proyectosPost = async (req, res) => {

    const proyectos = await Proyecto.create(req.body);
    res.json(proyectos);
};

const proyectosAsign = async (req, res) => {

    try {
        const proyectos = await proyectos_usuarios.create(req.body);
    res.json(proyectos);
    } catch (error) {
        res.status(404).json('The project is actually asigned to this user');

    }
};

const proyectosGetDetail = async (req, res) => {

    const { proyectoId } = req.params;
    const proyecto = await Proyecto.findByPk(proyectoId);

    if (!proyecto) {

        res.status(404).json('The project does not exist');
    } else {

        const proyectos = await Proyecto.findAll({
            where: { id: req.params.proyectoId },
            attributes: ['name', 'description'],
            include: [{ model: User, attributes: ['username'] }]
        })
        res.json(proyectos);
    }
};

const proyectoFilterName = async (req, res) => {

    const { name } = req.query;
    const proyecto = await Proyecto.findOne({ where: { name: name } });

    if (!proyecto) {

        res.status(404).json('The project does not exist');
    } else {
        res.json(proyecto);
    }
};



const proyectosUpdate = async (req, res) => {

    const { proyectoId } = req.params;
    const proyecto = await Proyecto.findByPk(proyectoId);

    if (!proyecto) {

        res.status(404).json('The project does not exist');
    } else {

        await Proyecto.update(req.body, {
            where: { id: req.params.proyectoId }
        });
        res.json({ success: 'Se ha modificado' });
    }
};

const proyectosDelete = async (req, res) => {

    const { proyectoId } = req.params;
    const proyecto = await Proyecto.findByPk(proyectoId);

    if (!proyecto) {

        res.status(404).json('The project does not exist');
    } else {

        await Proyecto.destroy({
            where: { id: req.params.proyectoId }
        });
        res.json({ success: 'Se ha eliminado' });
    }
};


module.exports = {
    proyectosGet,
    proyectosPost,
    proyectosGetDetail,
    proyectoFilterName,
    proyectosUpdate,
    proyectosDelete,
    proyectosAsign
}