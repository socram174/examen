import Reserva from '../models/Reserva.js';

// Crear una nueva reserva
export const crearReserva = async (req, res) => {
  try {
    const reserva = await Reserva.create(req.body);
    return res.status(201).json(reserva);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la reserva' });
  }
};

// Obtener todas las reservas
export const obtenerReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    return res.status(200).json(reservas);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener las reservas' });
  }
};

// Obtener una reserva por ID
export const obtenerReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    return res.status(200).json(reserva);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener la reserva' });
  }
};

// Actualizar una reserva por ID
export const actualizarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    return res.status(200).json(reserva);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar la reserva' });
  }
};

// Eliminar una reserva por ID
export const eliminarReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findByIdAndRemove(req.params.id);
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada' });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar la reserva' });
  }
};
