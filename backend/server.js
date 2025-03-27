import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import connectDB from './config/connectionDB.js';
import router from './routes/itemRoutes.js';
import errorHandler from './middleware/errorHandler.js';

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/item', router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server listening to http://localhost:${PORT}`));