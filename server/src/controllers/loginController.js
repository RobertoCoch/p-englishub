const connection = require('../models/db')
const jwt = require('jsonwebtoken')

module.exports.login = (req, res) => {
    const {matricula, contraseña} = req.body;
    const consult = 'SELECT * FROM logina WHERE matricula = ? AND contraseña = ?';
    try {
        connection.query(consult, [matricula, contraseña], (err, result) => {
            if (err) {
                res.send(err);
            }

            if (result.length > 0) {
                const token = jwt.sign({matricula}, "Stack", {
                    expiresIn: '1m'
                });
                res.send({token});
            } else {
                console.log('wrong user')
                res.send({message: 'wrong user'})
            }
        })
    } catch (e) {
        
    }
}