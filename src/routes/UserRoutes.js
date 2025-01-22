import express from 'express';
import { getUsers, getUsersById, CreateUser, UpdateUser, DeleteUser, loginUser } from "../controller/UserControllers.js";
import { verifyToken } from '../middleware/AuthMiddleware.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers); // Menambahkan middleware untuk melindungi route ini
router.get('/users/:id', verifyToken, getUsersById); // Menambahkan middleware
router.post('/users', CreateUser); // Route ini tidak membutuhkan autentikasi
router.patch('/users/:id', verifyToken, UpdateUser); // Menambahkan middleware
router.delete('/users/:id', verifyToken, DeleteUser); // Menambahkan middleware
router.post('/login', loginUser); // Route login tidak membutuhkan autentikasi

export default router;
