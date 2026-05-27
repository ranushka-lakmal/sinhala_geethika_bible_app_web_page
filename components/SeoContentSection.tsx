import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const keywordGroups = [
  "Geethika, Sinhala Geethika, Sinhala Christian Songs, Sinhala Hymns",
  "Bible Verses Sinhala, Bible Quotes Sinhala, Christian Lyrics Sinhala",
  "ගීතිකා, සිංහල ගීතිකා, බයිබල් පද, දේව වචනය, ක්‍රිස්තියානි ගීතිකා"
];

export function SeoContentSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="rounded-lg bg-[#101828] p-6 text-white shadow-[0_30px_90px_rgba(16,24,40,0.24)] sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <SectionHeading
              eyebrow="Search Visibility"
              title="Built for Sinhala, English, and Singlish discovery"
              description="This website includes natural SEO content so people searching for Sinhala Christian hymns, Bible verses, Christian lyrics, and daily spiritual encouragement can understand what the app offers."
              align="left"
              tone="dark"
            />

            <div className="grid gap-3">
              {keywordGroups.map((group) => (
                <div
                  key={group}
                  className="flex gap-3 rounded-lg border border-white/12 bg-white/8 p-4 text-sm leading-7 text-slate-100"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-[#f3c56d]"
                    aria-hidden="true"
                  />
                  <span>{group}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
