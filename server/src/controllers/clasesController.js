const connection = require('../models/db');

const obtenerClasesDelMaestro = (req, res) => {
  const  matricula  = req.params.matricula.trim();
  console.log('Matricula recibida:', matricula);

  const query = `SELECT 
         c.id_clase,
         c.materia,
         c.carrera,
         c.grupo_s,
         c.semestre,
         COUNT(ac.matricula_alumno) AS total_alumnos
       FROM clases c
       LEFT JOIN alumno_clase ac ON ac.id_clase = c.id_clase
       WHERE c.id_maestro = ?
       GROUP BY 
      c.id_clase,
      c.materia,
      c.carrera,
      c.grupo_s,
      c.semestre`;

  connection.query(query, [matricula], (err, result) => {
    if (err) {
      console.error('Error al consultar clases del maestro:', err);
      return res.status(500).send({ message: 'Error interno del servidor' });
    }

    res.send(result);
  });
};

module.exports = { obtenerClasesDelMaestro };



 