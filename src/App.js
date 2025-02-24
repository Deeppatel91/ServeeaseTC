import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import favicon from './assets/image_with_white_bg (1).ico';

import TermsandCondition from './components/TermsandCondition';
import About from './components/About';

const App = () => {
  const [isAuthenticated] = useState(false);

  useEffect(() => {
    // Update favicon
    const linkElement = document.querySelector('link[rel="icon"]');
    if (linkElement) {
      linkElement.href = favicon;
    } else {
      // If favicon link doesn't exist, create it
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.href = favicon;
      document.head.appendChild(newFavicon);
    }
  }, []);

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <div>
        <div>
          <Routes>
            <Route path="/TermsandCondition" element={<TermsandCondition />} />
            <Route path="/About" element={<About />} />
            <Route
              path="/protected"
              element={
                <ProtectedRoute>
                  <div>Protected Content</div>
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;