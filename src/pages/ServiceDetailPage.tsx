import { Link, Navigate, useParams } from "react-router-dom";
import { site } from "@/data/site";
import { getServiceBySlug } from "@/data/services";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  usePageMeta({
    title: service ? `${service.title} — ${site.name}` : `Service — ${site.name}`,
    description: service?.summary,
  });

  if (!service || !service.hasDetailPage) {
    return <Navigate to="/services" replace />;
  }

  return (
    <Section>
      <PageHeader
        title={service.title}
        lead={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <div className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="font-serif text-xl font-medium mb-3">The problem we hear</h2>
            <p className="text-muted-foreground leading-relaxed">{service.problem}</p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium mb-3">Our approach</h2>
            <p className="text-muted-foreground leading-relaxed">{service.approach}</p>
          </div>

          <div>
            <h2 className="font-serif text-xl font-medium mb-3">What to expect</h2>
            <ul className="space-y-3">
              {service.whatToExpect.map((item) => (
                <li key={item} className="flex gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="rounded-lg border border-border bg-muted/30 p-6 h-fit">
          <h3 className="font-serif text-lg font-medium mb-4">Book this service</h3>
          <p className="text-sm text-muted-foreground mb-6">
            {service.description}
          </p>
          <Button asChild className="w-full">
            <Link to={`/contact?service=${service.slug}`}>Request appointment</Link>
          </Button>
          <Button asChild variant="outline" className="w-full mt-3">
            <Link to="/team">See clinicians</Link>
          </Button>
        </aside>
      </div>
    </Section>
  );
};

export default ServiceDetailPage;
