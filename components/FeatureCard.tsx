import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone: string;
};

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tone
}: FeatureCardProps) {
  return (
    <article className="glass-panel rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(28,36,84,0.16)]">
      <div
        className={`mb-5 grid size-12 place-items-center rounded-lg bg-gradient-to-br ${tone} text-white shadow-lg`}
      >
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-[#14213d]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </article>
  );
}
