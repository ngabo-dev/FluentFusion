import React, { useState } from 'react';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/sub/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message); // Show success or error message

      // Reset the email input field after successful subscription
      if (data.success) {
        setEmail('');
      }
    } catch (error) {
      setMessage('Error subscribing email');
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-600 to-green-900 py-16 px-6 font-[sans-serif] my-8 mx-4 md:my-16 md:mx-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white md:text-5xl text-4xl font-extrabold mb-6">Unlock Your Language Potential</h2>
        <p className="text-xl text-gray-300">Join our community and receive exclusive tips, tricks, and resources to help you learn a new language.</p>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 mt-12 flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-96 bg-transparent border-b-2 border-pink-600 py-3 px-4 text-pink-600 text-base focus:outline-none placeholder-pink-600 placeholder-opacity-70"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="max-md:mt-6 md:ml-4 bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded hover:shadow-md hover:transform hover:scale-105 focus:outline-none"
          >
            Get Started
          </button>
        </form>
        {message && <p className="text-white mt-4">{message}</p>}
      </div>
    </div>
  );
};

export default SubscribeForm;