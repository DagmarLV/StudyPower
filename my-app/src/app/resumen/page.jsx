'use client';
import { useState, useRef } from 'react';
import { FaArrowRight, FaPaperclip } from 'react-icons/fa';
import CustomSlider from '@/components/CustomSlider';

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

    const [value, setValue] = useState(50);

    const handleSliderChange = (newValue) => {
        setValue(newValue);
    };


    return (
        <section className="container mx-auto flex flex-col gap-8 p-4 md:ml-16 w-auto">
        <div className='md:w-5/6 mt-10 border-b-2 border-black/50 pb-4 text-xl'>Inicio &gt; Resumen</div>
        <div className="flex flex-col w-full justify-center items-center gap-10">

                {afterSummaryVisibility && <div className='flex flex-col p-2 md:w-4/5 items-center w-full text-xl gap-1'>
                    <h1 className="text-3xl font-bold text-center">Resumen</h1>
                    <p className="text-lg text-center">Haz el resumen de un texto o archivo</p>
                   
                    <div className="mt-10 flex flex-col border-2 border-red-500 rounded-lg  w-full h-auto min-h-[450px]">
                        <form onSubmit={onSubmit}>
                        <div className="flex flex-col space-between bg-slate-200 border-2 border-blue-500 rounded-lg md:p-6 p-3 w-full h-auto min-h-[470px] gap-4">
                                <textarea
                                    ref={textareaRef}
                                    name="text"
                                    value={text}
                                    onChange={handleInputChange}
                                    className="md:p-6 p-2 border-2 border-black rounded-lg w-full text-lm
                                    h-auto min-h-[400px] w-full resize-none bg-slate-200  transition-all"
                                    placeholder="|"
                                    style={{ overflow: 'hidden' }}
                                ></textarea>
                                <div className="flex justify-between">
                                    <label
                                        htmlFor="file-upload"
                                        className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-full hover:bg-gray-300 transition-colors cursor-pointer"
                                        >
                                        <FaPaperclip className="mr-2" />
                                            Adjuntar archivo
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                        />
                                    </label>
                                    <button
                                        type="submit"
                                        className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                                        <FaArrowRight />
                                    </button>
                                    
                                </div>
                            </div>
                            <div className='flex flex-col items-center gap-2'>
                            <input 
                                type="text" 
                                name="percentage" 
                                value={value}
                                className="peer w-[500px]  border-gray-900 text-black focus:outline-none" 
                                placeholder={value}
                                />
                            <p className='p-5'>Porcentaje de resumen: {value}</p>
                            <CustomSlider name="percentage" onChange={handleSliderChange} />
                            </div>
                            
                        </form>
                    </div>



                </div>
                }
            
        </div>
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
        
        </section>
        
    );
}