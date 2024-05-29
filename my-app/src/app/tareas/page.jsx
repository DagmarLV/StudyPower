
import React from 'react'
import ListTasks from '@/components/ListTasks';
import tasks from '@/data/tasks.json';
	

async function TaskPage() {
	const tasks = await getTasks(1806);
  

  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 ml-2 ">
      <div className='flex md:w-5/6 mt-10 border-b-2 border-[#111827]/40 pb-4 text-2xl'>Bienvenido a tus tareas</div>
      <div className='text-xl'>Inicio &gt; Tareas</div>
      <div className="flex flex-col gap-4 md:w-4/5 w-full">
					<div className="flex flex-col gap-6 pl-3 ">
						<ListTasks tasks={tasks} className="gap-6"/>
						<button className="px-7 py-2 md:mt-4 mt-2 rounded-full w-fit bg-[#212E3F] text-white hover:bg-[#212E3F]/80 text-lm">Agregar tareas</button>
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