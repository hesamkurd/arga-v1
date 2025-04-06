import BestProduct from "@/components/bestproduct";
import HeroSection from "@/components/herosection";
import ServiceSection from "@/components/servicesection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <BestProduct />
    </div>
  );
}
