import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, Video } from "lucide-react";
import { site } from "@/data/site";
import { services, featuredServiceSlugs } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/layout/FadeIn";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const featuredServices = services.filter((s) =>
  featuredServiceSlugs.includes(s.slug as (typeof featuredServiceSlugs)[number])
);

const Home = () => {
  usePageMeta({
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  });

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
          <FadeIn immediate>
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-wider text-primary">
                Independent family practice
              </p>
              <h1 className="display-heading mb-6">
                Care that starts with listening.
              </h1>
              <p className="lead-text mb-8">{site.description}</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link to="/contact">Book a Visit</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn immediate delay={120}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop"
                alt="Healing Touch clinic consultation room"
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth motion-reduce:transform-none"
                loading="eager"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Section>
        <div className="mb-12">
          <h2 className="section-heading mb-4">What we offer</h2>
          <p className="lead-text">
            Three core areas of care — each with dedicated clinicians and enough time per visit.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <Card key={service.slug} className="motion-card flex flex-col">
              <CardHeader>
                <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.summary}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Button asChild variant="ghost" className="px-0 text-primary">
                  <Link to={`/services/${service.slug}`}>
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid gap-8 md:grid-cols-3">
          {site.highlights.map((item, i) => {
            const icons = [Calendar, Clock, Video];
            const Icon = icons[i];
            return (
              <div key={item} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-foreground">{item}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="mb-12">
          <h2 className="section-heading mb-4">From our patients</h2>
          <p className="lead-text">Specific experiences — not generic praise.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 2).map((t) => (
            <blockquote
              key={t.author}
              className="motion-card rounded-lg border border-border bg-card p-6"
            >
              <p className="text-base leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                <cite className="not-italic font-medium text-foreground">{t.author}</cite>
                <span className="mx-2">·</span>
                {t.context}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="motion-card flex flex-col items-start justify-between gap-6 rounded-lg border border-border bg-card p-8 md:flex-row md:items-center">
          <div>
            <h2 className="section-heading mb-2">Ready to schedule?</h2>
            <p className="text-muted-foreground">
              New patients are welcome. Most first visits are booked within the week.
            </p>
          </div>
          <Button asChild size="lg">
            <Link to="/contact">Book a Visit</Link>
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
