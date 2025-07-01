import React, { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = { name, email, message };

        try {
            const response = await fetch('https://formspree.io/f/mrbggzdg', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setName('');
                setEmail('');
                setMessage('');
                alert('Message sent successfully!');
            } else {
                alert('Error sending message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error sending message. Please try again.');
        }
    };

    return (
        <section id="contact" className="bg-white py-20 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Contact Me</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Feel free to reach out through the platforms below or send me a direct message!
                </p>

                {/* Social Links */}
                <div className="flex justify-center flex-wrap gap-6 mb-10">
                    <a href="https://linkedin.com" className="text-blue-600 hover:underline">LinkedIn</a>
                    <a href="https://web.facebook.com/mdapon.smr" className="text-blue-600 hover:underline">Facebook</a>
                    <a href="https://www.youtube.com/@ar1ya9" className="text-blue-600 hover:underline">YouTube</a>
                    <a href="https://instagram.com" className="text-blue-600 hover:underline">Instagram</a>
                    <a href="https://almahmud23.github.io/Personal-Website/" className="text-blue-600 hover:underline">Portfolio</a>
                </div>

                <p className="text-gray-700 text-md mb-10">
                    📍 Address: Goyeshpur, Pabna Sadar, Pabna, Bangladesh
                </p>

                {/* Contact Form */}
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-100 rounded-lg shadow-md p-6 w-full max-w-md mx-auto text-left"
                >
                    <input
                        type="text"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <textarea
                        className="w-full p-3 mb-4 border border-gray-300 rounded-md h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Type your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-200"
                    >
                        Send Message
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-10">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Almahmud. All Rights Reserved.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
