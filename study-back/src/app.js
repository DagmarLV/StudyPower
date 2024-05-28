import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import summarizeRoutes from './routes/summarizeRoutes.js';
import registerRoutes from './routes/registerRoutes.js';
import tipsRoutes from './routes/tipsRoutes.js';
import notesRoutes from './routes/notesRoutes.js';

const app = express();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

app.use('/summarize', summarizeRoutes);
app.use('/register', registerRoutes);
app.use('/tips', tipsRoutes);
app.use('/notes', notesRoutes);

export {app, openai};