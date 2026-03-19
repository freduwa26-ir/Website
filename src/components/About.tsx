import { motion } from 'motion/react';
import { Heart, Leaf, Users } from 'lucide-react';

export default function About() {
  const values = [
    { icon: <Heart className="w-6 h-6" />, title: "Made with Love", desc: "Every dish is prepared with care and attention to detail." },
    { icon: <Leaf className="w-6 h-6" />, title: "Fresh Ingredients", desc: "We source our produce daily from local organic farmers." },
    { icon: <Users className="w-6 h-6" />, title: "Community First", desc: "A welcoming space for everyone to connect and relax." }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
                alt="Cafe Ambiance" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cafe-accent/20 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-cafe-brown/10 rounded-full blur-2xl -z-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-cafe-accent font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-dark mb-8 leading-tight">
              A Cozy Corner for <br />
              <span className="text-cafe-brown italic">Coffee Lovers</span>
            </h2>
            <p className="text-cafe-dark/70 text-lg mb-10 leading-relaxed">
              Founded in 2015, Warm Café started as a small dream to bring people together over a perfect cup of coffee. Today, we're a beloved local spot known for our warm atmosphere and homemade comfort food.
            </p>

            <div className="space-y-8">
              {values.map((value, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cafe-cream flex items-center justify-center text-cafe-brown">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-cafe-dark mb-1">{value.title}</h4>
                    <p className="text-cafe-dark/60 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
