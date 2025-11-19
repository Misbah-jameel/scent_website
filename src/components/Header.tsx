import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/95 backdrop-blur-sm sticky top-0 z-50 border-b border-[#c19e66]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#c19e66]">RAWAHA</span>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Shop By</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Inspire By Brands</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Bundle Deals</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Candles</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Corporate Orders</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-300 hover:text-[#c19e66] transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-300 hover:text-[#c19e66] transition-colors">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-300 hover:text-[#c19e66] transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-[#c19e66] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            </button>
            <button
              className="md:hidden p-2 text-gray-300 hover:text-[#c19e66] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#c19e66]/20">
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Shop By</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Inspire By Brands</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Bundle Deals</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Candles</a>
              <a href="#" className="text-gray-300 hover:text-[#c19e66] transition-colors text-sm font-medium">Corporate Orders</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
