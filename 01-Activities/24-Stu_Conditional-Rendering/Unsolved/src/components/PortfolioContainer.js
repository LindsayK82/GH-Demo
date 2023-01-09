import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // TODO: Add a comment describing the functionality of this method
  // Sets homepage to default load.

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
      // Homepage is rendered
    }
    if (currentPage === 'About') {
      return <About />;
      // About page is rendered
    }
    if (currentPage === 'Blog') {
      return <Blog />;
      // Blog page is rendered
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* We are passing the current page as the prop */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* This will render the current page */}
      {renderPage()}
    </div>
  );
}
