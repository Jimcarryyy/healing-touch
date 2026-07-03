export const site = {
  name: "Healing Touch",
  tagline: "Family medicine and integrative care in Riverside",
  description:
    "Healing Touch is an independent family practice offering same-week appointments, evening hours, and care that starts with listening.",
  phone: "(503) 555-0142",
  phoneHref: "tel:+15035550142",
  email: "hello@healingtouch.care",
  emailHref: "mailto:hello@healingtouch.care",
  address: {
    street: "412 Willow Creek Lane",
    city: "Riverside",
    state: "OR",
    zip: "97205",
    full: "412 Willow Creek Lane, Riverside, OR 97205",
  },
  hours: [
    { days: "Mon – Wed", time: "8:00 AM – 5:00 PM" },
    { days: "Thu – Fri", time: "8:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 1:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  highlights: [
    "Same-week appointments for new patients",
    "Evening hours Thursday and Friday",
    "Telehealth follow-ups available",
  ],
  developer: {
    name: "Jimcarry Omambak",
    github: "https://github.com/jimcarryomambak",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
