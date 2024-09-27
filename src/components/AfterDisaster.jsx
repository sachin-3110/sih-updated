import React from 'react';

const AfterDisaster = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Post-Disaster Guidelines</h1>
        <p className="text-lg mb-4">
          Recovery is a crucial part of disaster management. Here’s how to proceed after a disaster:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Assess Your Safety */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">1. Assess Your Safety</h2>
            <p>Ensure that you and your family are safe before entering damaged areas.</p>
          </div>

          {/* Document Damage */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">2. Document Damage</h2>
            <p>Take photos of any damage to property for insurance purposes.</p>
          </div>

          {/* Contact Local Authorities */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">3. Contact Local Authorities</h2>
            <p>Report any emergencies, such as gas leaks or downed power lines.</p>
          </div>

          {/* Seek Assistance */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">4. Seek Assistance</h2>
            <p>Look for local relief services and resources to help with recovery efforts.</p>
          </div>

          {/* Additional Guidelines */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">5. Clean Up Safely</h2>
            <p>Wear protective gear and be cautious of hazards while cleaning up debris.</p>
          </div>
        </div>

        <footer className="bg-gray-800 text-white text-center p-4">
          <p>&copy; 2024 ResQore. All rights reserved.</p>
        </footer>
      </section>
    </div>
  );
};

export default AfterDisaster;