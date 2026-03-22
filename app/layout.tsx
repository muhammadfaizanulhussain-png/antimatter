import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;