import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
    </div>
  );
};

export default App;
