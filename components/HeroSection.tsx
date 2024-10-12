"use client"

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Descubre, colecciona y vende NFTs extraordinarios
        </h1>
        <p className="text-xl mb-8 text-muted-foreground">
          NFT Market es el primer y más grande marketplace de NFTs
        </p>
        <div className="flex justify-center space-x-4">
          <Button size="lg">Explorar</Button>
          <Button size="lg" variant="outline">Crear</Button>
        </div>
      </motion.div>
    </section>
  );
}