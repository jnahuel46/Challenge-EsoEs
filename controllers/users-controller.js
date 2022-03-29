const bcrypt = require('bcryptjs');
const User = require('../models/User');
const moment = require('moment');
const jwt = require('jwt-simple');
require('dotenv').config();



const userRegister = async (req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);

};

const userLogin = async (req, res) => {

    const user = await User.findOne({ where: { email: req.body.email } });
    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password);
        if (iguales) {
            res.json({ succes: createToken(user) });
        } else {
            res.status(401).json({ error: 'Error en usuario y/o contraseña' });
        }
    } else {
        res.status(401).json({ error: 'Error en usuario y/o contraseña' });
    }
}

const createToken = (user) => {

    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(10, 'minutes').unix()
    }
    return jwt.encode(payload, 'frase secreta')
}

module.exports = {
    userRegister,
    userLogin
}