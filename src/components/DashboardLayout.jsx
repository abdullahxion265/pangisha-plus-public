import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderDashboard from '../components/HeaderDashboard';
import FooterDashboard from '../components/FooterDashboard';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <HeaderDashboard />
      <main className="dashboard-main">
        <Outlet />
      </main>
      <FooterDashboard />
    </div>
  );
};

export default DashboardLayout;
