import { motion } from 'motion/react';
import { Coffee, Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-cafe-cream/90 backdrop-blur-sm border-b border-cafe-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <Coffee className="text-cafe-brown w-8 h-8" />
            <span className="font-serif text-2xl font-bold text-cafe-dark">Warm Café</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-cafe-dark/80 hover:text-cafe-brown font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-cafe-brown text-white px-6 py-2 rounded-full font-semibold hover:bg-cafe-dark transition-all shadow-md">
              Book a Table
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-cafe-dark p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cafe-cream border-b border-cafe-brown/10 px-4 pt-2 pb-6 space-y-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-cafe-dark/80 hover:text-cafe-brown font-medium"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-cafe-brown text-white px-6 py-3 rounded-full font-semibold mt-4">
            Book a Table
          </button>
        </motion.div>
      )}
    </nav>
  );
}
