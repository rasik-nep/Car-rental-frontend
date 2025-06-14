import { Metadata } from "next";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import Testimonials from "@/components/Sections/Testimonials";
import VehicleFleet from "@/components/Sections/VehicleFleet";
import { TEXT } from "@/constant/text";

export const metadata: Metadata = {
  title: TEXT.meta.home.title,
  description: TEXT.meta.home.description,
  keywords: TEXT.meta.home.keywords,
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
