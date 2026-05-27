import { AboutSection } from "@/components/AboutSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SeoContentSection } from "@/components/SeoContentSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SeoContentSection />
      <AppPreviewSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
