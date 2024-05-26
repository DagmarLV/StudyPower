import React from 'react';
import Link from 'next/link';
import { FaUser, FaHome, FaSearch, FaCalendarAlt, FaTasks, FaStickyNote, FaClipboardList, FaRobot } from 'react-icons/fa';
import { IoLogOut } from 'react-icons/io5';

const routes = [
    {
        name: 'Perfil',
        path: '/perfil',
        icon: FaUser,
    },
	{
		name: 'Inicio',
		path: '/dashboard',
		icon: FaHome,
	},
	{
		name: 'Busqueda',
		path: '/busqueda',
		icon: FaSearch,
	},
	{
		name: 'Calendario',
		path: '/calendario',
		icon: FaCalendarAlt,
	},
	{
		name: 'Tareas',
		path: '/tareas',
		icon: FaTasks,
	},
	{
		name: 'Notas',
		path: '/notas',
		icon: FaStickyNote,
	},
	{
		name: 'Resumen',
		path: '/resumen',
		icon: FaClipboardList,
	},
	{
		name: 'Asistente',
		path: '/asistente',
		icon: FaRobot,
	},
	{
		name: 'Salir',
		path: '/login',
		icon: IoLogOut,
	},
];

function Sidebar(props) {
	return (
		<side {...props}>
			<ul className="flex flex-col items-center gap-2 w-full">
				{routes.map((route, index) => (
					
					<li key={index} className={`group flex justify-center w-full py-4 hover:bg-slate-800 ${route.name === 'Salir' ? 'mt-10' : ''}`}>
						<Link href={route.path} title={route.name} className='flex justify-center w-full transition-all duration-500 group-hover:scale-125 text-slate-800 group-hover:text-white'>
							<route.icon size={22} />
						</Link>
					</li>
				))}
			</ul>
		</side>
	);
}

export default Sidebar;
