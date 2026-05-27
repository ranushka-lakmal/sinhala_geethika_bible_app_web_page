import { Mail, ShieldCheck } from "lucide-react";
import { PlayStoreButton } from "@/components/PlayStoreButton";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="support" className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg bg-gradient-to-br from-[#101828] via-[#172247] to-[#4b3275] p-6 text-white shadow-[0_30px_90px_rgba(16,24,40,0.24)] sm:p-8 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:p-10">
          <SectionHeading
            eyebrow="Contact & Support"
            title="Support for Google Play users"
            description="For app questions, support requests, privacy policy updates, or Google Play review information, use the support contact below."
            align="left"
            tone="dark"
          />

          <div className="rounded-lg border border-white/16 bg-white/10 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid size-11 place-items-center rounded-lg bg-[#f3c56d] text-[#101828]">
                <Mail className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#ffe5aa]">
                  Email
                </p>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="break-all text-lg font-semibold text-white hover:text-[#ffe5aa]"
                >
                  {siteConfig.supportEmail}
                </a>
              </div>
            </div>

            <div className="my-6 h-px bg-white/14" />

            <div className="flex gap-3 text-sm leading-6 text-slate-100">
              <ShieldCheck
                className="mt-0.5 size-5 shrink-0 text-[#f3c56d]"
                aria-hidden="true"
              />
              <p>
                Keep this support email and privacy policy link consistent with
                your Google Play Store listing.
              </p>
            </div>

            <div className="mt-6">
              <PlayStoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
