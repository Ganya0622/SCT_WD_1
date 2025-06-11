import React from 'react'; // Imports React to use JSX
import ReactDOM from 'react-dom/client'; // React 18+ uses 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import App from './App'; // Importing App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Creating root to render the app

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
    </Routes>
  </Router>
);
