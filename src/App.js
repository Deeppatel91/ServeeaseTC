import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import TermsandCondition from './components/TermsandCondition'; // Import the TermsandCondition component
import About from './components/About'; // Import the About component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication status

  // Protected Route Component
  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/" replace />;
  };

  return (
    <Router>
      <div>
        <div>
          <Routes>
            {/* Unprotected Routes */}
            <Route path="/TermsandCondition" element={<TermsandCondition />} />
            <Route path="/About" element={<About />} />

            {/* Example of a Protected Route */}
            <Route
              path="/protected"
              element={
                <ProtectedRoute>
                  <div>Protected Content</div>
                </ProtectedRoute>
              }
            />

            {/* Default Route */}
            <Route path="/" element={<div>Home Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;