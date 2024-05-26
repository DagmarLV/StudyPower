
import React from 'react'
import ListTasks from '@/components/ListTasks';
import tasks from '@/data/tasks.json';
	
  

async function TaskPage() {
	const tasks = await getTasks(1806);
  const lastTasks = tasks.splice(-3);

  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 w-auto">
      <div className='md:w-2/3 mt-10 border-b-2 border-black/50 pb-4'>Bienvenido a tus tareas</div>
      <div className=''>Inicio &gt; Tareas</div>
      <div className="flex flex-col gap-4 md:w-2/3 w-full">
					<div className="flex flex-col gap-6 pl-3 ">
						<ListTasks tasks={lastTasks} className="gap-6"/>
						<button className="px-4 py-2 rounded-lg w-fit bg-slate-900 text-white">Agregar tareas</button>
					</div>		
			</div>

    </section>
  );
}

async function getTasks(userID) {
	//const response = await fetch(`api/v1/tasks/${userID}`);
	const response = tasks;
	//const data = await response.json();
	const data = response.data;
	return data;
}

export default TaskPage;