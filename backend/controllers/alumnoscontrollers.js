const asyncHandler = require("express-async-handler"); // Middleware para manejar errores asincrónicos
const Alumno = require("./models/alumnos"); // Importa el modelo de Alumno

// Obtener todos los alumnos
const getAlumnos = asyncHandler(async (req, res) => {
  const alumnos = await Alumno.find();
  res.status(200).json(alumnos); //200 OK
});

// Crear nuevo alumno
const createAlumno = asyncHandler(async (req, res) => {
  const {
    nombreAlumno,
    edad,
    gradoInteresado,
    fechaNacimiento,
    nombreTutor,
    ocupacionTutor,
    telefonoTutor,
    emailTutor,
    inscritoAntes
  } = req.body;

  if (!nombreAlumno || !edad || !gradoInteresado || !fechaNacimiento || !nombreTutor || !telefonoTutor || !emailTutor || !inscritoAntes) {
    res.status(400);
    throw new Error("Faltan campos obligatorios");
  }

  const alumno = await Alumno.create(req.body);
  res.status(201).json(alumno); //201 Created
});

// Obtener un alumno por ID
const getAlumno = asyncHandler(async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  if (!alumno) {
    res.status(404);
    throw new Error("Alumno no encontrado");
  }
  res.status(200).json(alumno); //200 OK
});

// Actualizar un alumno
const updateAlumno = asyncHandler(async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  if (!alumno) {
    res.status(404);
    throw new Error("Alumno no encontrado");
  }
  const updatedAlumno = await Alumno.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedAlumno);
});

// Eliminar un alumno
const deleteAlumno = asyncHandler(async (req, res) => {
  const alumno = await Alumno.findById(req.params.id);
  if (!alumno) {
    res.status(404);
    throw new Error("Alumno no encontrado");
  }
  await alumno.deleteOne();
  res.status(200).json({ mensaje: "Alumno eliminado" });
});

module.exports = {
  getAlumnos,
  createAlumno,
  getAlumno,
  updateAlumno,
  deleteAlumno
};
