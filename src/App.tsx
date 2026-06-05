import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Appointment from './components/Appointment';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white w-full overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Features />
          <Testimonials />
          <Appointment />
          <Location />
          <FAQ />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}
