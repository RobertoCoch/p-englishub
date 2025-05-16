const db = require('../models/db');

const cambiarContrasena = (req, res) => {
  const { matricula, contrasenaActual, nuevaContrasena } = req.body;

  db.query('SELECT * FROM logina WHERE matricula = ?', [matricula], (err, result) => {
    if (err) {
      console.error('Error en la consulta SELECT:', err);
      return res.status(500).json({ mensaje: 'Error interno del servidor' });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({ mensaje: 'Matrícula no encontrada' });
    }

    const alumno = result[0];

    // Comparar contraseñas directamente (texto plano)
    if (contrasenaActual !== alumno.contrasena) {
      return res.status(401).json({ mensaje: 'Contraseña actual incorrecta' });
    }

    // Actualizar contraseña directamente
    db.query(
      'UPDATE logina SET contrasena = ? WHERE matricula = ?',
      [nuevaContrasena, matricula],
      (err2, result2) => {
        if (err2) {
          console.error('Error al actualizar la contraseña:', err2);
          return res.status(500).json({ mensaje: 'Error interno del servidor' });
        }

        res.json({ mensaje: 'Contraseña actualizada exitosamente' });
      }
    );
  });
};

module.exports = { cambiarContrasena };