import express from 'express';
import cokkiesParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import authRouter from './routes/auth.routes.js';
import {notesRouter} from './routes/notes.routes.js';
import { PORT,MONGODB_URI } from './config/env.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cokkiesParser());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/notes',notesRouter);

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});