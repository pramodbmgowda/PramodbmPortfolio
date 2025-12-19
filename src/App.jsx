import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#09090b] selection:bg-sky-500/30">
      <Navbar />
      
      <main className="flex flex-col gap-24 pb-20">
        <Hero />
        <BentoGrid />
        <Projects />
      </main>

      <Footer />
    </div>
  );
};

export default App;