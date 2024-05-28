'use client';
import React from 'react';
import Search from '@/components/Search';
import TipPreview from '@/components/TipPreview';
import ListTasks from '@/components/ListTasks';
import { FaStar } from 'react-icons/fa';


import tips from '@/data/tips.json';
import tasks from '@/data/tasks.json';
import Notification from '@/components/Notification';
async function DashboardPage() {
	const tips = await getTips();
	const tasks = await getTasks(1806);
    const lastTasks = tasks.splice(-3);
	/*const [notificationVisible, setNotificationVisible] = useState(true);*/
	const notificationVisible = false;
	return (
		<section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:mt-8">
			
			<div className="flex md:flex-row flex-col items-center gap-4 ">
			{notificationVisible && (
				<div>
        			<Notification message="This is a notification" onClose={() => setNotificationVisible(false)}/>
				</div>
      		)}
				<h2 className="text-3xl font-bold md:w-1/3 w-full pl-1">Bienvenido a StudyPower</h2>
				<Search className="md:w-2/3 w-full" />
			</div>
			<div className="flex md:flex-row flex-col gap-4">
				<div className="flex flex-col gap-4 md:w-1/3 w-full">
					{/*Calendar*/}
					<div className="w-full h-[400px] rounded-lg bg-slate-200">
					
					</div>
					<TipPreview tip={tips[0]?.tip} className="p-6  rounded-lg bg-slate-200">
						<FaStar size={48} />
						<p className="text-center text-lg">{tips[0]?.phrase}</p>
						<h2 className='mt-2 text-base text-left w-full'>Tips:</h2>
					</TipPreview>
				</div>
				<div className="flex flex-col gap-4 md:w-2/3 w-full">
					<div className="flex flex-col gap-7 p-8 rounded-lg bg-slate-200">
						<p className='text-2xl'>Próximas tareas:</p>
						<ListTasks tasks={lastTasks} />
						<button className="px-4 py-2 mt-1 rounded-lg w-fit bg-[#212E3F] text-white hover:bg-[#212E3F]/80 text-lm">Agregar tareas</button>
					</div>
					<div className="w-full md:h-[185px] h-[140px] rounded-lg bg-slate-200 relative flex items-center ">
  						<p className="ml-10 text-2xl pl-1">Apuntes</p>
  						<span className="triangle-right"></span>
					</div>
					<div className="w-full md:h-[185px] h-[140px] rounded-lg bg-slate-200 relative flex items-center ">
  						<p className="ml-10 text-2xl pl-1">Resúmenes con LLM</p>
  						<span className="triangle-right"></span>
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

async function getTasks(userID) {
	//const response = await fetch(`api/v1/tasks/${userID}`);
	const response = tasks;
	//const data = await response.json();
	const data = response.data;
	return data;
}


export default DashboardPage;
