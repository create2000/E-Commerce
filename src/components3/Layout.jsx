// Layout.jsx
import React from 'react';
import FirstSection from '../components/FirstSection';
import Trends from '../components2/TopRated';

const Layout = ({ children }) => {
  return (
    <div>
      <FirstSection />
      {children}
      <Trends />
    </div>
  );
};

export default Layout;
