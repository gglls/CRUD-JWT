import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// Muat variabel dari file .env
dotenv.config();

// Akses SECRET_KEY dari file .env
const SECRET_KEY = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1]; // Ambil token dari header
    if (!token) {
        return res.status(403).json({ msg: "Access denied" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY); // Verifikasi token
        req.user = decoded; // Simpan info pengguna ke request
        next(); // Lanjutkan ke middleware/rute berikutnya
    } catch (error) {
        res.status(403).json({ msg: "Invalid or expired token" });
    }
};
