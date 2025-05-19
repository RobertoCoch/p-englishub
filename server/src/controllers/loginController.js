const connection = require('../models/db');
const jwt = require('jsonwebtoken');

module.exports.login = (req, res) => {
    const { matricula, contraseña } = req.body;
    const consult = 'SELECT * FROM logina WHERE matricula = ? AND contrasena = ?';

    try {
        connection.query(consult, [matricula, contraseña], (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }

            if (result.length > 0) {
                const usuario = result[0];

                // Incluir tipo en el token si lo deseas
                const token = jwt.sign(
                    { matricula: usuario.matricula, tipo: usuario.tipo },
                    "Stack",
                    { expiresIn: '1m' }
                );

                res.send({
                    token,
                    tipo: usuario.tipo, // alumno | maestro | administrador
                    matricula: usuario.matricula
                });
            } else {
                console.log('wrong user');
                res.status(401).send({ message: 'Credenciales incorrectas' });
            }
        });
    } catch (e) {
        res.status(500).send({ message: 'Error interno del servidor' });
    }
};
