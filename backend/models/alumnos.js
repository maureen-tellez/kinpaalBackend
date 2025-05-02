const mongoose = require('mongoose'); //importa la libreria mongoose

const alumnoSchema = new mongoose.Schema({ //define el esquema de los alumnos
  nombreAlumno: { type: String, required: true },
  edad: { type: String, required: true },
  gradoInteresado: { type: String, required: true },
  fechaNacimiento: { type: Date, required: true },
  nombreTutor: { type: String, required: true },
  ocupacionTutor: { type: String },
  telefonoTutor: { type: String, required: true },
  emailTutor: { type: String, required: true },
  inscritoAntes: { type: String, required: true }
});

module.exports = mongoose.model('Alumno', alumnoSchema);
