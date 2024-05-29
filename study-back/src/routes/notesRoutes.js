import express from 'express';
import {createNote, getNotes, getNoteNames, addNamesToNote} from '../controllers/noteController.js';

const router = express.Router();

router.post('/create', createNote);
router.get('/get', getNotes);
router.post('/create/:hash', addNamesToNote);
router.get('/get/:hash', getNoteNames);

export default router;
