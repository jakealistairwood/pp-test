import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CTA />
    </div>
  )
}

export default App;

