// src/app/tareas/page.jsx
"use client";

import React from 'react';

function TaskPage() {
  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 ml-2 ">
      <div className='flex md:w-5/6 mt-10 border-b-2 border-[#111827]/40 pb-4 text-2xl'>Bienvenido a tus tareas</div>
      <div className='text-xl'>Inicio &gt; Tareas</div>
      <div className="flex flex-col md:w-2/3 w-full mt-4">
        <div className="flex flex-col bg-gray-200 p-6 rounded-md shadow-md">
          <h2 className="text-lg font-bold mb-4">Crear Tarea</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col mb-4">
              <label className="block mb-2 text-sm font-medium">Título</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col mb-4 md:col-span-2">
              <label className="block mb-2 text-sm font-medium">Descripción</label>
              <textarea className="w-full p-2 border border-gray-300 rounded-md"></textarea>
            </div>
            <div className="flex flex-col mb-4">
              <label className="block mb-2 text-sm font-medium">Expira</label>
              <input type="date" className="w-full p-2 border border-gray-300 rounded-md" />
            </div>
            <div className="flex flex-col mb-4">
              <label className="block mb-2 text-sm font-medium">Dificultad</label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option value="easy">Fácil</option>
                <option value="medium">Media</option>
                <option value="hard">Difícil</option>
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="block mb-2 text-sm font-medium">Subtarea</label>
              <div className="flex flex-col gap-2">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center">
                    <input type="radio" name="subtask" value="subtask1" />
                    <span className="ml-2">Subtarea 1</span>
                  </li>
                  <li className="flex items-center">
                    <input type="radio" name="subtask" value="subtask2" />
                    <span className="ml-2">Subtarea 2</span>
                  </li>
                </ul>
                <button type="button" className="mt-2 w-8 h-8 flex items-center justify-center bg-gray-300 rounded-md">
                  +
                </button>
              </div>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md">Agregar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TaskPage;
