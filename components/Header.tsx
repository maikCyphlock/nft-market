"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ModeToggle } from '@/components/mode-toggle';
import { Search, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          NFT Market
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Input
              type="search"
              placeholder="Buscar NFTs..."
              className="pl-10 pr-4 py-2 w-64"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/explore" className="hover:text-primary">Explorar</Link></li>
              <li><Link href="/create" className="hover:text-primary">Crear</Link></li>
            </ul>
          </nav>
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <ModeToggle />
          <Button>Conectar Wallet</Button>
        </div>
      </div>
    </header>
  );
}