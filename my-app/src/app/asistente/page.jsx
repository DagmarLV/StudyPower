import React from 'react';
import TipPreview from '@/components/TipPreview';
import { FaStar } from 'react-icons/fa';

import tips from '@/data/tips.json';


async function AsistenciaPage() {
	const tips = await getTips();
	
	return (
        <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 ml-2">
          <div className='md:w-5/6 mt-10 border-b-2 border-black/40 pb-4 text-2xl'>Bienvenido a tu asistente personal</div>
          <div className='text-xl'>Inicio &gt; Asistencia</div>
            <div className="flex md:flex-row flex-col gap-20">
              <div className="flex flex-col gap-8 md:w-2/5 w-full h-full">
                  <p className="text-lg ">Motivación del día</p>
                <div className="flex flex-col items-center gap-8 p-6 rounded-lg bg-slate-200 h-auto min-h-[250px]">
                  <FaStar size={58}/>
                  <p className="md:mt-1 text-center text-lg">{tips[0]?.phrase}</p>
                </div>
                <div>
                  <p className="text-lg ">Tips recomendados para ti</p>
                  <TipPreview tip={tips[1]?.tip} className="rounded-lg "></TipPreview>
                  <TipPreview tip={tips[2]?.tip} className="rounded-lg "></TipPreview>
                  <TipPreview tip={tips[3]?.tip} className="rounded-lg "></TipPreview>
                </div>
              </div>
				
              <div className="flex flex-col gap-8 md:w-3/5 w-full">
                <p className="text-lg ">Solicita ayuda personalizada</p>
                <div className="bg-slate-200 p-4 rounded-md flex flex-col h-auto min-h-[600px]">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-3xl">🧑‍🏫</div>
                </div>
                <div className="bg-slate-300 p-4 rounded-md flex-grow">
                  <p className='text-lg'>Hola! Soy Pow Zen, te ayudaré con el equilibrio necesario para estudiar. Consulta lo que quieras</p>
                </div>
                  <input type="text" placeholder="Escribir aquí..." className="text-lg mt-4 p-2 border border-gray-300 rounded-md" />
                </div>
              
              </div>
			      </div>
		</section>
	);
}

async function getTips() {
	//const response = await fetch('api/v1/tips');
	const response = tips;
	//const data = await response.json();
	const data = response.data;
	return data;
}


export default AsistenciaPage;