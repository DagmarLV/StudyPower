import express from 'express';
import {createNote, getNotes, getNoteNames, addNamesToNote, updateNoteDescription, getDescriptionByName} from '../controllers/noteController.js';

const router = express.Router();

router.get('/get', getNotes);
router.post('/create', createNote);
router.get('/get/:hash', getNoteNames);
router.post('/create/:hash', addNamesToNote);
router.get('/get/:hash/:name', getDescriptionByName);
router.post('/create/:hash/:name', updateNoteDescription);

export default router;
