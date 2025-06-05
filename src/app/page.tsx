import { Metadata } from "next";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import Testimonials from "@/components/Sections/Testimonials";
import VehicleFleet from "@/components/Sections/VehicleFleet";

export const metadata: Metadata = {
  title: "Shan Vehicle Rental - Premium Car Rental Services in Nepal",
  description:
    "Discover our premium car rental services in Nepal. Choose from a wide range of vehicles for your journey with competitive prices and excellent service.",
  keywords:
    "nepal car rental, nepal vehicle rental, premium cars nepal, car hire nepal, vehicle rental services",
};

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
