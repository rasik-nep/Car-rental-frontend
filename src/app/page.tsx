import Features from "@/components/Views/Features";
import Hero from "@/components/Views/Hero";
import Testimonials from "@/components/Views/Testimonials";
import VehicleFleet from "@/components/Views/VehicleFleet";

export default function Home() {
  return (
    <div>
      <Hero />
      <VehicleFleet />
      <Features />
      <Testimonials />
    </div>
  );
}
