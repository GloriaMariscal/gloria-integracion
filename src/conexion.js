const mysql = require('mysql');

// Conexión a MySQL usando variables de entorno de Railway
const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    user: process.env.MYSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        return;
    }
    console.log('Conectado a MySQL con éxito');
});

module.exports = connection;
