import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
    const [showPopup, setShowPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: '',
        isTrained: false,
        trainedDetails: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your form submission logic here
        setShowPopup(false);
    };

    const handleAlertButtonClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className='w-full min-h-screen'>
            <section className="bg-fixed bg-[url('https://img.freepik.com/free-photo/people-wearing-life-jackets-migration-crisis_23-2150901762.jpg?t=st=1727248724~exp=1727252324~hmac=1e1a0453fbbf855e003d95667b7143c3a415414dbc7cbca345de24397e8fe14e&w=1060')] bg-cover bg-center h-auto w-full">
                <div className="flex bg-black bg-opacity-30 lg:h-screen items-center flex-col md:flex-row w-full md:mx-auto p-4 pt-14 md:p-6 lg:pt-20">
                    <div className="md:w-1/2">
                        <p className="text-[8vw] lg:text-[6vw] font-bold text-white">Disaster Management Website</p>
                        <p className="text-base md:text-lg text-zinc-300">Welcome to our disaster management website, where you can find resources and information to help you prepare for and respond to disasters.</p>
                    </div>
                    {/* Alert buttons Home Page */}
                    <div className="w-full md:w-1/3 flex my-5 flex-col h-auto justify-center items-center md:pl-10 gap-2 text-xl md:gap-5 md:text-[2.5vh]">
                        <div className="flex flex-wrap flex-row gap-2 md:gap-5 text-[1.5vh] md:text-[2.5vh]">
                            <button onClick={handleAlertButtonClick} className="md:py-1 md:px-2 px-1 hover:bg-red-600 border-[1px] hover:border-none hover:shadow-[0_5px_20px_rgba(255,255,255)] rounded-2xl text-white font-semibold text-white duration-300 bg-transparent">SOS-Ambulance</button>
                            <button onClick={handleAlertButtonClick} className="md:py-1 md:px-2 px-1 hover:bg-red-600 border-[1px] hover:border-none hover:shadow-[0_5px_20px_rgba(255,255,255)] rounded-2xl text-white font-semibold text-white duration-300 bg-transparent">SOS First-Aid</button>
                            <button onClick={handleAlertButtonClick} className="md:py-1 md:px-2 px-1 hover:bg-red-600 border-[1px] hover:border-none hover:shadow-[0_5px_20px_rgba(255,255,255)] rounded-2xl text-white font-semibold text-white duration-300 bg-transparent">First-Aid Steps</button>
                            <button onClick={handleAlertButtonClick} className="md:py-1 md:px-2 px-1 hover:bg-red-600 border-[1px] hover:border-none hover:shadow-[0_5px_20px_rgba(255,255,255)] rounded-2xl text-white font-semibold text-white duration-300 bg-transparent">Precautionary Steps</button>
                            <button onClick={handleAlertButtonClick} className="md:py-1 md:px-2 px-1 hover:bg-red-600 border-[1px] hover:border-none hover:shadow-[0_5px_20px_rgba(255,255,255)] rounded-2xl text-white font-semibold text-white duration-300 bg-transparent">Health Care Centers</button>
                            <button onClick={handleAlertButtonClick} className="md:py-1 md:px-2 px-1 hover:bg-red-600 border-[1px] hover:border-none hover:shadow-[0_5px_20px_rgba(255,255,255)] rounded-2xl text-white font-semibold text-white duration-300 bg-transparent">Relief Camps</button>
                        </div>
                    </div>
                    {/* Alert buttons Home Page END */}
                </div>
            </section>
            <section className="container justify-center items-center flex-col md:h-screen mx-auto my-10 gap-2 h-auto flex p-4">
                
                <div className="w-full text-black flex md:flex-col justify-between items-center md:w-1/2 mx-2 text-center text-3xl md:text-5xl lg:text-[10vh] tracking-wider">
                    <p className=''>Nearby Situation</p>
                    <div className=" flex justify-center items-center">
                        {/* add a news api */}
                    </div>
                </div>
                <div className="w-full rounded-xl overflow-hidden md:w-2/3 mx-2">
                    <img className="h-full w-full object-cover" src="https://i0.wp.com/www.sciencenews.org/wp-content/uploads/2020/08/082920_aw_forecast_feat.jpg" alt="" />
                </div>
            </section>
            <main className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
                <div className="flex flex-wrap justify-center -mx-4">
                    <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <h1 className="text-2xl font-extrabold">Pre Disaster</h1>
                        <div className="bg-white rounded shadow-[5px_5px_0px_0px_rgba(249,115,22)] p-4">
                            <img src="https://www.hi.org/sn_uploads/fck/IMG_BANDEAUX_PAGES_TABLETTES_TELHI_DANS_LE_MONDE.jpg" alt="Image 1" className="w-full h-64 object-cover mb-4" />
                            <p className="text-base md:text-lg text-gray-600 mb-4">Stay informed about weather updates and emergency alerts in your area. Make sure you have a plan in place in case of a disaster. Know your evacuation routes and emergency shelters. Practice your plan with your family to ensure everyone knows what to do in case of a disaster.</p>
                            <NavLink to="/predisaster" className="bg-orange-500 duration-500 hover:text-orange-500 hover:bg-white hover:border-b-2 hover:border-l-4 text-white font-bold py-2 px-4 rounded text-center block">GuideLines</NavLink>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <div className="bg-white rounded shadow-[5px_5px_0px_0px_rgba(249,115,22)] p-4">
                            <h1 className="text-2xl font-extrabold md:pb-7">During Disaster</h1>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT33weod0THFguNldQZ4dFHmzHZu6AMY0M3oA&s" alt="Image 2" className="w-full h-64 object-cover mb-4" />
                            <p className="text-base md:text-lg text-gray-600 mb-4">Seek shelter immediately. Go to a basement or an interior room on the lowest floor of your building. Stay away from windows and doors. Avoid traveling and stay off the roads. If you're driving, pull over to a safe location and wait for the disaster to pass.</p>
                            <NavLink to="/duedisaster" className="bg-orange-500 duration-500 hover:text-orange-500 hover:bg-white hover:border-b-2 hover:border-l-4 text-white font-bold py-2 px-4 rounded text-center block">GuideLines</NavLink>
                        </div>
                    </div>
                    <div className="w-full md:w-1/3 xl:w-1/3 p-4">
                        <div className="bg-white rounded shadow-[5px_5px_0px_0px_rgba(249,115,22)] p-4">
                            <h1 className="text-2xl font-extrabold">Post Disaster</h1>
                            <img src="https://www.habitat.org/sites/default/files/2016-09/disaster-volunteers-rebuild-nepal-earthquake-2.jpg" alt="Image 3" className="w-full h-64 object-cover md:mb-9" />
                            <p className="text-base md:text-lg text-gray-600 mb-4">Check for injuries and provide assistance if needed. If you're trained, provide first aid and CPR if necessary. Take photos of any damage to your property and belongings for insurance purposes. Contact your insurance provider to report any claims.</p>
                            <NavLink to="/postdisaster" className="bg-orange-500 text-white font-bold py-2 px-4 rounded text-center duration-500 hover:text-orange-500 hover:bg-white hover:border-b-2 hover:border-l-4 block">GuideLines</NavLink>
                        </div>
                    </div>
                </div>
            </main>
            <section className="bg-white flex flex-col md:flex-row justify-between md:h-auto w-full p-10">
                <div className="flex flex-col gap-10 text-black text-[4vh] text-center tracking-widest w-full md:w-[30%]">
                    <p><u>Pre-Disaster</u> <u>Forecast</u></p>
                    <p className="text-sm md:text-base">Pre-disaster planning is crucial for minimizing the impact of disasters and ensuring community resilience. It involves identifying potential hazards, assessing vulnerabilities, and implementing strategies to mitigate risks. By preparing resources, developing evacuation plans, and establishing communication protocols, communities can respond swiftly when disasters strike. Public awareness campaigns and regular drills help educate people on safety measures, making them more prepared and capable of protecting themselves and their assets. Effective pre-disaster measures can significantly reduce loss of life, damage to property, and recovery time.</p>
                </div>
                <div id="heatMap" className=" md:h-[500px] h-[50vh] w-full md:w-[60%]">
                    <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d444971.47238320723!2d76.9665827!3d29.389619199999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727184743159!5m2!1sen!2sin" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <footer className="bg-white p-4 pt-6 md:p-6 lg:p-12">
                <footer className="bg-zinc-100 py-10">
                    <div className="container mx-auto flex flex-col items-center">
                        <img src="src/assets/Make Logo.jpg" alt="Brand Logo" className="mb-4 h-16" />
                        <h2 className="text-2xl font-semibold mb-2">Stay Connected</h2>
                        <p className="mb-6">© 2024 ResQore. All rights reserved.</p>
                        <nav className="mb-4">
                            <a href="#privacy-policy" className="hover:text-gray-400 md:mx-2">Privacy Policy</a> |
                            <a href="#terms-of-service" className="hover:text-gray-400 md:mx-2">Terms of Service</a> |
                            <a href="#contact-us" className="hover:text-gray-400 md:mx-2">Contact Us</a>
                        </nav>
                        <div className="flex space-x-4 flex-wrap">
                            <a href="/assets/contactus.html" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i> Facebook</a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i> Twitter</a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i> Instagram</a>
                            <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
                        </div>
                    </div>
                </footer>
            </footer>

            {/* Popup Form */}
            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Emergency Contact Form</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
                            <input
                                required
                                type="text"
                                id="name"
                                name="name"
                                className="w-full p-2 border-2 mb-4"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                            <label className="block mb-2 font-semibold" htmlFor="phone">Phone Number</label>
                            <input
                                required
                                type="tel"
                                id="phone"
                                name="phone"
                                className="w-full p-2 border-2 mb-4"
                                value={formData.phone}
                                onChange={handleInputChange}
                            />
                            <label className="block mb-2 font-semibold" htmlFor="location">Location</label>
                            <input
                                required
                                type="text"
                                id="location"
                                name="location"
                                className="w-full p-2 border-2 mb-4"
                                value={formData.location}
                                onChange={handleInputChange}
                            />
                            <label className="block mb-2 font-semibold" htmlFor="isTrained">
                                <input
                                    type="checkbox"
                                    id="isTrained"
                                    name="isTrained"
                                    className="mr-2"
                                    checked={formData.isTrained}
                                    onChange={handleInputChange}
                                />
                                I belong to trained firemen, police, military, first aid, or ambulance attendants
                            </label>
                            {formData.isTrained && (
                                <div>
                                    <label className="block mb-2 font-semibold" htmlFor="trainedDetails">Please provide details</label>
                                    <input
                                        required
                                        type="text"
                                        id="trainedDetails"
                                        name="trainedDetails"
                                        className="w-full p-2 border-2 mb-4"
                                        value={formData.trainedDetails}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            )}
                            <div className="flex justify-end gap-4">
                                <button type="button" onClick={handleClosePopup} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                                <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;