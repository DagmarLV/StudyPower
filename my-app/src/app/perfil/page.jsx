// src/app/perfil/page.jsx
"use client";

import React, { useState } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
function ProfilePage() {
  const [name, setName] = useState('Pepito');
  const [surname, setSurname] = useState('Perez');
  const [university, setUniversity] = useState('ABC');
  const [birthday, setBirthday] = useState('31/02');
  const [theme, setTheme] = useState('Claro');

  const handleUpdateProfile = () => {
    alert('Perfil actualizado');
  };

  const handleEnable2FA = () => {
    alert('2FA habilitado');
  };

  const handleChangePassword = () => {
    alert('Contraseña cambiada');
  };

  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 w-auto">
      <div className="md:w-5/6 mt-10 border-b-2 border-[#111827]/40 pb-4 text-2xl">PEPITO PEREZ</div>
      <div className="flex flex-col gap-4 md:w-2/3 w-full mt-4">
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5 text-lg">
          <span>Nombre : {name}</span>
          <button onClick={() => setName(prompt('Editar nombre:', name))}><FaPencilAlt size={18} /></button>
        </div>
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5 text-lg">
          <span>Apellido : {surname}</span>
          <button onClick={() => setSurname(prompt('Editar apellido:', surname))}><FaPencilAlt size={18} /></button>
        </div>
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5 text-lg">
          <span>Universidad : {university}</span>
          <button onClick={() => setUniversity(prompt('Editar universidad:', university))}><FaPencilAlt size={18} /></button>
        </div>
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5 text-lg">
          <span>Cumpleaños : {birthday}</span>
          <button onClick={() => setBirthday(prompt('Editar cumpleaños:', birthday))}><FaPencilAlt size={18} /></button>
        </div>
        <div>
          <button 
            onClick={handleUpdateProfile} 
            className="mt-8 bg-gray-300 text-black px-4 py-2 rounded-md text-lg"
          >
            Actualizar perfil
          </button>
        </div>
        <div className="mt-4  text-lg">
          <label className="block mb-2 text-sm font-medium  text-lg">
           <p className='text-lg'>Tema:</p>
          </label>
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)} 
            className="px-5 py-2 border border-gray-300 rounded-md"
          >
            <option value="Claro" className='rounded-md'>Claro</option>
            <option value="Oscuro">Oscuro</option>
          </select>
        </div>
        <div className="flex gap-4 mt-6">
          <button 
            onClick={handleEnable2FA} 
            className="bg-gray-300 text-black px-4 py-2 rounded-md text-lg"
          >
            Habilitar 2FA
          </button>
          <button 
            onClick={handleChangePassword} 
            className="bg-gray-300 text-black px-4 py-2 rounded-md text-lg"
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
