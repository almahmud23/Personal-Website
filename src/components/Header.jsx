import React, { useState } from 'react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-blue-600 fixed top-0 w-full z-50 shadow-lg">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-white">Almahmud's Portfolio</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-white font-medium">
                    <li><a href="#profile" className="hover:text-yellow-300">Profile</a></li>
                    <li><a href="#about" className="hover:text-yellow-300">About</a></li>
                    <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
                    <li><a href="#skills" className="hover:text-yellow-300">Skills</a></li>
                    <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="text-white md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <i className="fas fa-bars text-xl"></i>
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-blue-700 px-4 pb-4 space-y-2 text-white text-center font-medium">
                    <li><a href="#profile" onClick={toggleMenu} className="block py-2 hover:text-yellow-300">Profile</a></li>
                    <li><a href="#about" onClick={toggleMenu} className="block py-2 hover:text-yellow-300">About</a></li>
                    <li><a href="#projects" onClick={toggleMenu} className="block py-2 hover:text-yellow-300">Projects</a></li>
                    <li><a href="#skills" onClick={toggleMenu} className="block py-2 hover:text-yellow-300">Skills</a></li>
                    <li><a href="#contact" onClick={toggleMenu} className="block py-2 hover:text-yellow-300">Contact</a></li>
                </ul>
            )}
        </nav>
    );
}

export default Header;
