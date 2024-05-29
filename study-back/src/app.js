import express from 'express';
import cors from 'cors';
import summarizeRoutes from './routes/summarizeRoutes.js';
import registerRoutes from './routes/registerRoutes.js';
import tipsRoutes from './routes/tipsRoutes.js';
import notesRoutes from './routes/notesRoutes.js';
import chatRoutes from './routes/chatRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/summarize', summarizeRoutes);
app.use('/register', registerRoutes);
app.use('/tips', tipsRoutes);
app.use('/notes', notesRoutes);
app.use('/chat', chatRoutes);

export {app};