import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductGrid from './components/ProductGrid';
import ValueProps from './components/ValueProps';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <ValueProps />
      <Footer />
    </div>
  );
}

export default App;
