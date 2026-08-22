import { siteConfig } from "./site";

export type LegalSection = {
  title: string;
  content: string | string[];
};

export const privacyPolicy = {
  lastUpdated: "August 2026",
  sections: [
    {
      title: "Introduction",
      content: `${siteConfig.legalName} ("${siteConfig.name}", "we", "our", or "us") operates the website and provides visa consultancy and test preparation services from our office at ${siteConfig.address}. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website, submit enquiry forms, or use our services.`,
    },
    {
      title: "Information We Collect",
      content: [
        "Personal details: name, phone number, email address, and visa type preference submitted through contact or eligibility forms.",
        "Consultation information: academic background, travel plans, destination preferences, and documents shared during visa or academy consultations.",
        "Technical data: IP address, browser type, device information, and pages visited (via cookies or analytics, if enabled).",
        "Communication records: messages sent via WhatsApp, phone calls, email, or in-person visits.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To respond to your enquiries and provide visa consultancy services.",
        "To enrol you in academy programs (IELTS, PTE, GRE) and communicate batch schedules.",
        "To prepare and submit visa applications on your behalf where applicable.",
        "To send service updates, appointment reminders, and relevant information about our offerings.",
        "To improve our website, services, and customer experience.",
        "To comply with legal obligations and prevent fraud.",
      ],
    },
    {
      title: "Cookies",
      content:
        "Our website may use cookies and similar technologies to enhance your browsing experience, remember preferences, and analyse site traffic. You can control cookie settings through your browser. Disabling cookies may affect certain website features.",
    },
    {
      title: "Third-Party Services",
      content:
        "We may share necessary information with embassy/consulate appointment systems, payment processors, travel insurance providers, and communication platforms (e.g., WhatsApp) solely to deliver the services you request. We do not sell your personal data to third parties for marketing purposes.",
    },
    {
      title: "Data Retention",
      content:
        "We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, comply with legal requirements, and resolve disputes. Visa application records may be retained for the period required by applicable immigration regulations.",
    },
    {
      title: "Your Rights",
      content: [
        "Request access to the personal data we hold about you.",
        "Request correction of inaccurate or incomplete information.",
        "Request deletion of your data, subject to legal and contractual obligations.",
        "Withdraw consent for marketing communications at any time.",
        "To exercise these rights, contact us using the details below.",
      ],
    },
    {
      title: "Children's Privacy",
      content:
        "Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.",
    },
    {
      title: "Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our website after changes constitutes acceptance of the revised policy.",
    },
    {
      title: "Contact Us",
      content: [
        `Email: ${siteConfig.email}`,
        `Phone: ${siteConfig.phone}`,
        `Address: ${siteConfig.address}`,
        `Business Hours: ${siteConfig.hours}`,
      ],
    },
  ] satisfies LegalSection[],
};
