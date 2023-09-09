import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  aplicacion: String,
  tiempo: Number,
  fecha: Date,
  // Otros campos necesarios
});

module.exports = mongoose.model('Reserva', reservaSchema);