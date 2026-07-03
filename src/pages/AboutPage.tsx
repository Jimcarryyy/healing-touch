import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const values = [
  {
    title: "Time is part of care",
    description:
      "Visits are scheduled with buffer. We do not stack 15-minute slots and wonder why nothing gets resolved.",
  },
  {
    title: "One chart, one team",
    description:
      "Your records stay in-house. Referrals go out with context — and results come back to the clinician who knows you.",
  },
  {
    title: "Honest about limits",
    description:
      "If you need a specialist or emergency care, we say so clearly. Integrative support never replaces evidence when evidence exists.",
  },
];

const AboutPage = () => {
  usePageMeta({
    title: `About — ${site.name}`,
    description:
      "Healing Touch opened in 2019 as an independent practice focused on longer visits and coordinated care in Riverside.",
  });

  return (
    <>
      <Section className="pb-0">
        <PageHeader
          title="A practice built for continuity"
          lead="Healing Touch opened in 2019 after our founders left a large health system frustrated by visit limits and fragmented records. We are still small by design — four clinicians, one location, one standard for how patients should be treated."
        />
      </Section>

      <Section className="pt-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
            <img
              src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&h=600&fit=crop"
              alt="Healing Touch clinic reception area"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Our Riverside clinic occupies a converted medical office on Willow Creek Lane — 
              walkable from the transit line, with parking behind the building. 
              The space is divided into four exam rooms and a dedicated telehealth suite 
              so video visits are not squeezed into storage closets.
            </p>
            <p>
              We accept most major insurance plans and publish self-pay rates for 
              uninsured patients on request. Same-week appointments are held for new 
              patients every Tuesday and Thursday morning.
            </p>
            <Button asChild>
              <Link to="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <h2 className="section-heading mb-10">How we work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="motion-card">
              <CardHeader>
                <CardTitle className="font-serif text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
