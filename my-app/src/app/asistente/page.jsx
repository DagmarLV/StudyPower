// src/app/asistencia/page.jsx
"use client";

import React from 'react';

function AsistenciaPage() {
  return (
    <section className="container mx-auto flex flex-col gap-4 p-4 md:ml-16 w-auto">
      <div className="md:w-2/3 mt-10 border-b-2 border-black/50 pb-4">Bienvenido a tu asistente personal</div>
      <div className="flex flex-col md:flex-row gap-4 md:w-2/3 w-full">
        <div className="w-full">
          <div className="mb-4">
            Home &gt; Asistencia
          </div>
          <h2 className="text-lg font-bold mb-4">Frase del día</h2>
          <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center justify-center mb-8">
            <div className="text-center">
              <div className="text-2xl mb-2">⭐</div>
              <p className="text-sm">"El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar". - Winston Churchill</p>
            </div>
          </div>
          <h2 className="text-lg font-bold mb-4">Tips para estudiar mejor</h2>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center">
              <div className="text-2xl mr-4">💡</div>
              <p className="text-sm">Distribuye tu tiempo de estudio en sesiones más cortas y separadas.</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-md shadow-md flex items-center">
              <div className="text-2xl mr-4">💡</div>
              <p className="text-sm">Lo que con mucho trabajo se adquiere, más se ama.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:ml-8">
          <h2 className="text-lg font-bold mb-4">Solicita ayuda personalizada</h2>
          <div className="bg-gray-200 p-4 rounded-md shadow-md flex flex-col h-full">
            <div className="flex items-center justify-center mb-4">
              <div className="text-3xl">🧑‍🏫</div>
            </div>
            <div className="bg-gray-300 p-4 rounded-md flex-grow">
              <p>Hola! Soy Pow Zen, te ayudaré con el equilibrio necesario para estudiar. Consulta lo que quieras</p>
            </div>
            <input type="text" placeholder="Escribir aquí..." className="mt-4 p-2 border border-gray-300 rounded-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AsistenciaPage;
