import db from '../models/index.js';
import crypto from 'crypto';

export const createNote = async (req, res) => {
  try {
    let { title, userId } = req.body;
    title = title.trim();
    const hash = crypto.createHash('md5').update(title).digest('hex');

    let existingUrl = await db.Note.findOne({ where: { userId, hash } });
    if (existingUrl) {
      return res.status(409).json({ code: 409, message: 'El titulo ya existe' });
    }

    const newNote = await db.Note.create({ title, hash, userId });

    res.status(201).json({ code: 201, message: 'Nota creada', data: newNote });
  } catch (error) {
    console.log(error);
    res.status(400).json({ code: 400, message: 'Error al crear la nota', error });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await db.Note.findAll({
      include: [
        {
          model: db.User,
          as: 'user',
          attributes: ['user', 'email'],
        },
      ],
    });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener las notas', error });
  }
};

export const getNoteNames = async (req, res) => {
  try {
    const noteHash = req.params.hash;
    const note = await db.Note.findOne({ where: { hash: noteHash } });

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    res.status(200).json({ names: note.names });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al obtener los nombres de la nota', error });
  }
};

export const addNamesToNote = async (req, res) => {
  try {
    const noteHash = req.params.hash;
    const { newName } = req.body;

    const note = await db.Note.findOne({ where: { hash: noteHash } });

    if (!note) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    const updatedNames = [...note.names, newName];

    note.names = updatedNames;
    await note.save();

    res.status(200).json({ message: 'Nombres añadidos', names: note.names });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al añadir nombres a la nota', error });
  }
};
