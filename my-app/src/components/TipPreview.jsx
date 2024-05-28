import React from 'react';
import { FcIdea } from "react-icons/fc";

function TipPreview(props) {
	return (
        <div {...props}>
            <div className='flex flex-col items-center gap-4 mb-6'>
                {props?.children}
            </div>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-4 p-6 rounded-md bg-[#212E3F]/10'>
                    <div className='rounded-full h-fit w-fit p-1 bg-white'>
                        <FcIdea size={24}/>
                    </div>
                    <p className='text-sm'>{props?.tip}</p>
                </div>
            </div>
        </div>
    );
}

export default TipPreview;
