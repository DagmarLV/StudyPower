import React from 'react';
import Checkbox from '@/components/Checkbox';
import { FaPencilAlt } from 'react-icons/fa';
import { TbAlarmFilled } from 'react-icons/tb';

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
					{props.task?.name}
				</Checkbox>
			</td>
			<td className="flex gap-2 text-center w-1/5">
				<button>
					<TbAlarmFilled
						size={18}
						className={`${
							getDaysLeft(props.task?.date) <= 1
								? 'text-[#8f3a34]'
								: getDaysLeft(props.task?.date) <= 5
								? 'text-[#8f3a34]/75'
								: 'text-[#8f3a34]/50'
						}`}
					/>
				</button>
				<p className="text-sm">{props.task?.date}</p>
			</td>
			<td className="text-center w-1/5">
				<button>
					<FaPencilAlt size={14} />
				</button>
			</td>
		</tr>
	);
}

export default ItemTask;
