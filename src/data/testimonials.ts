export type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "I switched here after years of 12-minute visits elsewhere. Dr. Vasquez actually read my chart before I walked in and adjusted my blood pressure plan in one appointment.",
    author: "Karen M.",
    context: "Primary care patient, 3 years",
  },
  {
    quote:
      "Our daughter's asthma was managed reactively at urgent care until Dr. Okonkwo set up a written action plan. We have not had an ER visit in fourteen months.",
    author: "David & Lin T.",
    context: "Pediatric patients",
  },
  {
    quote:
      "Dr. Mehta helped me understand why my sleep medication was not working and built a taper plan with my psychiatrist copied on every note. That coordination mattered.",
    author: "Rachel S.",
    context: "Integrative medicine patient",
  },
];
