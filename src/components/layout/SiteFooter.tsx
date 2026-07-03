import { Link } from "react-router-dom";
import { site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-medium">{site.name}</p>
            <p className="mt-2 text-sm text-muted-foreground">{site.tagline}</p>
          </div>

          <div>
            <p className="text-sm font-medium">Hours</p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {site.hours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span className="font-mono text-xs">{row.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium">Contact</p>
            <address className="mt-3 space-y-1.5 text-sm text-muted-foreground not-italic">
              <p>{site.address.full}</p>
              <p>
                <a href={site.phoneHref} className="hover:text-primary transition-colors">
                  {site.phone}
                </a>
              </p>
              <p>
                <a href={site.emailHref} className="hover:text-primary transition-colors">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>
            Site designed &amp; built by{" "}
            <a
              href={site.developer.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              {site.developer.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
