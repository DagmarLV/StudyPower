// src/app/perfil/page.jsx
"use client";

import React, { useState } from 'react';

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
      <div className="md:w-5/6 mt-10 border-b-2 border-[#111827]/40 pb-4">PEPITO PEREZ</div>
      <div className="flex flex-col gap-4 md:w-2/3 w-full mt-4">
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5">
          <span>Nombre : {name}</span>
          <button onClick={() => setName(prompt('Editar nombre:', name))}>✏️</button>
        </div>
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5">
          <span>Apellido : {surname}</span>
          <button onClick={() => setSurname(prompt('Editar apellido:', surname))}>✏️</button>
        </div>
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5">
          <span>Universidad : {university}</span>
          <button onClick={() => setUniversity(prompt('Editar universidad:', university))}>✏️</button>
        </div>
        <div className="flex items-center justify-between p-4 border-b-2 border-black/5">
          <span>Cumpleaños : {birthday}</span>
          <button onClick={() => setBirthday(prompt('Editar cumpleaños:', birthday))}>✏️</button>
        </div>
        <div>
          <button 
            onClick={handleUpdateProfile} 
            className="mt-8 bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Actualizar perfil
          </button>
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-sm font-medium">Tema:</label>
          <select 
            value={theme} 
            onChange={(e) => setTheme(e.target.value)} 
            className="p-2 border border-gray-300 rounded-md"
          >
            <option value="Claro">Claro</option>
            <option value="Oscuro">Oscuro</option>
          </select>
        </div>
        <div className="flex gap-4 mt-4">
          <button 
            onClick={handleEnable2FA} 
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Habilitar 2FA
          </button>
          <button 
            onClick={handleChangePassword} 
            className="bg-gray-300 text-black px-4 py-2 rounded-md"
          >
            Cambiar contraseña
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProfilePage;
