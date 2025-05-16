const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const { obtenerPerfil} = require('../controllers/perfilController');
const { cambiarContrasena } = require('../controllers/contrasenaController')


router.get('/ping', ping);

router.post('/login', login);

router.get('/perfil/:matricula', obtenerPerfil);

router.post('/cambiar-contrasena', cambiarContrasena);

module.exports = router;