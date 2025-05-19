const connection = require('../models/db');

obtenerPerfilMaestro = (req, res) => {
  const { matricula } = req.params;

  const query = 'SELECT nombre, correo FROM maestro WHERE matricula = ?';
  connection.query(query, [matricula], (err, result) => {
    if (err) {
      console.error('Error al consultar el perfil del maestro:', err);
      return res.status(500).send({ message: 'Error interno del servidor' });
    }

    if (result.length > 0) {
      res.send(result[0]);
    } else {
      res.status(404).send({ message: 'Maestro no encontrado' });
    }
  });
};

module.exports = { obtenerPerfilMaestro };