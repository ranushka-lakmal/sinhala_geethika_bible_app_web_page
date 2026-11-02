import { AboutSection } from "@/components/AboutSection";
import { AppPreviewSection } from "@/components/AppPreviewSection";
import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SeoContentSection } from "@/components/SeoContentSection";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MobileApplication",
            name: "Sinhala Hymns and Bible Quotes",
            alternateName: siteConfig.appNameSinhala,
            operatingSystem: "Android",
            applicationCategory: "ReferenceApplication",
            url: siteConfig.siteUrl,
            installUrl: siteConfig.playStoreUrl
          }).replace(/</g, "\\u003c")
        }}
      />
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
