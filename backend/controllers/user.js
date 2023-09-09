import Usuario from '../models/User.js';

// Crear un nuevo usuario
export const crearUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.create(req.body);
    return res.status(201).json(usuario);
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Obtener todos los usuarios
export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
};

// Obtener un usuario por ID
export const obtenerUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ error: 'Error al obtener el usuario' });
  }
};

// Actualizar un usuario por ID
export const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
};

// Eliminar un usuario por ID
export const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByIdAndRemove(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
};
