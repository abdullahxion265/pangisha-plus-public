import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import DashboardLayout from './components/DashboardLayout';

// Import your pages
import Home from './pages/Home';
import PropertyDetail from './pages/PropertyDetail';
import Search from './components/Search';
import Favorites from './pages/Favorites';
import ProfileDashboard from './pages/ProfileDashboard';
import NotFound from './pages/NotFound';
import HomeDashboard from './pages/HomeDashboard';
import { FavoritesProvider } from './context/FavoritesContext'; 

// A layout component that applies a background color
const LayoutWithBackground = () => (
  <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#F9F3EB' }}>
    <main className="flex-grow">
      <Outlet />
    </main>
  </div>
);

function App() {
  return (
    <FavoritesProvider>
      <Router>
        <Routes>
          {/* Route outside of layouts does not receive the background */}
          <Route path="/property/:id" element={<PropertyDetail />} />
     

          {/* All other routes wrapped with background styling */}
          <Route element={<LayoutWithBackground />}>
            {/* Main layout for standard pages */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/profile" element={<ProfileDashboard />} />
              <Route path="*" element={<NotFound />} />

            </Route>
            
            {/* Dashboard layout for listings or other dashboard routes */}
            <Route element={<DashboardLayout />}>
              <Route path="/listings" element={<HomeDashboard />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </FavoritesProvider>
  );
}

export default App;
