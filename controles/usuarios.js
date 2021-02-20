const{response} = require('express');


const usuariosGet = (req, res = response) => {
    res.json({
        msg: 'GET API - CONTROLADOR'

    });
}

const usuariosPut = (req, res = response) => {
    res.json({
        msg: 'PUT API - CONTROLADOR'

    });
}

const usuariosPost = (req, res = response) => {
    
    const {nombre, edad} = req.body;

    res.json({
        msg: 'POST API - CONTROLADOR',
        nombre, edad

    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'DELETE API - CONTROLADOR'

    });
}

module.exports = {
        usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete
}