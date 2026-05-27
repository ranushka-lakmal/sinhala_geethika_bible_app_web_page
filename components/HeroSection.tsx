import Image from "next/image";
import { BookOpen, Heart, Search, Sparkles } from "lucide-react";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { siteConfig } from "@/lib/site";

const highlights = [
  { label: "Sinhala Hymns", icon: BookOpen },
  { label: "Daily Bible Quotes", icon: Sparkles },
  { label: "Favourites", icon: Heart },
  { label: "Singlish Search", icon: Search }
];

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#090e24] px-4 pb-24 pt-28 text-white sm:px-6 sm:pt-32 lg:px-8 lg:pb-28">
      <Image
        src={siteConfig.heroImage}
        alt="Modern app mockup for Geethika Bible Verses"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,31,0.94)_0%,rgba(9,14,36,0.82)_34%,rgba(9,14,36,0.36)_66%,rgba(9,14,36,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(245,190,99,0.30),transparent_26rem),radial-gradient(circle_at_78%_52%,rgba(126,101,235,0.22),transparent_24rem)]" />

      <div className="section-shell relative z-10">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-medium text-[#ffe5aa] backdrop-blur-md">
            <Sparkles className="size-4" aria-hidden="true" />
            {siteConfig.appNameEnglish}
          </p>
          <h1 className="mt-7 font-sinhala text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
            {siteConfig.appNameSinhala}
          </h1>
          <p className="mt-5 max-w-2xl text-xl font-semibold leading-8 text-[#fff0c9] sm:text-2xl">
            Sinhala Christian Hymns, Bible Verses & Daily Spiritual
            Encouragement
          </p>
          <div className="mt-6 grid gap-4 text-base leading-8 text-slate-100 sm:text-lg">
            <p className="font-sinhala">
              සිංහල ක්‍රිස්තියානි ගීතිකා, බයිබල් පද, දිනපතා දේව
              වචනය සහ ආත්මික දිරිගැන්වීම් එකම තැනක කියවීමට සහ
              සුරැකීමට පහසු ජංගම යෙදුමක්.
            </p>
            <p>
              Geethika Bible Verses brings Sinhala hymns, Christian song
              lyrics, Bible verses, daily Bible quotes, favourites, and quick
              search into a peaceful reading experience.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <PlayStoreButton />
            <a
              href="#features"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/22 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16 focus:outline-none focus:ring-4 focus:ring-white/25"
            >
              Explore features
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-lg border border-white/14 bg-white/10 p-3 text-sm font-medium text-white/92 backdrop-blur-md"
              >
                <Icon className="mb-2 size-5 text-[#f3c56d]" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#fffaf3] to-transparent" />
    </section>
  );
}
