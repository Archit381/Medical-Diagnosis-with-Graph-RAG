import HeroSection from "@/components/Hero Section/heroSection";
import LiteratureCarousel from "@/components/Infinite Carousel/literatureCarousel";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection />
      <LiteratureCarousel/>
    </section>
  );
}
