// src/app/asistencia/page.jsx
import React from 'react';

function AsistenciaPage() {
    return (
        <section className="container mx-auto flex flex-col gap-4 p-4">
            <h2 className="text-lg font-bold">Bienvenido a tu asistente personal</h2>
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 w-full">
                    <h3 className="text-md font-semibold">Frase del día</h3>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <p className="text-center">"El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar". - Winston Churchill</p>
                    </div>
                    <h3 className="text-md font-semibold">Tips para estudiar mejor</h3>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <p>Distribuye tu tiempo de estudio en sesiones más cortas y separadas.</p>
                    </div>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <p>Lo que con mucho trabajo se adquiere, más se ama.</p>
                    </div>
                </div>
                <div className="w-full">
                    <h3 className="text-md font-semibold">Solicita ayuda personalizada</h3>
                    <div className="bg-gray-200 p-4 rounded-md">
                        <p>Hola! soy .... , te ayudaré con el equilibrio necesario para estudiar. Consulta lo que quieras</p>
                        <input type="text" className="w-full p-2 border border-gray-300 rounded-md mt-2" placeholder="Escribir aquí..." />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AsistenciaPage;
