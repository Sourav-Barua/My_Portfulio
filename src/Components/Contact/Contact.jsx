import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
      
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center mt-9 mb-8">
            <h1 className="text-3xl">Contact <span className="text-neutral-600">Me</span></h1>
            <p className="text-fuchsia-800">Get In Touch</p>
            <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2 text-lg font-medium text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-2 text-lg font-medium text-gray-700">
                        Message
                    </label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
                        placeholder="Enter your message"
                        rows="5"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 text-lg font-semibold text-white bg-neutral-600 rounded hover:bg-slate-950"
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
