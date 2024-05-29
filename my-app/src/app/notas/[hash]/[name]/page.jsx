'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const NoteViewer = () => {
    const params = useParams();
    const [titleLabel, setTitleLabel] = useState("");
    const [noteLabel, setNoteLabel] = useState("");
    const [description, setDescription] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5000/notes/get/${params.hash}/${params.name}`)
            .then((res) => res.json())
            .then((data) => {
                setTitleLabel(data.title);
                setDescription(data.description);
                setNoteLabel(params.name);
            });
        setNoteLabel(params.name);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = await fetch(`http://localhost:5000/notes/create/${params.hash}/${params.name}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        const response = await data.json();
        if (response.code !== 200) {
            return;
        }
        setDescription(response.description);
    }

    return (
        <section className="container mx-auto flex flex-col md:gap-6 gap-4 p-4 md:ml-16 w-auto">
            <div className='md:w-2/3 mt-10 border-b-2 border-black/50 pb-4'>Bienvenido a tus apuntes</div>
            <div className=''>Inicio &gt; Apuntes &gt; {titleLabel} &gt; {noteLabel}</div>
            <h1>{noteLabel}</h1>
            <form onSubmit={onSubmit}>
                <textarea name="description" defaultValue={description} className='border-2 border-black/50 p-2 w-full h-96' >
                </textarea>
                <button type="submit" className='bg-gray-800 text-white py-2 px-4 rounded-full shadow w-24'>Guardar</button>
            </form>
        </section>
    );
}

export default NoteViewer;