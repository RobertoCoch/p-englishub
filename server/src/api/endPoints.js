const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const { obtenerPerfil} = require('../controllers/perfilController');
const { cambiarContrasena } = require('../controllers/contrasenaController');
const { cambiarCorreo } = require('../controllers/correoController');
const { obtenerPerfilMaestro } = require('../controllers/maestroController')
const { obtenerClasesDelMaestro } = require('../controllers/clasesController');


router.get('/ping', ping);

router.post('/login', login);

router.get('/perfil/:matricula', obtenerPerfil);

router.post('/cambiar-contrasena', cambiarContrasena);

router.post('/cambiar-correo', cambiarCorreo);

router.get('/perfilmaestro/:matricula', obtenerPerfilMaestro);

router.get('/clasesmaestro/:matricula', obtenerClasesDelMaestro);

module.exports = router;