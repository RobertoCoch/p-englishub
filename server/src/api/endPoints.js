const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const { obtenerPerfil} = require('../controllers/perfilController');
const { cambiarContrasena } = require('../controllers/contrasenaController');
const { cambiarCorreo } = require('../controllers/correoController');


router.get('/ping', ping);

router.post('/login', login);

router.get('/perfil/:matricula', obtenerPerfil);

router.post('/cambiar-contrasena', cambiarContrasena);

router.post('/cambiar-correo', cambiarCorreo);

module.exports = router;