const connection = require('../models/db');

const obtenerPerfil = (req, res) => {
    const matricula = req.params.matricula.trim();
    console.log('Matricula recibida:', matricula); 

    const query = `
    SELECT l.matricula, p.semestre, p.carrera, p.nombre, p.edad, p.correo
    FROM logina l
    JOIN alumno p ON l.matricula = p.matricula
    WHERE l.matricula = ?
  `;

   connection.query(query, [matricula], (err, results) => {
    if (err) {
        console.error('Error en la consulta:', err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }

    if (results.length === 0) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }

    res.json(results[0]);
  });
}


module.exports = { obtenerPerfil };