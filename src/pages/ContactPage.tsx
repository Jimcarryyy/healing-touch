import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, CheckCircle2 } from "lucide-react";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { usePageMeta } from "@/hooks/use-page-meta";
import { Section } from "@/components/layout/Section";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.string().min(1, "Please select a service"),
  provider: z.string().optional(),
  message: z.string().min(10, "Please tell us a bit about your visit needs"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const faqs = [
  {
    question: "Are you accepting new patients?",
    answer:
      "Yes. We hold same-week slots for new patients on Tuesday and Thursday mornings. Call or use the form and we will confirm within one business day.",
  },
  {
    question: "What insurance do you accept?",
    answer:
      "We accept most major plans including Moda, PacificSource, and Regence. Bring your card to the first visit — we verify coverage before you are seen.",
  },
  {
    question: "What should I bring to my first visit?",
    answer:
      "Photo ID, insurance card, a list of current medications, and any recent lab results or specialist notes you want us to review.",
  },
  {
    question: "Is this form a confirmed appointment?",
    answer:
      "No. This is a request. Our front desk will call or email to confirm date, time, and which clinician you will see.",
  },
];

const ContactPage = () => {
  const [searchParams] = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  usePageMeta({
    title: `Contact — ${site.name}`,
    description: `Schedule a visit at Healing Touch in Riverside. Call ${site.phone} or send a request online.`,
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: searchParams.get("service") ?? "",
      provider: searchParams.get("provider") ?? "",
      message: "",
    },
  });

  useEffect(() => {
    const service = searchParams.get("service");
    const provider = searchParams.get("provider");
    if (service) form.setValue("service", service);
    if (provider) form.setValue("provider", provider);
  }, [searchParams, form]);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: site.name,
      description: site.description,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.state,
        postalCode: site.address.zip,
        addressCountry: "US",
      },
      openingHoursSpecification: site.hours
        .filter((h) => h.time !== "Closed")
        .map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.days,
          opens: "08:00",
          closes: "19:00",
        })),
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error("Submission failed");
      }
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your request. Please call us directly."
      );
    }
  };

  return (
    <Section>
      <PageHeader
        title="Schedule a visit"
        lead="Send a request and we will confirm by phone or email within one business day. For urgent concerns, call the clinic directly."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          {submitted ? (
            <div className="rounded-lg border border-border bg-card p-8 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary mb-4" />
              <h2 className="font-serif text-xl font-medium mb-2">Request received</h2>
              <p className="text-muted-foreground mb-6">
                Our front desk will contact you within one business day to confirm your appointment.
              </p>
              <Button asChild variant="outline">
                <Link to="/">Return home</Link>
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name</FormLabel>
                        <FormControl>
                          <Input placeholder="Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(503) 555-0100" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s.slug} value={s.slug}>
                                {s.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="provider"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Preferred clinician (optional)</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? ""}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="No preference" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {team.map((m) => (
                              <SelectItem key={m.slug} value={m.slug}>
                                {m.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What brings you in?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Brief description of your visit needs, preferred days, or any accessibility requirements."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {submitError && (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                )}

                <Button type="submit" size="lg">
                  Submit request
                </Button>
              </form>
            </Form>
          )}
        </div>

        <aside className="lg:col-span-2 space-y-8">
          <div className="rounded-lg border border-border bg-muted/30 p-6 space-y-4">
            <h3 className="font-serif text-lg font-medium">Clinic information</h3>
            <div className="flex gap-3 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <address className="not-italic">{site.address.full}</address>
            </div>
            <div className="flex gap-3 text-sm">
              <Phone className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <a href={site.phoneHref} className="hover:text-primary transition-colors">
                {site.phone}
              </a>
            </div>
            <div className="flex gap-3 text-sm">
              <Mail className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <a href={site.emailHref} className="hover:text-primary transition-colors">
                {site.email}
              </a>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg border border-border bg-muted">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground p-4 text-center">
              Map placeholder — 412 Willow Creek Lane, Riverside, OR
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-16">
        <h2 className="font-serif text-2xl font-medium mb-6">Common questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};

export default ContactPage;
