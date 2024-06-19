'use client';
import React, { useEffect } from 'react'
import TaskCalendar from '@/components/Calendar';
import jwt from 'jsonwebtoken';

function CalendarPage() {
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/events/${jwt.decode(localStorage.getItem('token')).id}`)
      .then(response => response.json())
      .then(data => {
        data.forEach((event) => {
          event.start = new Date(event.start);
          event.end = new Date(event.end);
        }
        );
        setEvents(data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const formData = {
      title: data.get('title'),
      start: new Date(data.get('start')),
      end: new Date(data.get('end')),
      allDay: data.get('allDay') === 'on'
    };
    fetch(`http://localhost:5000/events/${jwt.decode(localStorage.getItem("token")).id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => {
        window.location.reload();
      });
  }

  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 ml-2 ">
      <div className='flex md:w-5/6 mt-10 border-b-2 border-[#111827]/40 pb-4 text-2xl'>Bienvenido a tu Calendario</div>
      <div className='text-xl'>Inicio &gt; Calendario</div>
      <div className="flex flex-col md:flex-row gap-4 md:w-4/5 w-full">
        <div className="flex flex-col gap-6 pl-3">
          <TaskCalendar events={events} />
        </div>
        <div className="flex gap-6 pl-3 flex-grow">
          <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Título</label>
              <input type="text" id="title" name="title" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="start">Inicio</label>
              <input type="datetime-local" id="start" name="start" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="end">Fin</label>
              <input type="datetime-local" id="end" name="end" />
            </div>
            <div className="flex gap-2">
              <label htmlFor="all">Todo el día</label>
              <input type="checkbox" id="all" name="allDay" />
            </div>
            <button className="bg-[#F87171] text-white rounded-md py-2" type="submit">Crear Evento</button>
          </form>
        </div>
      </div>
    </section>
  );
}



export default CalendarPage;