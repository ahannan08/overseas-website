export const visaTypes = {
  visit: {
    title: "Visit Visa",
    slug: "visit-visa",
    href: "/overseas/visit-visa",
    description:
      "Explore the world with confidence. We assist with tourist and visit visa applications for top destinations worldwide.",
    countries: ["Australia", "USA", "UK", "New Zealand", "Europe", "Canada"],
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
  },
  student: {
    title: "Student Visa",
    slug: "student-visa",
    href: "/overseas/student-visa",
    description:
      "Start your global education journey. Comprehensive student visa support from university selection to departure.",
    countries: [
      "Australia",
      "UK",
      "USA",
      "Canada",
      "New Zealand",
      "Europe",
      "Dubai",
      "Singapore",
      "Malaysia",
      "Turkey",
    ],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
  },
  business: {
    title: "Business Visa",
    slug: "business-visa",
    href: "/overseas/business-visa",
    description:
      "Expand your horizons with business travel. Visa assistance for entrepreneurs and professionals across all countries.",
    countries: ["All Countries"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
  },
} as const;

export const visaProcess = [
  {
    step: "01",
    title: "Check Eligibility",
    description: "Free consultation to assess your profile and visa options.",
  },
  {
    step: "02",
    title: "Submit Details",
    description: "Share documents and information for a tailored application plan.",
  },
  {
    step: "03",
    title: "Documentation",
    description: "We prepare, review, and organize all required paperwork.",
  },
  {
    step: "04",
    title: "Application & Follow-up",
    description: "Submit application and track progress until decision.",
  },
  {
    step: "05",
    title: "Get Contacted",
    description: "Receive your visa and pre-departure guidance.",
  },
];
