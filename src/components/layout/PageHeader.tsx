import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type Breadcrumb = {
  label: string;
  href?: string;
};

type PageHeaderProps = {
  title: string;
  lead?: string;
  breadcrumbs?: Breadcrumb[];
  className?: string;
};

export function PageHeader({ title, lead, breadcrumbs, className }: PageHeaderProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link to={crumb.href} className="hover:text-foreground transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}
      <h1 className="section-heading mb-4">{title}</h1>
      {lead && <p className="lead-text">{lead}</p>}
    </div>
  );
}
