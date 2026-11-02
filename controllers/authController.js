const jwt = require("jsonwebtoken");

// Registro de usuario
const registro = (req, res) => {
    res.json({
        mensaje: "Usuario registrado correctamente"
    });
};

// Inicio de sesión
const login = (req, res) => {

    const token = jwt.sign(
        {
            usuario: "Gemma"
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );

    res.json({
        mensaje: "Login exitoso",
        token
    });
};

module.exports = {
    registro,
    login
};
