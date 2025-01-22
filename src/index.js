import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Untuk memuat .env
import UserRoute from './routes/UserRoutes.js'; // Pastikan path sesuai dengan file UserRoutes.js
import { verifyToken } from './middleware/AuthMiddleware.js'; // Pastikan path sesuai dengan file AuthMiddleware.js

// Load environment variables dari .env
dotenv.config();

const app = express();

// Middleware
app.use(cors()); // Untuk Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Untuk parsing body request JSON

// Route yang memerlukan autentikasi (JWT)
app.use('/', UserRoute); // Menambahkan middleware verifyToken pada /users

// Menjalankan server
app.listen(6033, () => console.log('Server up and running.....'));
