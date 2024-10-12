'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const topSellers = [
  {
    id: 1,
    name: 'CryptoKing',
    sales: '532 ETH',
    avatar:
      'https://unsplash.com/photos/TjP27UtuZJ8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NzZ8fGRpZ2l0YWwlMjBhcnR8ZXN8MHx8fHwxNzI4NzY2MzM1fDA&force=true&w=640',
  },
  {
    id: 2,
    name: 'PixelQueen',
    sales: '489 ETH',
    avatar:
      'https://unsplash.com/photos/qqbXgiOAWyE/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8OTl8fGRpZ2l0YWwlMjBhcnR8ZXN8MHx8fHwxNzI4NzY2NDk5fDA&force=true&w=640',
  },
  {
    id: 3,
    name: 'NFTMaster',
    sales: '412 ETH',
    avatar:
      'https://unsplash.com/photos/lkkcYXJwv-A/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTE1fHxkaWdpdGFsJTIwYXJ0fGVzfDB8fHx8MTcyODc2NjUzMHww&force=true&w=640',
  },
  {
    id: 4,
    name: 'ArtisticSoul',
    sales: '378 ETH',
    avatar:
      'https://unsplash.com/photos/Ttg3uVz3g80/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTQzfHxkaWdpdGFsJTIwYXJ0fGVzfDB8fHx8MTcyODc2NjU4Mnww&force=true&w=640',
  },
  {
    id: 5,
    name: 'DigitalDreamer',
    sales: '345 ETH',
    avatar:
      'https://unsplash.com/photos/tuBkt3xfFqM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTc1fHxkaWdpdGFsJTIwYXJ0fGVzfDB8fHx8MTcyODc2NjY1MXww&force=true&w=640',
  },
];

export default function TopSellers() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Top Vendedores</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topSellers.map((seller, index) => (
          <motion.div
            key={seller.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="flex items-center space-x-4 p-4 bg-card rounded-lg">
              <Avatar className="h-12 w-12">
                <AvatarImage src={seller.avatar} alt={seller.name} />
                <AvatarFallback>{seller.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h3 className="font-semibold">{seller.name}</h3>
                <p className="text-sm text-muted-foreground">
                  Ventas: {seller.sales}
                </p>
              </div>
              <Button variant="outline" size="sm">
                Seguir
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
