import { motion } from 'motion/react';
import { useState } from 'react';

const menuData = {
  Breakfast: [
    { name: 'Classic Avocado Toast', price: '$12', desc: 'Sourdough, smashed avocado, chili flakes, poached egg.', tag: 'Popular' },
    { name: 'Fluffy Pancake Stack', price: '$10', desc: 'Maple syrup, fresh berries, whipped butter.', tag: 'Sweet' },
    { name: 'Garden Omelette', price: '$11', desc: 'Three eggs, spinach, mushrooms, goat cheese.', tag: 'Healthy' },
  ],
  Lunch: [
    { name: 'Truffle Mushroom Pasta', price: '$16', desc: 'Creamy wild mushroom sauce, parmesan, truffle oil.', tag: 'Chef Choice' },
    { name: 'Warm Quinoa Bowl', price: '$14', desc: 'Roasted veggies, chickpeas, tahini dressing.', tag: 'Vegan' },
    { name: 'Artisan Beef Burger', price: '$15', desc: 'Brioche bun, caramelized onions, secret sauce.', tag: 'Bestseller' },
  ],
  Drinks: [
    { name: 'Signature Latte', price: '$5', desc: 'Double shot espresso, silky steamed milk.', tag: 'Classic' },
    { name: 'Matcha Green Tea', price: '$6', desc: 'Ceremonial grade matcha, honey, oat milk.', tag: 'Healthy' },
    { name: 'Cold Brew', price: '$4.5', desc: '12-hour slow steeped, smooth and bold.', tag: 'Chilled' },
  ],
  Desserts: [
    { name: 'Warm Apple Crumble', price: '$8', desc: 'Cinnamon apples, oat topping, vanilla gelato.', tag: 'Warm' },
    { name: 'Dark Chocolate Brownie', price: '$7', desc: 'Fudgy center, sea salt, walnuts.', tag: 'Rich' },
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('Breakfast');

  return (
    <section id="menu" className="py-24 bg-cafe-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-cafe-dark mb-4">Our Curated Menu</h2>
          <p className="text-cafe-brown font-medium max-w-2xl mx-auto">
            Handcrafted with locally sourced ingredients and a whole lot of passion.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeCategory === category 
                ? 'bg-cafe-brown text-white shadow-lg scale-105' 
                : 'bg-white text-cafe-dark hover:bg-cafe-accent/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {menuData[activeCategory as keyof typeof menuData].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-cafe-brown/5 flex justify-between items-start group">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-xl font-bold text-cafe-dark group-hover:text-cafe-brown transition-colors">{item.name}</h3>
                  {item.tag && (
                    <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 bg-cafe-accent/10 text-cafe-accent rounded">
                      {item.tag}
                    </span>
                  )}
                </div>
                <p className="text-cafe-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-xl font-serif font-bold text-cafe-brown ml-4">{item.price}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <button className="text-cafe-brown font-bold border-b-2 border-cafe-brown pb-1 hover:text-cafe-dark hover:border-cafe-dark transition-all">
            Download Full PDF Menu
          </button>
        </div>
      </div>
    </section>
  );
}
