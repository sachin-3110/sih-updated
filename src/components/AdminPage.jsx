import React from 'react';

const AdminPage = () => {
  // Dummy data for monitoring
  const destructionReports = 120;
  const rescueOperations = 45;
  const resourcesAllocated = 75; // in percentage
  const volunteersCoordinated = 150;
  const situationReports = 30;
  const communicationMessages = 200;

  return (
    <div className="bg-gray-100 min-h-screen pt-20">
      <header className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Admin Dashboard</h1>
      </header>
      <main className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Destruction Reports */}
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
          <h2 className="text-2xl font-bold mb-4">Destruction Reports</h2>
          <p className="text-lg text-gray-600 mb-4">
            Monitor and review reports of destruction caused by the disaster.
          </p>
          <p className="text-4xl font-bold text-red-500">{destructionReports}</p>
          <p className="text-lg text-gray-600">Reports</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View Reports</button>
        </div>

        {/* Rescue Operations */}
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
          <h2 className="text-2xl font-bold mb-4">Rescue Operations</h2>
          <p className="text-lg text-gray-600 mb-4">
            Track ongoing rescue operations and coordinate with rescue teams.
          </p>
          <p className="text-4xl font-bold text-green-500">{rescueOperations}</p>
          <p className="text-lg text-gray-600">Operations</p>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Track Operations</button>
        </div>

        {/* Resource Allocation */}
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
          <h2 className="text-2xl font-bold mb-4">Resource Allocation</h2>
          <p className="text-lg text-gray-600 mb-4">
            Manage and allocate resources effectively to areas in need.
          </p>
          <p className="text-4xl font-bold text-orange-500">{resourcesAllocated}%</p>
          <p className="text-lg text-gray-600">Allocated</p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-4">Manage Resources</button>
        </div>

        {/* Volunteer Coordination */}
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
          <h2 className="text-2xl font-bold mb-4">Volunteer Coordination</h2>
          <p className="text-lg text-gray-600 mb-4">
            Coordinate with volunteers and assign tasks to assist in disaster management.
          </p>
          <p className="text-4xl font-bold text-purple-500">{volunteersCoordinated}</p>
          <p className="text-lg text-gray-600">Volunteers</p>
          <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-4">Coordinate Volunteers</button>
        </div>

        {/* Situation Reports */}
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
          <h2 className="text-2xl font-bold mb-4">Situation Reports</h2>
          <p className="text-lg text-gray-600 mb-4">
            View real-time reports and updates on the current disaster situation.
          </p>
          <p className="text-4xl font-bold text-red-500">{situationReports}</p>
          <p className="text-lg text-gray-600">Reports</p>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">View Reports</button>
        </div>

        {/* Communication Center */}
        <div className="bg-white shadow-md rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-lg hover:z-10">
          <h2 className="text-2xl font-bold mb-4">Communication Center</h2>
          <p className="text-lg text-gray-600 mb-4">
            Communicate with team members and other stakeholders.
          </p>
          <p className="text-4xl font-bold text-teal-500">{communicationMessages}</p>
          <p className="text-lg text-gray-600">Messages</p>
          <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded mt-4">Open Center</button>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>&copy; 2024 ResQore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AdminPage;
