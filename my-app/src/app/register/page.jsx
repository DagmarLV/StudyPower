// src/app/register/page.jsx
'use client';
import { useState } from 'react';
import React from 'react';
import RegisterResponse from '@/components/RegisterResponse';

function RegisterPage() {
    const [registerResponse, setRegisterResponse] = useState('');
    const [registerResponseVisibility, setRegisterResponseVisibility] = useState(false);
    const [colorResponse, setColorResponse] = useState('bg-green-100');

    async function onSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const data = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        });
        const response = await data.json();
        console.log(response);
        if (response.code === 201) {
            setColorResponse('bg-green-100');
        }else{
            setColorResponse('bg-red-100');
        }
        setRegisterResponse(response.message);
        setRegisterResponseVisibility(true);

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Name</label>
                        <input name="user" type="text" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium">Email</label>
                        <input name="email" type="email" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium">Password</label>
                        <input name="password" type="password" className="w-full p-2 border border-gray-300 rounded-md" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Register</button>
                </form>
                {registerResponseVisibility &&
                    <div>
                        <br/>
                        <RegisterResponse message={registerResponse} bgColor={colorResponse} onClose={() => setRegisterResponseVisibility(false)} />
                    </div>
                }
            </div>
        </div>
    );
}

export default RegisterPage;
