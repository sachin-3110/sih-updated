import React from 'react';
import NavBar from './NavBar';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('contactForm').reset();
    window.scrollTo(0, 0); // Ensure the page scrolls to the top to make the NavBar visible
  };

  return (
    <>
      <NavBar />
      <div className="w-full h-screen flex justify-center items-center bg-gray-200">
        {/* Contact Us Section */}
        <section className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mb-6">
            Please fill out the form and we will get in touch with you as soon as possible.
          </p>

          <form
            id="contactForm"
            className="max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                name="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="something@something.com"
                name="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here"
                rows="4"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 w-full"
            >
              Submit
            </button>
          </form>

          {/* Success Message */}
          <p id="successMessage" className="text-center text-green-500 text-lg mt-4 hidden">
            Thank you! We will contact you as soon as possible.
          </p>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
