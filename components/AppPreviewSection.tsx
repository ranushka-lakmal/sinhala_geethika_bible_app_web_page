import { PhonePreview } from "@/components/PhonePreview";
import { SectionHeading } from "@/components/SectionHeading";
import { previewScreens, siteConfig } from "@/lib/site";

export function AppPreviewSection() {
  return (
    <section id="preview" className="bg-[#f6f8ff] px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeading
          eyebrow="App Preview"
          title="Clean screens for reading, searching, and saving"
          description="The current mockups are ready placeholders for your real app screenshots. Add final screenshots to the public folder and update the paths in the site config."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {previewScreens.map((screen) => (
            <PhonePreview
              key={screen.key}
              title={screen.title}
              label={screen.label}
              accent={screen.accent}
              screenshot={siteConfig.screenshots[screen.key]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
