import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cafe-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-dark mb-8">Visit Us</h2>
            <p className="text-cafe-dark/70 mb-12 text-lg">
              We're located in the heart of the city. Stop by for a coffee or reach out for reservations and catering.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-cafe-brown shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-dark">Location</h4>
                  <p className="text-cafe-dark/60">123 Cozy Street, Coffee District<br />Dar es Salaam, Tanzania</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-cafe-brown shadow-sm">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-dark">Opening Hours</h4>
                  <p className="text-cafe-dark/60">Mon - Fri: 7:00 AM - 8:00 PM<br />Sat - Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-cafe-brown shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-cafe-dark">Contact</h4>
                  <p className="text-cafe-dark/60">+255 123 456 789<br />hello@warmcafe.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a 
                href="https://wa.me/255123456789" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-cafe-brown/5"
          >
            <h3 className="text-2xl font-serif font-bold text-cafe-dark mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-cafe-dark mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-cafe-cream/50 border border-cafe-brown/10 focus:border-cafe-brown outline-none transition-all" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-cafe-dark mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl bg-cafe-cream/50 border border-cafe-brown/10 focus:border-cafe-brown outline-none transition-all" placeholder="Email Address" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-cafe-dark mb-2">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl bg-cafe-cream/50 border border-cafe-brown/10 focus:border-cafe-brown outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Reservation</option>
                  <option>Catering</option>
                  <option>Feedback</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-cafe-dark mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-cafe-cream/50 border border-cafe-brown/10 focus:border-cafe-brown outline-none transition-all" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full bg-cafe-brown text-white py-4 rounded-xl font-bold text-lg hover:bg-cafe-dark transition-all shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
