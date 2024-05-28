import db from '../models/index.js';

export const createNote = async (req, res) => {
  try {
    const { title, userId } = req.body;

    const url = "/" + title.replace(/\s+/g, '-').toLowerCase();

    const newNote = await db.Note.create({ title, url, userId });

    res.status(201).json({ message: 'Nota creada', data: newNote });
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la nota', error });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await db.Note.findAll({
      include: [
        {
          model: db.User,
          attributes: ['user', 'email'],
        },
      ],
    });
    res.status(200).json(notes);
  } catch (error) {
    res.status(400).json({ message: 'Error al obtener las notas', error });
  }
};
