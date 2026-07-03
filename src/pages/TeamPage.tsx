import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { team } from "@/data/team";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const TeamPage = () => {
  usePageMeta({
    title: `Our Team — ${site.name}`,
    description:
      "Meet the physicians and nurse practitioner at Healing Touch — family medicine, pediatrics, and integrative care.",
  });

  return (
    <Section>
      <PageHeader
        title="Clinicians you will see more than once"
        lead="Four providers, shared records, and no rotating locum tenens. When you call, you reach someone who can access your chart."
      />

      <div className="grid gap-8 sm:grid-cols-2">
        {team.map((member) => (
          <Card key={member.slug} className="motion-card overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={member.image}
                alt={member.name}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-serif text-xl">{member.name}</CardTitle>
              <CardDescription>
                {member.role}
                <span className="block mt-1 text-xs">{member.credentials}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {member.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-md bg-accent px-2.5 py-1 text-xs font-medium text-accent-foreground"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <Button asChild variant="outline" size="sm">
                <Link to={`/contact?provider=${member.slug}`}>Book with {member.name.split(" ")[0]}</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default TeamPage;
