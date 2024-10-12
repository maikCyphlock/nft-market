import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">NFT Market</h3>
            <p className="text-sm text-muted-foreground">Descubre, compra y vende NFTs únicos en nuestra plataforma.</p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2">
              <li><Link href="/explore" className="text-sm hover:text-primary">Explorar</Link></li>
              <li><Link href="/create" className="text-sm hover:text-primary">Crear</Link></li>
              <li><Link href="/blog" className="text-sm hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-primary">Discord</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Twitter</a></li>
              <li><a href="#" className="text-sm hover:text-primary">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-sm hover:text-primary">FAQ</Link></li>
              <li><Link href="/help" className="text-sm hover:text-primary">Ayuda</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary">Términos de servicio</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2023 NFT Market. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}