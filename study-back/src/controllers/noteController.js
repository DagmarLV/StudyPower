import db from '../models/index.js';
import crypto from 'crypto';

export const createNote = async (req, res) => {
  try {
    let { title, userId } = req.body;
    title = title.trim();
    const hash = crypto.createHash('md5').update(title).digest('hex');
    const url = "/" + hash;

    let existingUrl = await db.Note.findOne({ where: { userId, url } });
    if (existingUrl) {
      return res.status(409).json({ code: 409, message: 'El titulo ya existe' });
    }

    const newNote = await db.Note.create({ title, url, userId });

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
