
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TherapySection from './components/TherapySection';
import ArticleSection from './components/ArticleSection';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Decorative background glow elements */}
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] candle-glow flicker pointer-events-none"></div>
      <div className="fixed bottom-[-20%] left-[-10%] w-[600px] h-[600px] candle-glow flicker pointer-events-none" style={{ animationDelay: '2s' }}></div>

      <Navbar />
      
      <main>
        <Hero />
        <TherapySection />
        <ArticleSection />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
