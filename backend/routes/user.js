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
router.post('/usuarios', crearUsuario);
router.get('/usuarios', obtenerUsuarios);
router.get('/usuarios/:id', obtenerUsuario);
//router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

export default router;

