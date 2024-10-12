'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const featuredNFTs = [
  {
    id: 1,
    title: 'Cosmic Voyage',
    artist: 'Stella Nova',
    price: '0.5 ETH',
    image:
      'https://unsplash.com/photos/rShyQVvTOBc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZGlnaXRhbCUyMGFydHxlc3wwfHx8fDE3Mjg3NjYyNDJ8MA&force=true&w=640',
  },
  {
    id: 2,
    title: 'Digital Dreams',
    artist: 'Pixel Master',
    price: '0.8 ETH',
    image:
      'https://unsplash.com/photos/fhrWAh2HMnM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjN8fGRpZ2l0YWwlMjBhcnR8ZXN8MHx8fHwxNzI4NzY2MzM1fDA&force=true&w=640',
  },
  {
    id: 3,
    title: "Nature's Whisper",
    artist: 'Eco Artist',
    price: '0.3 ETH',
    image:
      'https://unsplash.com/photos/VYaB7HdEUWc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NTR8fGRpZ2l0YWwlMjBhcnR8ZXN8MHx8fHwxNzI4NzY2MzI0fDA&force=true&w=640',
  },
  {
    id: 4,
    title: 'Abstract Thoughts',
    artist: 'Mind Painter',
    price: '1.2 ETH',
    image:
      'https://unsplash.com/photos/zoiROwz_2IU/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzJ8fGRpZ2l0YWwlMjBhcnR8ZXN8MHx8fHwxNzI4NzY2MzM1fDA&force=true&w=640',
  },
];

export default function FeaturedNFTs() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">NFTs destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredNFTs.map((nft) => (
          <motion.div
            key={nft.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredId(nft.id)}
            onHoverEnd={() => setHoveredId(null)}
          >
            <Card className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={nft.image}
                  alt={nft.title}
                  className="w-full h-48 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{nft.title}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  por {nft.artist}
                </p>
              </CardContent>
              <CardFooter className="p-4 flex justify-between items-center">
                <span className="font-bold">{nft.price}</span>
                <Button variant={hoveredId === nft.id ? 'default' : 'outline'}>
                  {hoveredId === nft.id ? 'Comprar ahora' : 'Ver detalles'}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
