import Navbar          from './components/layout/Navbar';
import Footer          from './components/layout/Footer';
import Hero            from './components/sections/Hero';
import About           from './components/sections/About';
import CalismaAlanlari from './components/sections/CalismaAlanlari';
import Education       from './components/sections/Education';
import Appointment     from './components/sections/Appointment';
import FAQ             from './components/sections/FAQ';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CalismaAlanlari />
        <Education />
        <Appointment />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
