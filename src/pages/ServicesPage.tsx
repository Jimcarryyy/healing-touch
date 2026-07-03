import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesPage = () => {
  usePageMeta({
    title: `Services — ${site.name}`,
    description:
      "Primary care, pediatrics, integrative medicine, women's health, preventive screening, and telehealth at Healing Touch.",
  });

  return (
    <Section>
      <PageHeader
        title="Clinical services"
        lead="Each service has a lead clinician and clear scope. If we are not the right fit, we will tell you before you book."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {service.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col">
              <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      —
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3">
                {service.hasDetailPage ? (
                  <Button asChild variant="outline" size="sm">
                    <Link to={`/services/${service.slug}`}>
                      Full details <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Link>
                  </Button>
                ) : null}
                <Button asChild size="sm">
                  <Link to={`/contact?service=${service.slug}`}>Book for this service</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ServicesPage;
