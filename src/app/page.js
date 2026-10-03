import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import FleetSection from "@/components/home/FleetSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ToursSection from "@/components/home/ToursSection";
import HowItWorks from "@/components/home/HowItWorks";
import ReviewsSection from "@/components/home/ReviewsSection";
import FAQSection from "@/components/home/FAQSection";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <FleetSection />
      <ServicesSection />
      <WhyChooseUs />

      <ToursSection />
      <HowItWorks />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />

      <Footer />
    </main>
  );
}
