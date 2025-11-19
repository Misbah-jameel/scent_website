import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#c19e66]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#c19e66] mb-4">RAWAHA</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Premium quality fragrances inspired by luxury brands. Experience elegance and sophistication at affordable prices.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-[#c19e66] hover:bg-gray-800 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-[#c19e66] hover:bg-gray-800 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-900 rounded-full text-gray-400 hover:text-[#c19e66] hover:bg-gray-800 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Shop All</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Bundle Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Corporate Orders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#c19e66] text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[#c19e66]" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={16} className="flex-shrink-0 text-[#c19e66]" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={16} className="flex-shrink-0 text-[#c19e66]" />
                <span>info@rawaha.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2024 RAWAHA. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 hover:text-[#c19e66] text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-[#c19e66] text-sm transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
