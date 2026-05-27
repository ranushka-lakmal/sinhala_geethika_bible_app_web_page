import { ExternalLink, Play } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function PlayStoreButton() {
  return (
    <a
      href={siteConfig.playStoreUrl}
      className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-4 py-2 text-left text-[#172033] shadow-[0_18px_48px_rgba(6,12,28,0.28)] transition hover:-translate-y-0.5 hover:bg-[#fff8e8] focus:outline-none focus:ring-4 focus:ring-[#f3c56d]/45"
      aria-label="Download Geethika Bible Verses from Google Play"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#172033] text-white">
        <Play className="size-5 fill-current" aria-hidden="true" />
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
          Download on
        </span>
        <span className="text-base font-semibold text-[#172033]">
          Google Play
        </span>
      </span>
      <ExternalLink
        className="size-4 text-[#c68c2c] transition group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
