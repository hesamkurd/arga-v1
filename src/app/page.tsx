import BestProduct from "@/components/bestproduct";
import HeroSection from "@/components/herosection";
import ServiceSection from "@/components/servicesection";
import Slider from "@/components/slider";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <BestProduct />
      <Slider />
    </div>
  );
}
