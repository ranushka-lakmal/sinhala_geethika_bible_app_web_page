import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#101828] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-sinhala text-xl font-semibold">
            {siteConfig.appNameSinhala}
          </p>
          <p className="mt-2 text-sm text-slate-300">
            {siteConfig.appNameEnglish} | {siteConfig.appNameSinglish}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-200"
        >
          <a href={siteConfig.playStoreUrl} className="hover:text-[#f3c56d]">
            Google Play
          </a>
          <a
            href={siteConfig.privacyPolicyUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#f3c56d]"
          >
            Privacy Policy
          </a>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="inline-flex items-center gap-2 hover:text-[#f3c56d]"
          >
            <Mail className="size-4" aria-hidden="true" />
            {siteConfig.supportEmail}
          </a>
        </nav>
      </div>

      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
        <p>
          © {new Date().getFullYear()} {siteConfig.appNameEnglish}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
