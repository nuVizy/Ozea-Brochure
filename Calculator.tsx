import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';

const Calculator: React.FC = () => {
  const [guests, setGuests] = useState<number>(50);
  const [selectedMenu, setSelectedMenu] = useState<number>(0);
  const [selectedDrink, setSelectedDrink] = useState<number>(0);
  const [includeBridal, setIncludeBridal] = useState<boolean>(false);
  const [includeHoneymoon, setIncludeHoneymoon] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);

  const VENUE_FEE = 3500;

  const MENUS = [
    { name: "Signature Canapé Degustation", price: 12.50 },
    { name: "Ozea Ember BBQ / Family Feast", price: 75.00 },
    { name: "Reserve Collection Fine Dining", price: 85.00 },
    { name: "Ozea Sea & Flame", price: 89.00 },
    { name: "Signature Fire & Sea", price: 110.00 },
  ];

  const DRINKS = [
    { name: "None / Custom", price: 0 },
    { name: "Art of Arrival (Welcome Only)", price: 12.50 },
    { name: "Pimms Please (1 Hour)", price: 25.00 },
    { name: "AfterGlow Cocktail Hour (1 Hour)", price: 28.00 },
    { name: "Noir & Blanc / Mixology / Spritz (1 Hour)", price: 30.00 },
    { name: "Afterglow Collection (3 Hours)", price: 45.00 },
    { name: "Platinum Pour Collection (3 Hours)", price: 75.00 },
    { name: "Infinite Collection (3 Hours)", price: 100.00 },
  ];

  const SUITES = [
    { name: "Ozea Bridal Lounge", price: 450, state: includeBridal, toggle: setIncludeBridal },
    { name: "Signature Honeymoon Suite", price: 575, state: includeHoneymoon, toggle: setIncludeHoneymoon },
  ];

  useEffect(() => {
    let cost = VENUE_FEE;
    
    // Food & Drink
    const foodCost = MENUS[selectedMenu].price * guests;
    const drinkCost = DRINKS[selectedDrink].price * guests;
    cost += foodCost + drinkCost;

    // Suites
    if (includeBridal) cost += 450;
    if (includeHoneymoon) cost += 575;

    setTotal(cost);
  }, [guests, selectedMenu, selectedDrink, includeBridal, includeHoneymoon]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IE', { style: 'currency', currency: 'EUR' }).format(val);
  };

  return (
    <section className="w-full py-24 px-6 md:px-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-5xl mx-auto">
        <FadeIn className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest text-ozea-green uppercase mb-2 block">Bespoke Estimate</span>
          <h2 className="text-3xl font-light text-ozea-black">Wedding Calculator</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm">
            Create a custom estimate based on our à la carte offerings. <br className="hidden md:block"/>
            Please note this is a guide only; final pricing is confirmed upon consultation.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Controls */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 shadow-sm border border-gray-100 space-y-10">
            
            {/* Guest Count */}
            <div>
              <label className="block text-sm font-medium text-ozea-black uppercase tracking-wide mb-4">
                Guest Count: <span className="text-ozea-green text-lg ml-2">{guests}</span>
              </label>
              <input 
                type="range" 
                min="20" 
                max="150" 
                step="5"
                value={guests} 
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-ozea-green"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>20</span>
                <span>150</span>
              </div>
            </div>

            {/* Menus */}
            <div>
              <label className="block text-sm font-medium text-ozea-black uppercase tracking-wide mb-4">Dining Experience</label>
              <div className="grid grid-cols-1 gap-3">
                {MENUS.map((menu, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedMenu(idx)}
                    className={`text-left px-4 py-3 border transition-all duration-200 flex justify-between items-center ${selectedMenu === idx ? 'border-ozea-green bg-ozea-green/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <span className={`text-sm ${selectedMenu === idx ? 'text-ozea-black font-medium' : 'text-gray-600'}`}>{menu.name}</span>
                    <span className="text-sm text-gray-400">€{menu.price.toFixed(2)} pp</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div>
              <label className="block text-sm font-medium text-ozea-black uppercase tracking-wide mb-4">Beverage Collection</label>
              <div className="grid grid-cols-1 gap-3">
                {DRINKS.map((drink, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedDrink(idx)}
                    className={`text-left px-4 py-3 border transition-all duration-200 flex justify-between items-center ${selectedDrink === idx ? 'border-ozea-green bg-ozea-green/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                    <span className={`text-sm ${selectedDrink === idx ? 'text-ozea-black font-medium' : 'text-gray-600'}`}>{drink.name}</span>
                    <span className="text-sm text-gray-400">{drink.price === 0 ? '-' : `€${drink.price.toFixed(2)} pp`}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Suites */}
            <div>
              <label className="block text-sm font-medium text-ozea-black uppercase tracking-wide mb-4">Exclusive Suites</label>
              <div className="flex flex-col md:flex-row gap-4">
                {SUITES.map((suite, idx) => (
                  <button
                    key={idx}
                    onClick={() => suite.toggle(!suite.state)}
                    className={`flex-1 text-left px-4 py-4 border transition-all duration-200 flex justify-between items-center ${suite.state ? 'border-ozea-green bg-ozea-green/5' : 'border-gray-200 hover:border-gray-300'}`}
                  >
                     <div>
                        <span className={`block text-sm ${suite.state ? 'text-ozea-black font-medium' : 'text-gray-600'}`}>{suite.name}</span>
                        <span className="text-xs text-gray-400 mt-1 block">Flat Rate</span>
                     </div>
                    <span className={`text-sm ${suite.state ? 'text-ozea-green' : 'text-gray-400'}`}>
                        {suite.state ? 'Selected' : `+ €${suite.price}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-ozea-dark text-white p-8 md:p-10 sticky top-10">
                <h3 className="text-xl font-light mb-8">Estimated Summary</h3>
                
                <div className="space-y-4 text-sm font-light text-gray-300 border-b border-white/10 pb-8 mb-8">
                    <div className="flex justify-between">
                        <span>Venue Hire</span>
                        <span>{formatCurrency(VENUE_FEE)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                        <span>Dining ({guests} guests)</span>
                        <span>{formatCurrency(MENUS[selectedMenu].price * guests)}</span>
                    </div>

                    {selectedDrink > 0 && (
                         <div className="flex justify-between">
                            <span>Beverages ({guests} guests)</span>
                            <span>{formatCurrency(DRINKS[selectedDrink].price * guests)}</span>
                        </div>
                    )}

                    {includeBridal && (
                        <div className="flex justify-between">
                            <span>Bridal Lounge</span>
                            <span>€450.00</span>
                        </div>
                    )}

                    {includeHoneymoon && (
                         <div className="flex justify-between">
                            <span>Honeymoon Suite</span>
                            <span>€575.00</span>
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <p className="text-xs uppercase tracking-widest text-gray-400">Estimated Total</p>
                    <p className="text-4xl font-light text-white">{formatCurrency(total)}</p>
                    <p className="text-xs text-gray-500 mt-2 italic">Including VAT</p>
                </div>

                <button className="w-full mt-10 px-6 py-4 bg-white text-ozea-black uppercase tracking-widest text-xs font-bold hover:bg-gray-100 transition-colors">
                    Save This Estimate
                </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;