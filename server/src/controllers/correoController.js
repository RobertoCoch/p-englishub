const db = require('../models/db');

const cambiarCorreo = (req, res) => {
  const { matricula, nuevoCorreo } = req.body;

  if (!nuevoCorreo) {
    return res.status(400).json({ mensaje: 'El nuevo correo es requerido' });
  }

  db.query('SELECT * FROM alumno WHERE matricula = ?', [matricula], (err, result) => {
    if (err) {
      console.error('Error en la consulta SELECT:', err);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({ mensaje: 'Matrícula no encontrada' });
    }

    db.query(
      'UPDATE alumno SET correo = ? WHERE matricula = ?',
      [nuevoCorreo, matricula],
      (err2, result2) => {
        if (err2) {
          console.error('Error al actualizar el correo:', err2);
          return res.status(500).json({ mensaje: 'Error interno del servidor' });
        }

        res.json({ mensaje: 'Correo actualizado exitosamente' });
      }
    );
  });
};

module.exports = { cambiarCorreo };
