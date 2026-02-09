import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact'; // 👈 Import this
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      
      <main className="flex flex-col gap-12 pb-20">
        <Hero />
        <BentoGrid />
        <Philosophy />
        <Contact /> {/* 👈 Add this here */}
      </main>

      <Footer />
    </div>
  );
};

export default App;