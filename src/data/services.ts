export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  features: string[];
  problem: string;
  approach: string;
  whatToExpect: string[];
  hasDetailPage: boolean;
};

export const services: Service[] = [
  {
    slug: "primary-care",
    title: "Primary Care",
    summary:
      "Ongoing care for adults — annual exams, chronic condition management, and sick visits when you need them.",
    description:
      "Your primary care relationship should feel steady, not rushed. We block longer slots for first visits and follow-ups so there is time to review medications, labs, and what changed since last time.",
    features: [
      "Annual physicals and preventive labs",
      "Diabetes, hypertension, and thyroid management",
      "Same-week sick visits",
    ],
    problem:
      "You need a doctor who knows your history — not a new face every visit or a 10-minute window that barely covers one concern.",
    approach:
      "We maintain a single chart, coordinate referrals when specialists are needed, and send visit summaries you can actually read.",
    whatToExpect: [
      "45-minute new patient visit with health history review",
      "Clear plan before you leave — prescriptions, labs, or next steps",
      "Portal messages answered within one business day",
    ],
    hasDetailPage: true,
  },
  {
    slug: "pediatrics",
    title: "Pediatrics",
    summary:
      "Well-child visits, vaccines, and acute care for infants through teens — with parents in the room, not on the sidelines.",
    description:
      "We follow AAP schedules for well visits and explain vaccines and development milestones in plain language. Sick-kid appointments are prioritized during morning blocks.",
    features: [
      "Well-child checks and immunizations",
      "School and sports physicals",
      "Acute illness same-week scheduling",
    ],
    problem:
      "Pediatric care should not mean long waits for a ear infection or conflicting advice from urgent care.",
    approach:
      "Families see the same clinicians over time. We document growth trends and flag concerns early rather than at crisis points.",
    whatToExpect: [
      "Separate sick and well visit blocks to reduce waiting-room exposure",
      "Printed visit summaries for schools and caregivers",
      "After-hours nurse line for established patients",
    ],
    hasDetailPage: true,
  },
  {
    slug: "integrative-medicine",
    title: "Integrative Medicine",
    summary:
      "Evidence-based care that combines conventional treatment with nutrition, sleep, and stress support where appropriate.",
    description:
      "Integrative here does not mean unproven remedies. It means asking what else affects your symptoms — sleep, diet, movement — and building a plan you can sustain.",
    features: [
      "Nutrition and lifestyle counseling",
      "Stress and sleep assessment",
      "Coordination with your existing specialists",
    ],
    problem:
      "You have been told to 'reduce stress' without a concrete plan, or you are managing multiple providers with no one seeing the full picture.",
    approach:
      "We review your current medications and supplements, set measurable goals, and revisit progress at each follow-up.",
    whatToExpect: [
      "60-minute initial integrative consult",
      "Shared decision-making on supplements and complementary approaches",
      "Follow-ups every 4–6 weeks until goals are stable",
    ],
    hasDetailPage: true,
  },
  {
    slug: "womens-health",
    title: "Women's Health",
    summary:
      "Reproductive health, menopause support, and preventive screening integrated with your primary care record.",
    description:
      "From contraception counseling to perimenopause symptom management, women's health visits are scheduled with adequate time and privacy.",
    features: [
      "Contraception and preconception counseling",
      "Menopause symptom management",
      "Pap and breast health coordination",
    ],
    problem: "Women's health concerns are often dismissed or split across too many short appointments.",
    approach: "We document symptoms over time and adjust treatment based on your goals, not a one-size protocol.",
    whatToExpect: [
      "30–45 minute dedicated women's health visits",
      "Referrals to OB-GYN when surgical or high-risk care is needed",
    ],
    hasDetailPage: false,
  },
  {
    slug: "preventive-screening",
    title: "Preventive Screening",
    summary:
      "Age-appropriate cancer screening, cardiovascular risk assessment, and immunizations tracked in one place.",
    description:
      "We maintain a preventive checklist tied to your age and risk factors so nothing falls through the cracks between annual visits.",
    features: [
      "Colon, breast, and cervical screening coordination",
      "Lipid panels and diabetes screening",
      "Travel and adult immunizations",
    ],
    problem: "Screening reminders get lost between portals, or you are unsure what you are actually due for.",
    approach: "At each annual visit we review what's due, what's optional, and what can wait based on your preferences.",
    whatToExpect: [
      "Written screening schedule after your annual exam",
      "Lab orders sent to your preferred facility",
    ],
    hasDetailPage: false,
  },
  {
    slug: "telehealth",
    title: "Telehealth",
    summary:
      "Video follow-ups for stable conditions, medication checks, and results review — without a commute.",
    description:
      "Telehealth is for follow-ups and straightforward concerns, not emergencies. We will tell you honestly when an in-person exam is needed.",
    features: [
      "Medication and lab result follow-ups",
      "Mental health medication management",
      "Post-visit check-ins",
    ],
    problem: "You need a quick follow-up but cannot take half a day off for a 15-minute conversation.",
    approach: "Established patients book video slots through the same scheduling line. You receive a secure link before the visit.",
    whatToExpect: [
      "15–20 minute video visits during business hours",
      "In-person conversion if exam is required — no duplicate copay for same issue within 7 days",
    ],
    hasDetailPage: false,
  },
];

export const featuredServiceSlugs = ["primary-care", "pediatrics", "integrative-medicine"] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getDetailServices(): Service[] {
  return services.filter((s) => s.hasDetailPage);
}
