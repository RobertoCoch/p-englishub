const express = require('express');
const router = express.Router();
const { ping } = require('../controllers/pingController');
const { login } = require('../controllers/loginController')
const { obtenerPerfil } = require('../controllers/perfilController');

router.get('/ping', ping);

router.post('/login', login);

router.get('/perfil/:matricula', obtenerPerfil);

module.exports = router;