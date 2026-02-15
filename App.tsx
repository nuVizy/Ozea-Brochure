import React from 'react';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Promises from './components/Promises';
import Journey from './components/Journey';
import Spaces from './components/Spaces';
import VenueHire from './components/VenueHire';
import Suites from './components/Suites';
import Pricing from './components/Pricing';
import CuratedCollections from './components/CuratedCollections';
import Dining from './components/Dining';
import Drinks from './components/Drinks';
import Suppliers from './components/Suppliers';
import Logistics from './components/Logistics';
import FAQ from './components/FAQ';
import NextSteps from './components/NextSteps';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full overflow-hidden bg-white text-ozea-black selection:bg-ozea-green selection:text-white font-sans antialiased">
      {/* 1 Cover and Private Welcome */}
      <Hero />
      <Intro />
      {/* 2 Our Promises and Reserving Your Date */}
      <Promises />
      {/* 3 Venue Journey Overview */}
      <Journey />
      {/* 4 The Spaces */}
      <Spaces />
      {/* 6 Included in Venue Hire & 7 Available Enhancements */}
      <VenueHire />
      {/* 8 Private Suites */}
      <Suites />
      {/* 9 Pricing */}
      <Pricing />
      {/* 9.5 Curated Collections (Signature) */}
      <CuratedCollections />
      {/* 10 Dining and Menus */}
      <Dining />
      {/* 11 Drinks Packages */}
      <Drinks />
      {/* 12 Recommended Supplier Collection */}
      <Suppliers />
      {/* 13 Weather Plan & 14 The Weekend */}
      <Logistics />
      {/* 15 Frequently Asked Questions */}
      <FAQ />
      {/* 16 Closing and Next Steps */}
      <NextSteps />
      <Footer />
    </main>
  );
};

export default App;