
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: string;
  description?: string;
}

const menuItems: MenuItem[] = [
  { id: '1', name: 'Espresso', price: '$3.50', category: 'Coffee', description: 'Rich and bold shot of pure coffee' },
  { id: '2', name: 'Cappuccino', price: '$4.50', category: 'Coffee', description: 'Perfect balance of espresso, steamed milk, and foam' },
  { id: '3', name: 'Latte', price: '$5.00', category: 'Coffee', description: 'Smooth espresso with steamed milk and light foam' },
  { id: '4', name: 'Americano', price: '$3.75', category: 'Coffee', description: 'Espresso with hot water for a clean taste' },
  { id: '5', name: 'Matcha Latte', price: '$5.50', category: 'Non-Coffee', description: 'Premium matcha powder with steamed milk' },
  { id: '6', name: 'Chai Tea Latte', price: '$4.75', category: 'Non-Coffee', description: 'Aromatic spiced tea with steamed milk' },
  { id: '7', name: 'Hot Chocolate', price: '$4.25', category: 'Non-Coffee', description: 'Rich Belgian chocolate with whipped cream' },
  { id: '8', name: 'Croissant', price: '$3.25', category: 'Snacks', description: 'Fresh baked buttery pastry' },
  { id: '9', name: 'Avocado Toast', price: '$8.50', category: 'Snacks', description: 'Smashed avocado on artisan bread with seeds' },
  { id: '10', name: 'Blueberry Muffin', price: '$4.00', category: 'Snacks', description: 'House-made muffin with fresh blueberries' },
];

const categories = ['All', 'Coffee', 'Non-Coffee', 'Snacks'];

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-cafe-brown mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully crafted beverages and snacks made with love and the finest ingredients
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cafe-brown text-white'
                  : 'border-cafe-brown text-cafe-brown hover:bg-cafe-brown hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card 
              key={item.id} 
              className="hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-cafe-cream"
            >
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span className="text-cafe-brown">{item.name}</span>
                  <span className="text-lg font-bold text-cafe-brown">{item.price}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{item.description}</p>
                <div className="mt-4">
                  <span className="inline-block bg-cafe-warm text-cafe-brown px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
