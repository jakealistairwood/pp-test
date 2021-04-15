import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Jobs from './components/Jobs';
import './App.scss';

const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <CTA />
      <Jobs />
    </main>
  )
}

export default App;

