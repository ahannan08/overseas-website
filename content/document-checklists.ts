export type ChecklistSection = {
  title: string;
  items: string[];
};

export type DocumentChecklist = {
  title: string;
  intro?: string;
  sections: ChecklistSection[];
  importantNote: string;
};

export const visitVisaDocumentChecklist: DocumentChecklist = {
  title: "Document Checklist for Visit Visa",
  sections: [
    {
      title: "Personal & Basic Documents",
      items: [
        "Valid Passport – including all stamped/visa pages and blank pages",
        "Aadhaar Card",
        "PAN Card",
        "Electricity Bill / Address Proof",
        "Recent Passport-Size Photograph – White Background (35 × 45 mm)",
        "Marriage Certificate, if applicable",
        "Spouse's Aadhaar Card, if applicable",
        "Children's Birth Certificates, if applicable",
        "Children's Aadhaar Cards, if applicable",
        "Parents' Aadhaar Cards or Date of Birth Proof",
        "Siblings' Aadhaar Cards or Date of Birth Proof",
        "Family Group Photographs",
        "Previous Travel History – with clear dates of travel and return",
        "Visa Refusal Letters, if any",
        "Last 6 Months' Bank Statements",
      ],
    },
    {
      title: "Proof of Employment – Salaried Applicants",
      items: [
        "Offer / Appointment Letter",
        "Experience Certificate",
        "Last 6 Months' Salary Slips",
        "Leave Grant / Leave Approval Letter",
        "NOC, if applicable",
        "Form 16 / TDS Documents",
        "Income Tax Returns (ITR) – Last 2 Years",
      ],
    },
    {
      title: "Proof of Business – Business Owners / Self-Employed",
      items: [
        "Company Registration Certificate",
        "Trade License, if applicable",
        "Labour License, if applicable",
        "GST Registration Certificate",
        "Income Tax Returns (ITR) – Last 2 Years",
      ],
    },
    {
      title: "Proof of Funds",
      items: [
        "Bank Balance Certificate",
        "Last 6 Months' Bank Statements",
        "Fixed Deposit Certificate, if applicable",
        "Credit Card Copy, if applicable",
      ],
    },
    {
      title: "Supporting Documents",
      items: [
        "CA Certificate / CA Financial Report",
        "Property Valuation Report",
        "Travel Insurance",
        "Dummy Flight Tickets / Flight Reservation",
        "Hotel Reservation",
        "Cover Letter",
        "Travel Itinerary",
        "Event Registration Passes, if applicable",
      ],
    },
  ],
  importantNote:
    "Document requirements may vary depending on the applicant's profile and individual circumstances. Our team will provide you with the appropriate checklist and guidance for your visit visa application.",
};

export const studentVisaDocumentChecklist: DocumentChecklist = {
  title: "Student Visa – Document Checklist",
  intro:
    "Preparing the right documents is an important part of your student visa application. Use the checklist below to organize your academic, personal, English-language and financial documents.",
  sections: [
    {
      title: "Personal Documents",
      items: [
        "Valid Passport – with at least six months validity and blank pages",
        "Aadhaar Card",
        "PAN Card",
      ],
    },
    {
      title: "Academic Documents",
      items: [
        "SSC Memo",
        "12th Grade Memos",
        "Degree Certificate",
        "All Semester Transcripts",
        "All Semester Memos",
        "Consolidated Marks Memo (CMM)",
        "Medium of Instruction (MOI) Letter",
        "Letters of Recommendation – 3 LORs",
        "Provisional Certificate, if applicable",
        "Transfer / Migration Certificate",
      ],
    },
    {
      title: "English Language Proficiency",
      items: ["PTE / IELTS Score Card"],
    },
    {
      title: "Additional Academic Documents",
      items: ["Research Proposal, if applicable"],
    },
    {
      title: "Financial & Sponsor Documents",
      items: [
        "Sponsor's Last 3 Months' Bank Statements",
        "Sponsor's Aadhaar Card",
        "Sponsor's PAN Card",
        "Affidavit of Support from Sponsor",
        "Sponsor's Last 2 Years' Income Tax Returns (ITR)",
        "Sponsor's Bank Balance Confirmation Letter",
      ],
    },
  ],
  importantNote:
    "Funds Requirement: Ensure that the funds shown in the sponsor's bank statement are maintained for at least 28 days at the time of your visa application, where applicable. Please Note: Document requirements may vary depending on the destination country, university or institution, course and individual applicant profile. Our team will provide you with the appropriate document guidance for your specific application.",
};
