import { motion } from 'motion/react';
import { ArrowRight, Coffee } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2070" 
          alt="Cozy Cafe Interior" 
          className="w-full h-full object-cover brightness-50"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cafe-accent/20 text-cafe-cream border border-cafe-cream/20 backdrop-blur-md text-sm font-semibold mb-6">
              <Coffee className="w-4 h-4" />
              Best Coffee in Town
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
              Fresh, Warm Meals <br />
              <span className="text-cafe-accent italic">Made With Love</span>
            </h1>
            <p className="text-lg md:text-xl text-cafe-cream/90 mb-10 leading-relaxed">
              Your cozy spot for artisanal coffee, homemade breakfast, and the ultimate comfort food experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-cafe-accent text-cafe-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 shadow-xl group">
                View Our Menu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all">
                Our Story
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cafe-cream to-transparent"></div>
    </section>
  );
}
