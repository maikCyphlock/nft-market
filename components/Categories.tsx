"use client"

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const categories = [
  { name: 'Arte', icon: '🎨' },
  { name: 'Música', icon: '🎵' },
  { name: 'Fotografía', icon: '📷' },
  { name: 'Deportes', icon: '⚽' },
  { name: 'Coleccionables', icon: '🏆' },
  { name: 'Trading Cards', icon: '🃏' },
  { name: 'Dominio', icon: '🌐' },
  { name: 'Virtual Worlds', icon: '🌍' },
];

export default function Categories() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Explora por categorías</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Button
              variant="outline"
              className="w-full h-24 text-lg flex flex-col items-center justify-center space-y-2"
            >
              <span className="text-2xl">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}