import {
  BookOpen,
  BookText,
  Heart,
  ListMusic,
  Quote,
  Search
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { features } from "@/lib/site";

const icons = [ListMusic, BookOpen, Quote, Heart, Search, BookText];
const tones = [
  "from-[#23356b] to-[#6d63c7]",
  "from-[#0f766e] to-[#5bb8a7]",
  "from-[#b7791f] to-[#f0c05d]",
  "from-[#b85b65] to-[#f1a08d]",
  "from-[#365a9c] to-[#72a7d9]",
  "from-[#5a3f91] to-[#c28cff]"
];

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeading
          eyebrow="App Features"
          title="Everything needed for Sinhala Christian devotion"
          description="A focused mobile experience for worship, reading, saving, and finding spiritual content in Sinhala, English, and Singlish."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={icons[index]}
              title={feature.title}
              description={feature.description}
              tone={tones[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
