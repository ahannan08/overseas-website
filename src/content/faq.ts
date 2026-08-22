export type FAQCategory = {
  category: string;
  items: { question: string; answer: string }[];
};

export const faqCategories: FAQCategory[] = [
  {
    category: "Visa FAQs",
    items: [
      {
        question: "What documents are required for a visa application?",
        answer:
          "Requirements vary by country and visa type. Generally, you'll need a valid passport, photographs, financial proof, travel itinerary, and supporting documents specific to your visa category. Our consultants provide a tailored checklist during your consultation.",
      },
      {
        question: "How long does visa processing take?",
        answer:
          "Processing times depend on the destination and visa type. Visit visas typically take 2–4 weeks, while student visas may take 4–12 weeks. We keep you updated throughout the process.",
      },
      {
        question: "Can I apply after a visa refusal?",
        answer:
          "Yes. We specialize in visa refusal assistance — analyzing the refusal reason, strengthening your application, and guiding you through reapplication.",
      },
      {
        question: "Do I need an interview for my visa?",
        answer:
          "Some countries require interviews (e.g., USA student visa). We provide comprehensive interview preparation to help you succeed.",
      },
      {
        question: "Can you guarantee visa approval?",
        answer:
          "No consultancy can guarantee visa approval — the final decision rests with the embassy. However, our high success rate reflects our thorough preparation and expertise.",
      },
      {
        question: "How early should I apply?",
        answer:
          "We recommend applying at least 3 months before your intended travel or course start date to allow ample processing time.",
      },
      {
        question: "Can you help with documentation?",
        answer:
          "Yes. We provide complete documentation support including form filling, document review, SOP preparation, and organizing supporting paperwork for your application.",
      },
      {
        question: "Can you help with appointment booking?",
        answer:
          "Yes. We assist with embassy and VFS appointment booking, ensuring you secure the earliest available slot for your visa submission.",
      },
      {
        question: "What is your fee structure?",
        answer:
          "Our fees are transparent and communicated during your free consultation. Service charges vary by visa type and destination. There are no hidden costs — embassy fees are separate and paid directly to the consulate.",
      },
      {
        question: "Do you assist with travel insurance and flights?",
        answer:
          "Yes. We offer travel insurance guidance and flight/hotel booking assistance as part of our end-to-end support for visit and student visa clients.",
      },
    ],
  },
  {
    category: "Student Visa FAQs",
    items: [
      {
        question: "What is the minimum IELTS/PTE score required?",
        answer:
          "Score requirements vary by country and university. Generally, IELTS 6.0–6.5 or PTE 50–58 is needed for undergraduate programs, while postgraduate programs may require 6.5–7.0. We help you identify the exact requirement for your target institution.",
      },
      {
        question: "Can you help choose the right university?",
        answer:
          "Yes. We assess your academic profile, budget, and career goals to shortlist universities that best match your aspirations across Australia, UK, USA, Canada, and other destinations.",
      },
    ],
  },
  {
    category: "Academy FAQs",
    items: [
      {
        question: "Do you offer a free demo class?",
        answer:
          "Yes. We offer a free assessment covering 2 sections so you can experience our teaching methodology before enrolling.",
      },
      {
        question: "What is the batch size?",
        answer:
          "We maintain small batches of up to 10 students to ensure personalized attention for every learner.",
      },
      {
        question: "Are study materials included?",
        answer:
          "Study materials are not included in the course fee for IELTS. Mock tests and doubt-clearing sessions are included. Contact us for PTE and GRE material details.",
      },
      {
        question: "What is the difference between IELTS Academic and General?",
        answer:
          "IELTS Academic is for university admissions and professional registration. IELTS General Training is for migration, work visas, and secondary education. We offer coaching for both formats.",
      },
      {
        question: "Can I switch batches?",
        answer:
          "Yes. Subject to availability, you can switch between morning and evening batches. Speak with our academy coordinator to arrange a batch change.",
      },
    ],
  },
  {
    category: "IELTS FAQs",
    items: [
      {
        question: "What IELTS courses do you offer?",
        answer:
          "We offer IELTS Academic, General Training, Online, Classroom, Crash Course, Weekend Batch, and One-to-One coaching.",
      },
      {
        question: "What are the batch timings?",
        answer:
          "Weekday batches run Monday to Friday. Morning batch: 10 AM – 12 PM. Evening batch: 7 PM – 9 PM.",
      },
      {
        question: "What is the course fee?",
        answer:
          "The IELTS course fee is ₹6,500 with free registration. The course duration is 2 months with 2 hours of daily classes.",
      },
    ],
  },
  {
    category: "PTE FAQs",
    items: [
      {
        question: "Do you have a dedicated PTE lab?",
        answer:
          "Yes. Our academy includes a dedicated PTE lab with computer-based practice stations for realistic exam simulation.",
      },
      {
        question: "Are full-length mock exams included?",
        answer:
          "Yes. Regular full-length mock exams are part of the PTE preparation program to track your progress.",
      },
    ],
  },
  {
    category: "GRE FAQs",
    items: [
      {
        question: "What does GRE preparation cover?",
        answer:
          "Our GRE program covers Quantitative Reasoning, Verbal Reasoning, and Analytical Writing with personal mentoring and regular mock tests.",
      },
      {
        question: "Is personal mentoring available?",
        answer:
          "Yes. Each student receives personal mentoring tailored to their target score and weak areas.",
      },
    ],
  },
  {
    category: "Study Abroad FAQs",
    items: [
      {
        question: "What is the complete study abroad journey?",
        answer:
          "Our end-to-end support covers: Test Preparation → Destination Selection → Education Planning → Application → Student Visa → Departure.",
      },
      {
        question: "Can you help with SOP and LOR?",
        answer:
          "Yes. We provide SOP assistance and guidance on Letters of Recommendation as part of our documentation support.",
      },
    ],
  },
  {
    category: "General FAQs",
    items: [
      {
        question: "Do you offer work permit visas?",
        answer:
          "Sorry, we don't offer work permit visas at this time. We specialize in visit visas, student visas, and business visas along with IELTS, PTE, and GRE coaching.",
      },
      {
        question: "Where is your office located?",
        answer:
          "We are located at 201 AAB Building, Upperpally Attapur, Pillar No. 171, Hyderabad. We're open Monday to Saturday, 10 AM – 7 PM.",
      },
    ],
  },
];

export const homeFaqTeaser = [
  faqCategories[0].items[0],
  faqCategories[0].items[1],
  faqCategories[1].items[0],
  faqCategories[2].items[0],
  faqCategories[0].items[6],
  faqCategories[6].items[0],
  faqCategories[7].items[0],
  faqCategories[7].items[1],
];
