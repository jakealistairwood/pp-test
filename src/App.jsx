import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CTA from './components/CTA';
import Jobs from './components/Jobs';
import News from './components/News';
import './App.scss';

const App = () => {
  return (
    <main className="app">
      <Navbar />
      <Hero />
      <CTA />
      <Jobs />
      <News />
    </main>
  )
}

export default App;

