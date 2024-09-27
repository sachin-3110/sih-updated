import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoLanguageSharp } from "react-icons/io5";
import { MdMenuOpen, MdClose } from "react-icons/md";

function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full fixed p-4">
            <div className="flex items-center">
                <NavLink to="/">
                    <img src="src/assets/Make Logo.jpg" className="h-full w-24" alt="Logo" />
                </NavLink>
            </div>
            <div className="hidden md:flex flex-row items-center justify-end w-1/2">
                <div className="lg:flex items-center overflow-hidden md:px-10 bg-[#1253224c] rounded-full">
                    <NavLink
                        to="/"
                        id="Home-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-[3vh] font-extrabold px-2 rounded"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/About"
                        id="about-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-[3vh] font-extrabold px-2 rounded ml-2"
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/Services"
                        id="services-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-[3vh] font-extrabold px-2 rounded ml-2"
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/Contactus"
                        id="contactus-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-[3vh] font-extrabold px-2 rounded ml-2"
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/Login"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-[3vh] font-extrabold px-2 rounded ml-2"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
            
            
            <div className="language-button justify-center items-center bg-black text-white flex md:text-black md:bg-white px-2 py-1 rounded-full text-xl gap-2">
            <div className='flex flex-row justify-center items-center gap-2'>
            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
                    {isMenuOpen ? <MdClose /> : <MdMenuOpen />}
                </button>
            </div>
                <IoLanguageSharp className=' text-2xl' />
            </div>
                <h1 className='hidden md:block'>English</h1>
            </div>
            {isMenuOpen && (
                <div id='chhota-nav' className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-white text-3xl focus:outline-none">
                        <MdClose />
                    </button>
                    <NavLink
                        to="/"
                        id="Home-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-3xl font-extrabold px-2 rounded mb-4"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/About"
                        id="about-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-3xl font-extrabold px-2 rounded mb-4"
                        onClick={toggleMenu}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/Services"
                        id="services-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-3xl font-extrabold px-2 rounded mb-4"
                        onClick={toggleMenu}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/Contactus"
                        id="contactus-button"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-3xl font-extrabold px-2 rounded mb-4"
                        onClick={toggleMenu}
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/Login"
                        className="hover:bg-[#dadada] hover:text-zinc-700 duration-300 text-white text-3xl font-extrabold px-2 rounded mb-4"
                        onClick={toggleMenu}
                    >
                        Login
                    </NavLink>
                </div>
            )}
        </nav>
    );
}

export default NavBar;
