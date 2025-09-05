import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Terms from './pages/legal/Terms';
import Refund from './pages/legal/Refund';
import NotFound from './pages/NotFound';

const originalTitle = "AIFIER | Restaurant Management Platform";
const returnTitle = "🍽️ Come back! Try our 10-day free trial | AIFIER";

function App() {
  useEffect(() => {
    const handleVisibilityChange = () => {
      document.title = document.hidden ? returnTitle : originalTitle;
    };

    document.title = originalTitle;
    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.documentElement.style.scrollBehavior = 'smooth';

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful');
          },
          (err) => {
            console.log('ServiceWorker registration failed: ', err);
          }
        );
      });
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;