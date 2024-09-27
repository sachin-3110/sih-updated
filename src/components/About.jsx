import React from 'react';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';

const About = () => {
    return (
       <>
        <div className=" bg-gray-100 min-h-screen -mt-2">
       <NavBar /> 
            <header className="gap-9 items-center text-white p-4 flex mt-2 pt-20">
               
            </header>
            <NavLink to="/Home">
                    <h1 className=" text-center text-3xl font-bold text-black rounded-lg p-2">About Us</h1>
                </NavLink>
            <main className="container mx-auto p-6">
                <div className="bg-white shadow-md rounded-lg duration-500 p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        At ResQore, we are dedicated to saving lives and protecting properties during disasters. Our primary goal is to provide timely and accurate information to help communities prepare for, respond to, and recover from various emergencies.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg duration-500 p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We focus on creating a safer world by:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Providing real-time alerts and warnings about impending disasters.</li>
                        <li>Offering resources and guidance on emergency preparedness.</li>
                        <li>Promoting community awareness and education on disaster management.</li>
                        <li>Collaborating with local authorities to ensure effective response strategies.</li>
                        <li>Supporting the welfare of animals affected by disasters.</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg duration-500 p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Join Us in Our Vision</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        We believe that informed communities are safer communities. By working together, we can mitigate the impact of disasters and safeguard lives, properties, and wildlife. Join us in our Vision to build resilience and preparedness in our neighborhoods.
                    </p>
                </div>

                <div className="bg-white shadow-md rounded-lg duration-500 p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Whether you're an individual, organization, or local business, there are many ways you can help. Get involved by volunteering, donating, or simply spreading the word about disaster preparedness. Together, we can make a difference.
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Get Involved Today!</button>
                </div>
            </main>

            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; 2024 ResQore. All rights reserved.</p>
                <ul className="flex justify-center mb-4">
                    <li className="mr-4">
                        <a href="#" className="text-white hover:text-gray-200">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="text-white hover:text-gray-200">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li className="mr-4">
                        <a href="#" className="text-white hover:text-gray-200">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
       </>
    );
};

export default About;