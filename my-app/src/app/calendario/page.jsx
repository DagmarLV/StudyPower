
import React from 'react'
import TaskCalendar from '@/components/Calendar';

async function CalendarPage() {

  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 ml-2 ">
      <div className='flex md:w-5/6 mt-10 border-b-2 border-[#111827]/40 pb-4 text-2xl'>Bienvenido a tu Calendario</div>
      <div className='text-xl'>Inicio &gt; Calendario</div>
      <div className="flex flex-col gap-4 md:w-4/5 w-full">
					<div className="flex flex-col gap-6 pl-3 ">
						<TaskCalendar />
					</div>		
			</div>

    </section>
  );
}



export default CalendarPage;