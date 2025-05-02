const express = require('express');
const router = express.Router();
const {getAlumnos,createAlumno,getAlumno,updateAlumno,deleteAlumno} = require('../controllers/alumnoscontrollers');

router.get('/', getAlumnos); // Obtener todos los alumnos
router.post('/', createAlumno); // Crear un nuevo alumno
router.delete('/:id', deleteAlumno); // Eliminar un alumno
router.put('/:id', updateAlumno); // Actualizar un alumno
router.get('/:id', getAlumno); // Obtener un alumno por su ID

module.exports = router;
