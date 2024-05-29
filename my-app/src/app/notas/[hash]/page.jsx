'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import AddButtonNoteTitle from '@/components/AddButtonNoteTitle';

const NoteDetail = () => {
  const { hash } = useParams();
  const [notes, setNotes] = useState([]);
  const onSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const data = await fetch(`http://localhost:5000/notes/create/${hash}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const response = await data.json();
    if (response.code !== 201) {
      return;
    }
    setNotes([...notes, {
      id: response.data.userId,
      name: response.data.title,
      url: response.data.url
    }]);
  }
  useEffect(() => {
    fetch(`http://localhost:5000/notes/get/${hash}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotes(data)
      });
  }, [hash]);

  const [addNames, setAddname] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <AddButtonNoteTitle onClick={() => setAddname(!addNames)} />
      {
        addNames && (
          <div className='flex flex-col gap-4 items-center justify-end'>
            <form onSubmit={onSubmit}>
              <input name="newName" type='text' placeholder='Nombre de la nota' className='border-2 border-black/50 p-2' />
              <br />
              <button type="submit" className='bg-gray-800 text-white py-2 px-4 rounded-full shadow w-24'>Añadir</button>
            </form>
          </div>
        )
      }
    </div>
  );
};

export default NoteDetail;
