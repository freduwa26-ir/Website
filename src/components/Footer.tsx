import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-cafe-dark text-cafe-cream py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="text-cafe-accent w-8 h-8" />
              <span className="font-serif text-2xl font-bold">Warm Café</span>
            </div>
            <p className="text-cafe-cream/60 leading-relaxed">
              Serving happiness in every cup since 2015. Your home away from home.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-cafe-cream/60">
              <li><a href="#home" className="hover:text-cafe-accent transition-colors">Home</a></li>
              <li><a href="#menu" className="hover:text-cafe-accent transition-colors">Menu</a></li>
              <li><a href="#about" className="hover:text-cafe-accent transition-colors">Our Story</a></li>
              <li><a href="#contact" className="hover:text-cafe-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Legal</h4>
            <ul className="space-y-4 text-cafe-cream/60">
              <li><a href="#" className="hover:text-cafe-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cafe-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-cafe-accent transition-colors">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-accent hover:text-cafe-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-accent hover:text-cafe-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cafe-accent hover:text-cafe-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-cafe-cream/40 text-sm">
          <p>© {new Date().getFullYear()} Warm Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
