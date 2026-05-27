import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.appNameEnglish}`,
  description:
    "Privacy Policy for Geethika Bible Verses, a Sinhala Christian hymns and Bible verses Android app.",
  alternates: {
    canonical: "/privacy"
  },
  robots: {
    index: true,
    follow: true
  }
};

const policySections = [
  {
    title: "1. Information We Collect",
    body: [
      "The app is designed to provide Sinhala Christian hymns, Bible verses, daily Bible quotes, favourite saving, search, and spiritual encouragement content.",
      "Based on the current app purpose, we do not require users to create an account, and we do not intentionally collect personal information such as name, phone number, email address, precise location, contacts, photos, payment information, or government identification.",
      "Favourite hymns, favourite Bible verses, reading preferences, and similar app settings may be stored locally on your device so the app can provide its core features. This local app data is not sent to our own server by us."
    ]
  },
  {
    title: "2. How We Use Information",
    body: [
      "Locally stored app data is used only to operate app features, such as saving favourites, improving navigation, and keeping a simple reading experience.",
      "If you contact us by email for support, we will use the information you provide only to respond to your request, troubleshoot issues, and maintain app support records."
    ]
  },
  {
    title: "3. Data Sharing",
    body: [
      "We do not sell, rent, or trade users' personal information.",
      "We do not share personal information with third parties for advertising or marketing purposes.",
      "Google Play may process information related to app downloads, updates, reviews, crash reports, or Play Store activity under Google's own policies and settings."
    ]
  },
  {
    title: "4. Third-Party Services and SDKs",
    body: [
      "This policy is written for the app as a simple Sinhala Christian content and reading app without user accounts, payment processing, advertising networks, or analytics SDKs that collect personal data.",
      "If a future version adds services such as advertising, analytics, crash reporting, cloud sync, push notifications, or external content services, this Privacy Policy and the Google Play Data safety form should be updated before that version is published."
    ]
  },
  {
    title: "5. Data Security",
    body: [
      "We use reasonable care to keep the app simple and limit data handling to what is needed for the app's features.",
      "No method of electronic storage or transmission is completely secure. You should avoid sending sensitive personal information through support email unless it is necessary for your request."
    ]
  },
  {
    title: "6. Data Retention and Deletion",
    body: [
      "Local favourites and preferences remain on your device until you delete them in the app, clear app data, or uninstall the app.",
      "Support emails may be retained only as long as reasonably needed to respond to your request, maintain support history, and meet legal or security obligations.",
      "To request deletion of support communications you sent to us, contact us at the email address below."
    ]
  },
  {
    title: "7. Children's Privacy",
    body: [
      "The app provides Christian hymns, Bible verses, and spiritual content. We do not knowingly collect personal information from children.",
      "If you believe a child has provided personal information through support contact, please email us and we will take reasonable steps to delete it."
    ]
  },
  {
    title: "8. Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy when the app changes or when legal, Google Play, or operational requirements change.",
      "The updated policy will be posted on this page with a new last updated date."
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fffaf3] text-[#14213d]">
      <section className="relative overflow-hidden bg-[#101828] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(243,197,109,0.28),transparent_24rem),radial-gradient(circle_at_80%_30%,rgba(126,101,235,0.22),transparent_24rem)]" />
        <div className="section-shell relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-sm font-semibold text-[#ffe5aa] backdrop-blur-md transition hover:bg-white/16"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to website
          </Link>
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3c56d]">
              Google Play Support
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-5 font-sinhala text-2xl font-semibold text-[#ffe5aa]">
              {siteConfig.appNameSinhala}
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
              This Privacy Policy explains how {siteConfig.appNameEnglish}{" "}
              handles information for the Android app that provides Sinhala
              Christian hymns, Bible verses, daily Bible quotes, favourites,
              search, and spiritual encouragement content.
            </p>
            <p className="mt-5 text-sm text-slate-300">
              Last updated: May 27, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="section-shell">
          <article className="glass-panel rounded-lg p-6 sm:p-8 lg:p-10">
            <div className="rounded-lg border border-[#f3c56d]/35 bg-[#fff8e8] p-5">
              <div className="flex gap-3">
                <ShieldCheck
                  className="mt-1 size-5 shrink-0 text-[#a46d19]"
                  aria-hidden="true"
                />
                <p className="leading-7 text-slate-700">
                  This policy is prepared for Google Play publication for a
                  simple content app. If the Android app later adds ads,
                  analytics, crash reporting, accounts, cloud sync, push
                  notifications, or other SDKs that collect data, update this
                  page and the Play Console Data safety form before publishing
                  that version.
                </p>
              </div>
            </div>

            <div className="mt-9 space-y-9">
              {policySections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-semibold text-[#14213d]">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section>
                <h2 className="text-2xl font-semibold text-[#14213d]">
                  9. Contact Us
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  If you have questions about this Privacy Policy, app data
                  handling, or deletion requests for support emails, contact us:
                </p>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="mt-4 inline-flex items-center gap-3 rounded-full bg-[#101828] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#26324f]"
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.supportEmail}
                </a>
              </section>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
