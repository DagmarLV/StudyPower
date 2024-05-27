// src/app/busqueda/page.jsx
"use client"; 

import React, { useState, useRef } from 'react';

function SearchPage() {
  const [generatedText, setGeneratedText] = useState('');
  const textAreaRef = useRef(null);

  const handleGenerateText = () => {
    setGeneratedText('Este es un texto generado por la IA.');
  };

  const handleCopyText = () => {
    if (textAreaRef.current) {
      textAreaRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-4 p-4 md:ml-16 w-auto">
      <div className="md:w-2/3 mt-10 border-b-2 border-black/50 pb-4">Inicio &gt; Busqueda</div>
      <div className="flex flex-col gap-4 md:w-2/3 w-full">
        <div className="flex items-center gap-4 bg-gray-200 p-4 rounded-md shadow-md">
          <input
            type="text"
            placeholder="Busqueda con LLM"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <button onClick={handleGenerateText} className="p-2 bg-gray-300 rounded-md">
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3H6a1 1 0 100 2h3v3a1 1 0 102 0v-3h3a1 1 0 100-2h-3V7z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className="relative bg-gray-200 p-4 rounded-md shadow-md mt-4">
          <textarea
            ref={textAreaRef}
            value={generatedText}
            readOnly
            className="w-full h-48 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleCopyText}
            className="absolute bottom-4 right-4 p-2 bg-blue-500 text-white rounded-md"
          >
            Copiar Texto
          </button>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
