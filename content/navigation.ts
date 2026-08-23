export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Overseas", href: "/overseas" },
  { label: "Academy", href: "/academy" },
  { label: "Study Abroad", href: "/study-abroad" },
  { label: "Destinations", href: "/destinations" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const overseasNav = [
  { label: "Visit Visa", href: "/overseas/visit-visa" },
  { label: "Student Visa", href: "/overseas/student-visa" },
  { label: "Business Visa", href: "/overseas/business-visa" },
] as const;

export const academyNav = [
  { label: "IELTS", href: "/academy/ielts" },
  { label: "PTE", href: "/academy/pte" },
  { label: "GRE", href: "/academy/gre" },
] as const;

export const footerNav = {
  overseas: overseasNav,
  academy: academyNav,
  company: [
    { label: "About", href: "/about" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
