import express from 'express';
import cors from 'cors';
import skiRoutes from './routes/skiRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/skis', skiRoutes);

export default app;
