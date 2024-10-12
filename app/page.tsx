import HeroSection from '@/components/HeroSection';
import FeaturedNFTs from '@/components/FeaturedNFTs';
import Categories from '@/components/Categories';
import TopSellers from '@/components/TopSellers';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <FeaturedNFTs />
      <Categories />
      <TopSellers />
    </div>
  );
}