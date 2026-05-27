import Image from "next/image";
import { BookOpen, Heart, Home, ListMusic, Search } from "lucide-react";

type PhonePreviewProps = {
  title: string;
  label: string;
  accent: string;
  screenshot: string | null;
};

export function PhonePreview({
  title,
  label,
  accent,
  screenshot
}: PhonePreviewProps) {
  return (
    <article className="glass-panel rounded-lg p-5">
      <div className="mx-auto w-full max-w-[15rem]">
        <div className="relative aspect-[9/18.8] rounded-[2rem] bg-[#0c1228] p-2 shadow-[0_22px_50px_rgba(15,23,42,0.24)]">
          <div className="absolute left-1/2 top-3 z-20 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/55" />
          <div className="relative h-full overflow-hidden rounded-[1.55rem] bg-[#f8fbff]">
            {screenshot ? (
              <Image
                src={screenshot}
                alt={`${title} screenshot`}
                fill
                sizes="240px"
                className="object-cover"
              />
            ) : (
              <MockScreen label={label} accent={accent} />
            )}
          </div>
        </div>
      </div>
      <h3 className="mt-5 text-center text-lg font-semibold text-[#14213d]">
        {title}
      </h3>
      <p className="mt-2 text-center text-sm leading-6 text-slate-600">
        {label}
      </p>
    </article>
  );
}

function MockScreen({
  label,
  accent
}: Pick<PhonePreviewProps, "label" | "accent">) {
  return (
    <div className="flex h-full flex-col bg-[#f7f9ff]">
      <div className={`bg-gradient-to-br ${accent} px-4 pb-5 pt-8 text-[#111827]`}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
          {label}
        </p>
        <h4 className="mt-2 font-sinhala text-xl font-bold leading-7">
          ගීතිකා සහ බයිබල් පද
        </h4>
      </div>

      <div className="flex-1 space-y-3 px-4 py-4">
        <div className="flex items-center gap-2 rounded-lg bg-white p-3 shadow-sm">
          <Search className="size-4 text-slate-400" aria-hidden="true" />
          <span className="h-2 flex-1 rounded-full bg-slate-200" />
        </div>
        <div className="rounded-lg bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <BookOpen className="size-5 text-[#c68c2c]" aria-hidden="true" />
            <Heart className="size-4 text-[#d16b75]" aria-hidden="true" />
          </div>
          <p className="mt-4 h-2 w-2/3 rounded-full bg-slate-300" />
          <p className="mt-2 h-2 rounded-full bg-slate-200" />
          <p className="mt-2 h-2 w-4/5 rounded-full bg-slate-200" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="rounded-lg bg-white p-3 shadow-sm">
              <ListMusic
                className="size-4 text-[#365a9c]"
                aria-hidden="true"
              />
              <p className="mt-4 h-2 rounded-full bg-slate-200" />
              <p className="mt-2 h-2 w-2/3 rounded-full bg-slate-100" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 border-t border-slate-200 bg-white px-4 py-3 text-slate-400">
        <Home className="mx-auto size-4 text-[#c68c2c]" aria-hidden="true" />
        <ListMusic className="mx-auto size-4" aria-hidden="true" />
        <BookOpen className="mx-auto size-4" aria-hidden="true" />
        <Heart className="mx-auto size-4" aria-hidden="true" />
      </div>
    </div>
  );
}
