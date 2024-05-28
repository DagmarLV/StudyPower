import React from 'react';
import { CgClose } from "react-icons/cg";
const Notification = (props) => {
  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white md:py-8 py-6 px-4 rounded-[15px] shadow-lg flex items-center justify-between md:w-1/3 w-5/6">
      <span>{props.message}</span>
      <button
        className="text-white hover:text-red-400 hover:scale-125"
        onClick={props.onClose}
      >
        <CgClose size={20}/>
      </button>
    </div>
  );
};

export default Notification;