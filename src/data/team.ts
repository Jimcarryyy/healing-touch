export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  credentials: string;
  bio: string;
  focus: string[];
  image: string;
};

// Stock photos: Unsplash (healthcare professionals)
export const team: TeamMember[] = [
  {
    slug: "elena-vasquez",
    name: "Dr. Elena Vasquez",
    role: "Family Medicine Physician",
    credentials: "MD, Board Certified in Family Medicine",
    bio: "Dr. Vasquez trained at Oregon Health & Science University and spent six years in community health before opening Healing Touch. She focuses on long-term relationships with adult patients managing chronic conditions.",
    focus: ["Primary care", "Diabetes management", "Preventive screening"],
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=face",
  },
  {
    slug: "james-okonkwo",
    name: "Dr. James Okonkwo",
    role: "Pediatrician",
    credentials: "MD, Board Certified in Pediatrics",
    bio: "Dr. Okonkwo sees patients from newborn through age 18. Parents appreciate his direct explanations and the separate sick-child scheduling blocks he helped design for the practice.",
    focus: ["Well-child visits", "Adolescent health", "Asthma and allergies"],
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=face",
  },
  {
    slug: "priya-mehta",
    name: "Dr. Priya Mehta",
    role: "Integrative Medicine Physician",
    credentials: "MD, ABIHM Certified",
    bio: "Dr. Mehta combines conventional internal medicine with lifestyle medicine training. She works with patients on sleep, nutrition, and stress when those factors are driving symptoms.",
    focus: ["Integrative consults", "Women's health", "Lifestyle medicine"],
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=face",
  },
  {
    slug: "maria-santos",
    name: "Maria Santos, NP",
    role: "Nurse Practitioner",
    credentials: "MSN, FNP-BC",
    bio: "Maria handles same-day sick visits, telehealth follow-ups, and annual exams for established patients. She is often patients' first point of contact for quick questions through the portal.",
    focus: ["Acute care", "Telehealth", "Medication refills"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=500&fit=crop&crop=face",
  },
];

export function getTeamMemberBySlug(slug: string): TeamMember | undefined {
  return team.find((m) => m.slug === slug);
}
