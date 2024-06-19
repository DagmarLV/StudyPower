"use client";
import jwt from 'jsonwebtoken';
import React, { useState } from 'react';

const TaskModal = ({ isOpen, onClose, onSave }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    expire: '',
    dificulty: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const decoded = jwt.decode(localStorage.getItem('token'));
    const data = {
      ...task,
      userId: decoded.id
    };

    fetch(`http://localhost:5000/tasks/${decoded.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(newTask => {
        onSave(newTask);
        onClose(); 
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md shadow-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Crear Tarea</h2>
          <button onClick={onClose} className="text-lg">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm font-medium">Título</label>
            <input
              name='title'
              type="text"
              value={task.title}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Descripción</label>
            <textarea
              name='description'
              value={task.description}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Expira</label>
            <input
              name='expire'
              type="date"
              value={task.expire}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium">Dificultad</label>
            <select
              name='dificulty'
              value={task.dificulty}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value={0}>Fácil</option>
              <option value={1}>Media</option>
              <option value={2}>Difícil</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
