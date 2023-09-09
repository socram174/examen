// user.js

import express from 'express';
const router = express.Router();

// Importa los controladores de usuario
import {
  crearUsuario,
  obtenerUsuario,
  obtenerUsuarios,
  eliminarUsuario
} from '../controllers/user.js';

// Define las rutas para usuarios
router.post('/', crearUsuario);
router.get('/', obtenerUsuarios);
router.get('/usuarios/:id', obtenerUsuario);
//router.put('/usuarios/:id', actualizarUsuario);
router.delete('/:id', eliminarUsuario);

export default router;

