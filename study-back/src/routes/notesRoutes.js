import express from 'express';
import { createNote, getNotes, getNotesFromUser, getNoteNames, addNamesToNote, updateNoteDescription, getDescriptionByName } from '../controllers/noteController.js';

const router = express.Router();

router.get('/get', getNotes);
router.get('/get/:userId', getNotesFromUser);
router.post('/create/:userId', createNote);
router.get('/get/:hash/:userId', getNoteNames);
router.post('/create/:hash/:userId', addNamesToNote);
router.get('/get/:hash/:name/:userId', getDescriptionByName);
router.post('/create/:hash/:name/:userId', updateNoteDescription);

export default router;
