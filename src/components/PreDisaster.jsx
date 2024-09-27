import React from 'react';

const PreDisaster = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <section className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Pre-Disaster Guidelines</h1>
        <p className="text-lg mb-4">
          Preparation is key to minimizing the impact of disasters. Here are some essential steps to take before a disaster strikes:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Create a Disaster Plan */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">1. Create a Disaster Plan</h2>
            <p>Ensure that all family members know the plan, including evacuation routes and communication strategies.</p>
          </div>

          {/* Build an Emergency Kit */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">2. Build an Emergency Kit</h2>
            <p>Include essential items such as water, non-perishable food, first-aid supplies, flashlight, and batteries.</p>
          </div>

          {/* Stay Informed */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">3. Stay Informed</h2>
            <p>Monitor weather reports and alerts from local authorities.</p>
          </div>

          {/* Secure Your Home */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">4. Secure Your Home</h2>
            <p>Reinforce windows and doors, and ensure that heavy furniture is secured.</p>
          </div>

          {/* Additional Guidelines */}
          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">5. Know Your Community's Plan</h2>
            <p>Be aware of your community's disaster response plan and evacuation routes.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">6. Practice Drills</h2>
            <p>Regularly practice disaster drills with your family to ensure everyone knows what to do.</p>
          </div>
        </div>

        {/* Flowchart */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Pre-Disaster Preparation Flowchart</h2>
          <img src="path/to/flowchart.png" alt="Pre-Disaster Preparation Flowchart" className="w-full h-auto" />
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PreDisaster;