import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Hero />
      <main>
        <Services />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  );
}

export default App;
