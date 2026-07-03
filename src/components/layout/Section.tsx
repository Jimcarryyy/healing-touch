import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "muted";
  id?: string;
  animate?: boolean;
};

export function Section({
  children,
  className,
  variant = "default",
  id,
  animate = true,
}: SectionProps) {
  const content = (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
  );

  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24",
        variant === "muted" && "bg-muted/40",
        className
      )}
    >
      {animate ? <FadeIn>{content}</FadeIn> : content}
    </section>
  );
}
