'use client';
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEllipsisV, FaTrashAlt, FaCopy, FaShareAlt } from 'react-icons/fa';

const OptionsMenu = ({ onClose }) => (
    <div className="absolute top-0 left-12 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
        <ul className="py-1">
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
                <FaTrashAlt className="mr-2" />
                Eliminar
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
                <FaCopy className="mr-2" />
                Duplicar
            </li>
            <li className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={onClose}>
                <FaShareAlt className="mr-2" />
                Compartir
            </li>
        </ul>
    </div>
);

const NoteTitle = ({ name }) => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);
    const router = useRouter();

    const toggleMenu = (e) => {
        e.stopPropagation();
        setShowMenu((prevShowMenu) => !prevShowMenu);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    const handleComponentClick = () => {
        router.push("./notas/" + targetUrl);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div onClick={handleComponentClick} className="">
            <div className="relative" ref={menuRef}>
                <span className="text-base">{name}</span>
                <button onClick={toggleMenu} className="ml-2 p-2 rounded-full text-black">
                    <FaEllipsisV />
                </button>
                {showMenu && <OptionsMenu onClose={() => setShowMenu(false)} />}
            </div>
        </div>
    );
};

export default NoteSelector;
