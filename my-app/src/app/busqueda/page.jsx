"use client"; 

import React, {useRef } from 'react';
import Search from '@/components/Search';
import { FaCopy } from "react-icons/fa6";
function SearchPage() {
    const textAreaRef = useRef(null);
    const generatedText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
    const handleCopyText = () => {
        if (textAreaRef.current) {
          textAreaRef.current.select();
          document.execCommand('copy');
        }
      };


  return (
    <section className="container mx-auto flex flex-col md:gap-12 gap-8 p-4 md:ml-16 w-auto">
        <div className='w-full mt-10 border-b-2 border-black/50 pb-4 text-xl'>Inicio &gt; Búsqueda</div>
      
        <div className="flex flex-col w-full items-center gap-12">
            <div className='flex flex-col p-2 md:w-4/5 w-full text-xl gap-12'>
                <div><Search/></div>
                <div className="flex flex-col space-between bg-slate-200 rounded-lg md:p-6 p-3 w-full h-auto min-h-[550px]">
                    <textarea
                        ref={textAreaRef}
                        value={generatedText}
                        readOnly
                        className="md:p-6 p-2 border-2 border-black rounded-lg w-full text-lm
                        h-auto min-h-[500px] w-full resize-none bg-slate-200  transition-all"
                    />
                    <div className="flex justify-end">
                        <button
                            onClick={handleCopyText}
                            className="w-fit p-2 bg-slate-200 text-bg-[#212E3F] rounded-lg hover:bg-[#212E3F] hover:text-white"
                        >
                            <FaCopy size={24}/>
                        </button>
                    </div>
			    </div>
            </div>		
	    </div>

    </section>
  );
}

export default SearchPage;