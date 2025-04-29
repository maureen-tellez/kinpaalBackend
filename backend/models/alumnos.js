const mongoose = require('mongoose');

const alumnoSchema = new mongoose.Schema({
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
