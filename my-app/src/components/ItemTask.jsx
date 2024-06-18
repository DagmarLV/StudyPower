import React from 'react';
import Checkbox from '@/components/Checkbox';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { TbAlarmFilled } from 'react-icons/tb';

const deleteTask = async (id) => {
	const response = await fetch(`http://localhost:5000/tasks/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	});
	window.location.reload();
};

const getDaysLeft = (date) => {
	const today = new Date();
	const taskDate = new Date(date);
	const difference = taskDate - today;
	const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
	return days;
};

function ItemTask(props) {
	return (
		<tr {...props}>
			<td className="w-3/5">
				<Checkbox id={`taks[${props.task?.id}]`} className="flex items-center gap-2">
					{props.task?.title}
				</Checkbox>
			</td>
			<td className="flex gap-2 text-center w-1/5 p-3">
				<button>
					<TbAlarmFilled
						size={18}
						className={`${
							getDaysLeft(props.task?.expire) <= 1
								? 'text-[#8f3a34]'
								: getDaysLeft(props.task?.expire) <= 5
								? 'text-[#8f3a34]/75'
								: 'text-[#8f3a34]/50'
						}`}
					/>
				</button>
				<p className="text-lm">{props.task?.expire}</p>
			</td>
			<td className="text-center w-1/5">
				<button>
					<FaPencilAlt size={14} />
				</button>
				<button onClick={()=>deleteTask(props.task?.id)}>
					<FaTrash size={14} />
				</button>
			</td>
		</tr>
	);
}

export default ItemTask;
