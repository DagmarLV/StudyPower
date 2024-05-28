import express from 'express';
import {createNote, getNotes} from '../controllers/noteController.js';

const router = express.Router();

router.post('/create', createNote);
router.get('/get', getNotes);

export default router;
