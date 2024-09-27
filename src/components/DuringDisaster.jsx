import React from 'react';
import NavBar from './NavBar';

const DuringDisaster = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">During Disaster Guidelines</h1>
        <p className="text-lg mb-4">Stay safe and take appropriate actions during a disaster:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stay Calm and Follow Your Plan */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">1. Stay Calm and Follow Your Plan</h2>
            <p>Keep your emergency kit accessible and know where to go.</p>
          </div>

          {/* Listen to Authorities */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">2. Listen to Authorities</h2>
            <p>Follow evacuation orders and updates from local emergency services.</p>
          </div>

          {/* Avoid Hazards */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">3. Avoid Hazards</h2>
            <p>Stay away from windows, and avoid flooded areas and downed power lines.</p>
          </div>

          {/* Communicate */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">4. Communicate</h2>
            <p>Use text messages or social media to communicate with family and friends, as phone lines may be overloaded.</p>
          </div>

          {/* Additional Guidelines */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">5. Stay Indoors</h2>
            <p>Stay indoors and away from windows until the authorities declare it safe.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">6. Help Others</h2>
            <p>If it's safe, help neighbors and others who may need assistance.</p>
          </div>
        </div>

        {/* Flowchart */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">During Disaster Response Flowchart</h2>
          <img src="path/to/flowchart.png" alt="During Disaster Response Flowchart" className="w-full h-auto" />
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DuringDisaster;