const connection = require('../models/db');

const obtenerAlumnosPorClase = (req, res) => {
  const { idClase } = req.params;

  const query = `
    SELECT a.matricula, a.nombre, a.edad
    FROM alumno_clase ac
    JOIN alumno a ON a.matricula = ac.matricula_alumno
    WHERE ac.id_clase = ?
  `;

  connection.query(query, [idClase], (err, result) => {
    if (err) {
      console.error('Error al obtener alumnos por clase:', err);
      return res.status(500).send({ message: 'Error interno del servidor' });
    }

    res.send(result);
  });
};

module.exports = { obtenerAlumnosPorClase };
