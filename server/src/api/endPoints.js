const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const { obtenerPerfil} = require('../controllers/perfilController');
const { cambiarContrasena } = require('../controllers/contrasenaController');
const { cambiarCorreo } = require('../controllers/correoController');
const { obtenerPerfilMaestro } = require('../controllers/maestroController')
const { obtenerClasesDelMaestro } = require('../controllers/clasesController');
const { obtenerAlumnosPorClase } = require('../controllers/listaAlumnosController')
const { publicarAviso } = require('../controllers/publicarAvisoController');
const { obtenerAvisosPorMaestro } = require('../controllers/avisosMaestroController');
const { obtenerAvisosAlumno } = require('../controllers/avisosAlumnoController');



router.get('/ping', ping);

router.post('/login', login);

router.get('/perfil/:matricula', obtenerPerfil);

router.post('/cambiar-contrasena', cambiarContrasena);

router.post('/cambiar-correo', cambiarCorreo);

router.get('/perfilmaestro/:matricula', obtenerPerfilMaestro);

router.get('/clasesmaestro/:matricula', obtenerClasesDelMaestro);

router.get('/clase/:idClase', obtenerAlumnosPorClase);

router.post('/avisos', publicarAviso);

router.get('/avisosmaestro/:matricula', obtenerAvisosPorMaestro);

router.get('/avisosalumno/:matricula', obtenerAvisosAlumno);

module.exports = router;