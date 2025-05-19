const connection = require('../models/db');

const obtenerAvisosAlumno = (req, res) => {
  const matricula = req.params.matricula.trim();

  const sql = `
    SELECT a.id_aviso, a.titulo, a.mensaje, a.fecha_publicacion AS fecha, c.materia
    FROM avisos a
    INNER JOIN clases c ON a.id_clase = c.id_clase
    INNER JOIN alumno_clase ac ON ac.id_clase = c.id_clase
    WHERE ac.matricula_alumno = ?
    ORDER BY a.fecha_publicacion DESC
  `;

  connection.query(sql, [matricula], (err, results) => {
    if (err) {
      console.error("Error al obtener avisos del alumno:", err);
      return res.status(500).json({ error: "Error al obtener los avisos del alumno" });
    }
    res.json(results);
  });
};

module.exports = {
  obtenerAvisosAlumno
};