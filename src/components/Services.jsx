import React from 'react';
import NavBar from './NavBar';
const Services = () => {
  return (
    <>
    <NavBar/>
    <div className="bg-gray-100">

      <div className="container mx-auto p-5 pt-20">
        <h1 className="text-3xl font-bold text-center mb-8">Disaster Management Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Emergency Alerts */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Emergency Alerts</h2>
            <p className="mt-2 text-gray-600">Get real-time alerts and notifications during disasters.</p>
          </div>

          {/* Card 2: Resource Allocation */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Resource Allocation</h2>
            <p className="mt-2 text-gray-600">Manage and allocate resources effectively in disaster situations.</p>
          </div>

          {/* Card 3: Shelter Information */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Shelter Information</h2>
            <p className="mt-2 text-gray-600">Find nearby shelters and their availability during disasters.</p>
          </div>

          {/* Card 4: Volunteer Coordination */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Volunteer Coordination</h2>
            <p className="mt-2 text-gray-600">Connect volunteers with opportunities to assist during crises.</p>
          </div>

          {/* Card 5: Recovery Resources */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Recovery Resources</h2>
            <p className="mt-2 text-gray-600">Access resources for recovery and rebuilding efforts.</p>
          </div>

          {/* Card 6: Situation Reports */}
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h2 className="text-xl font-semibold">Situation Reports</h2>
            <p className="mt-2 text-gray-600">View real-time reports and updates on ongoing disasters.</p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-center mb-4">Locate Us</h2>
          <div className="w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8021551614243!2d76.76475627460934!3d28.449032175765364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d6bb18c31279b%3A0x11d335a5bc228dd6!2sSt.%20Andrews%20Institute%20of%20Technology%20and%20Management!5e1!3m2!1sen!2sin!4v1726723754627!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Services;