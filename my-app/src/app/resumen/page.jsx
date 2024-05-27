'use client';
import { useState, useRef } from 'react';
import { FaArrowRight, FaPaperclip } from 'react-icons/fa';

export default function Summarypage() {
    const [data, setData] = useState('');
    const [afterSummaryVisibility, setAfterSummaryVisibility] = useState(true);
    const [summaryVisibility, setSummaryVisibility] = useState(false);
    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = await fetch('http://localhost:5000/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        const response = await data.json();
        setData(response.summary);
        setAfterSummaryVisibility(false);
        setSummaryVisibility(true);
    }
    const [text, setText] = useState('');
    const textareaRef = useRef(null);

    const handleInputChange = (e) => {
        const textarea = textareaRef.current;
        setText(e.target.value);
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight - 50 + 'px';
    };
    return (
        <main className='md:gap-12 gap-4 p-4 md:mt-8'>
            {afterSummaryVisibility && <div>
                <h1 className="text-4xl font-bold text-center">Resumen</h1>
                <p className="text-lg text-center">Haz el resumen de un texto o archivo</p>
                <br />
                <br />
                <br />
                <div className="flex justify-center items-center">
                    <form onSubmit={onSubmit}>
                        <div className="relative min-w-[800px]">
                            <textarea
                                ref={textareaRef}
                                name="text"
                                value={text}
                                onChange={handleInputChange}
                                className="h-auto min-h-[400px] w-full resize-none rounded-[7px] bg-slate-200 px-6 py-4 pb-28 font-sans text-sm text-blue-gray-700 transition-all outline-none"
                                placeholder=" "
                                style={{ overflow: 'hidden' }}
                            ></textarea>
                            <button
                                type="submit"
                                className="absolute bottom-2 right-2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors bottom-4 right-4">
                                <FaArrowRight />
                            </button>
                            <label
                                htmlFor="file-upload"
                                className="absolute bottom-4 left-4 flex items-center bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                            >
                                <FaPaperclip className="mr-2" />
                                Adjuntar archivo
                                <input
                                    id="file-upload"
                                    type="file"
                                    className="hidden"
                                />
                            </label>
                        </div>
                        <br />
                        <input type="text" name="percentage" className="peer h-10 w-[500px] mt-3 bg-transparent border-b-2 border-gray-900 text-white placeholder-transparent focus:outline-none" placeholder="Percentage of summary"></input>
                        <br />
                    </form>
                </div>



            </div>
            }
            {summaryVisibility && <div className=''>
                <h1 className="text-4xl font-bold">Summary</h1>
                <div className="text-justify overflow-auto h-[300px] w-[500px] bg-gray-100 p-3 rounded-[7px] border border-gray-200">
                    {data}
                </div>
                <br />
                <br />
                <button
                    onClick={() => {
                        setAfterSummaryVisibility(false);
                        setSummaryVisibility(false);
                    }}
                    className="w-[500px] h-10 mt-3 bg-gray-900 text-white rounded-[7px] font-semibold text-sm flex items-center justify-center transition-all hover:bg-gray-800 focus:outline-none">
                    Guardar en notas
                </button>
                <button
                    onClick={() => {
                        setAfterSummaryVisibility(true);
                        setSummaryVisibility(false);
                    }}
                    className="w-[500px] h-10 mt-3 bg-gray-900 text-white rounded-[7px] font-semibold text-sm flex items-center justify-center transition-all hover:bg-gray-800 focus:outline-none">
                    New Note
                </button>
            </div>
            }
        </main>
    );
}