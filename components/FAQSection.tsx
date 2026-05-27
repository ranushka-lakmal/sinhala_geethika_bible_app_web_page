import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { faqs } from "@/lib/site";

export function FAQSection() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="section-shell">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions from new users"
          description="Helpful answers for users visiting from Google Play, search results, or shared app links."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group glass-panel rounded-lg p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-[#14213d]">
                {faq.question}
                <ChevronDown
                  className="size-5 shrink-0 text-[#c68c2c] transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
