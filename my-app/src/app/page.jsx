import React from 'react';
import Search from '@/components/Search';
import TipPreview from '@/components/TipPreview';
import ListTasks from '@/components/ListTasks';
import { FaStar } from 'react-icons/fa';

import tips from '@/data/tips.json';
import tasks from '@/data/tasks.json';

async function DashboardPage() {
	const tips = await getTips();
	const tasks = await getTasks(1806);
    const lastTasks = tasks.splice(-3);

	return (
		<section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:mt-8">
			<div className="flex md:flex-row flex-col items-center md:gap-4 gap-2">
				<h2 className="text-lg font-bold md:w-1/3 w-full">Bienvenido a StudyPower</h2>
				<Search className="md:w-2/3 w-full" />
			</div>
			<div className="flex md:flex-row flex-col gap-4">
				<div className="flex flex-col gap-4 md:w-1/3 w-full">
					{/*Calendar*/}
					<div className="w-full h-[400px] rounded-lg bg-slate-200"></div>
					<TipPreview tip={tips[0]?.tip} className="p-6  rounded-lg bg-slate-200">
						<FaStar size={48} />
						<p className="text-center">{tips[0]?.phrase}</p>
					</TipPreview>
				</div>
				<div className="flex flex-col gap-4 md:w-2/3 w-full">
					<div className="flex flex-col gap-4 p-8 rounded-lg bg-slate-200">
						<p>Proximas tareas:</p>
						<ListTasks tasks={lastTasks} />
						<button className="px-4 py-2 rounded-lg w-fit bg-slate-900 text-white">Agregar tareas</button>
					</div>
					<div className="w-full h-[200px] rounded-lg bg-slate-200"></div>
					<div className="w-full h-[200px] rounded-lg bg-slate-200"></div>
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
