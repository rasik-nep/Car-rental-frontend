import { Metadata } from "next";
import dynamic from "next/dynamic";
import Features from "@/components/Sections/Features";
import Hero from "@/components/Sections/Hero";
import Loading from "@/components/Loading";
import { TEXT } from "@/constant/text";

// Lazy load heavy components with loading fallbacks
const VehicleFleet = dynamic(
  () => import("@/components/Sections/VehicleFleet"),
  {
    loading: () => <Loading />,
    ssr: true, // Enable SSR for SEO benefits
  }
);

const Testimonials = dynamic(
  () => import("@/components/Sections/Testimonials"),
  {
    loading: () => <Loading />,
    ssr: true, // Enable SSR for SEO benefits
  }
);

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
