'use client';
import 'regenerator-runtime/runtime';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import createSpeechServicesPonyfill from 'web-speech-cognitive-services';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SUBSCRIPTION_KEY = process.env.NEXT_PUBLIC_API_AZURE_VOICE;
const REGION = 'eastus';
const { SpeechRecognition: AzureSpeechRecognition } = createSpeechServicesPonyfill({
    credentials: {
      region: REGION,
      subscriptionKey: SUBSCRIPTION_KEY,
    }
  });
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
    const [isRecording, setIsRecording] = useState(false);
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

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    const OnSpeechRecording = () => {
        if (!browserSupportsSpeechRecognition) {
            alert('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
            return;
        }
        if (isRecording) {
            SpeechRecognition.abortListening();
            setIsRecording(false);
            setDescription(transcript);
            resetTranscript();
            alert('Grabación finalizada');
        } else {
            SpeechRecognition.applyPolyfill(AzureSpeechRecognition);
            SpeechRecognition.startListening({ language: 'es-ES'});
            setIsRecording(true);
        }
    }
    return (
        <section className="container mx-auto flex flex-col md:gap-6 gap-4 p-4 md:ml-16 w-auto">
            <div className='md:w-2/3 mt-10 border-b-2 border-black/50 pb-4'>Bienvenido a tus apuntes</div>
            <div className=''>Inicio &gt; Apuntes &gt; {titleLabel} &gt; {noteLabel}</div>
            <h1>{noteLabel}</h1>
            <button onClick={OnSpeechRecording} className='bg-gray-800 text-white py-2 px-4 rounded-full shadow w-24'>{listening? "Grabando..." : "Voz a texto"}</button>
            <form onSubmit={onSubmit}>
                <textarea name="description" defaultValue={description} className='border-2 border-black/50 p-2 w-full h-96' >
                </textarea>
                <button type="submit" className='bg-gray-800 text-white py-2 px-4 rounded-full shadow w-24'>Guardar</button>
            </form>
        </section>
    );
}

export default NoteViewer;