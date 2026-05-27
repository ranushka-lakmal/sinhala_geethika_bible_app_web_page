import { BookMarked, Music2, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const points = [
  {
    icon: Music2,
    text: "Read Sinhala hymns and Christian song lyrics during worship, prayer, or personal quiet time."
  },
  {
    icon: BookMarked,
    text: "Keep Bible verses, daily Bible quotes, and inspirational Christian content available anytime."
  },
  {
    icon: ShieldCheck,
    text: "Designed as a trustworthy Google Play support website with clear contact and privacy links."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white/72 px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionHeading
          eyebrow="About The App"
          title="Created for Sinhala-speaking Christians"
          description="Geethika Bible Verses helps Sinhala-speaking Christians read hymns, Bible verses, and inspirational Christian content anytime, whether at home, church, or on the go."
          align="left"
        />

        <div className="grid gap-4">
          {points.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="glass-panel flex gap-4 rounded-lg p-5"
            >
              <div className="grid size-11 shrink-0 place-items-center rounded-lg bg-[#14213d] text-[#f3c56d]">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <p className="leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
