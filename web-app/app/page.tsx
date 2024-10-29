import Bento from "@/components/Bento Section/bento";
import MedicalList from "@/components/Medical Field Section/medicalList";
import HeroSection from "@/components/Hero Section/heroSection";
import LiteratureCarousel from "@/components/Infinite Carousel/literatureCarousel";
import DemoSection from "@/components/Demo Section/demoSection";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <HeroSection />
      <LiteratureCarousel />
      <Bento />
      <MedicalList />
      {/* <DemoSection/> */}
    </section>
  );
}
