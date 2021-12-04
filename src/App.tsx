import Home from './pages/home';
import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Home/>
    </Router> 
  );
}

export default App;
