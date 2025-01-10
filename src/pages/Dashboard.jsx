import React from 'react';
import PostTable from '../components/PostTable';  // Import the PostTable component

const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <PostTable />  {/* Render PostTable here */}
    </div>
  );
};

export default Dashboard;
