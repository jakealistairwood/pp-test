import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Jobs from './components/Jobs';
import News from './components/News';
import Perks from './components/Perks';
import './App.scss';

const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <CTA />
      <Jobs />
      <News />
      <Perks />
    </main>
  )
}

export default App;

