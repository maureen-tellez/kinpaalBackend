const express = require('express');
const cors = require('cors'); //CORS para permitir solicitudes de diferentes dominios
const connectDB = require('./config/db');
const alumnosRoutes = require('./routes/alumnos');
require('dotenv').config();

const app = express();

// Conexión a la base de datos
connectDB();

// Middleware CORS para permitir solicitudes de cualquier origen
app.use(cors()); 

// Middleware para analizar el cuerpo de las solicitudes JSON
app.use(express.json());

// Rutas
app.use('/api/alumnos', alumnosRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
