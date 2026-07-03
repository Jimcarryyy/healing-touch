import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import { SiteLogo } from "./SiteLogo";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const navLinks = (
    <>
      {site.nav.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          onClick={() => setOpen(false)}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            isActive(item.href) ? "text-primary" : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <SiteLogo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden sm:inline-flex">
            <Link to="/contact">Book a Visit</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SiteLogo />
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4" aria-label="Mobile navigation">
                {site.nav.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      isActive(item.href) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link to="/contact" onClick={() => setOpen(false)}>
                    Book a Visit
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
