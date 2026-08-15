import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute';

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(cookieParser());



app.use('/api/user', userRoutes);

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default app;