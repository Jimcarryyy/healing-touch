import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  variant?: "full" | "mark";
};

export function SiteLogo({ className, variant = "full" }: SiteLogoProps) {
  const src = variant === "full" ? "/logo.svg" : "/logo-mark.svg";
  const width = variant === "full" ? 160 : 36;
  const height = variant === "full" ? 32 : 36;

  return (
    <Link to="/" className={cn("inline-flex shrink-0 items-center", className)}>
      <img
        src={src}
        alt={site.name}
        width={width}
        height={height}
        className="h-8 w-auto"
        decoding="async"
      />
    </Link>
  );
}
