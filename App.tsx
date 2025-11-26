import React from 'react';
import Hero from './components/Hero';
import Comparison from './components/Comparison';
import Argument from './components/Argument';
import Solutions from './components/Solutions';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-matte-900 text-neutral-100 font-sans selection:bg-gold-600 selection:text-white overflow-x-hidden">
      <Hero />
      <Comparison />
      <Argument />
      <Solutions />
      <Calculator />
      <Footer />
    </div>
  );
};

export default App;