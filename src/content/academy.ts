export const academyOverview = {
  title: "Liberty Academy",
  description:
    "Premier test preparation for IELTS, PTE, and GRE with expert trainers, small batches, and regular mock tests.",
  facilities: [
    "Classrooms",
    "PTE Lab",
    "Study Room",
    "Speaking Practice Rooms",
    "Mock Test Facilities",
    "Wi-Fi",
    "Air Conditioning",
    "Parking",
  ],
  whyChoose: [
    {
      title: "Expert Trainers",
      description: "Learn from experienced faculty with proven track records.",
    },
    {
      title: "Small Batches",
      description: "Maximum 10 students per batch for personalized attention.",
    },
    {
      title: "Regular Mock Tests",
      description: "Track your progress before the actual exam.",
    },
    {
      title: "Personal Mentoring",
      description: "Guidance tailored to your target score.",
    },
    {
      title: "Study Materials",
      description: "Structured preparation resources and practice sets.",
    },
    {
      title: "Free Assessment",
      description: "Complimentary demo covering 2 sections.",
    },
  ],
};

const sharedCourseDetails = {
  duration: "2 months (8 weeks)",
  classesPerWeek: "Monday – Friday",
  hoursPerClass: "2 hours daily",
  batchSize: "10 members",
  morningBatch: "10 AM – 12 PM",
  eveningBatch: "7 PM – 9 PM",
  mode: "Offline",
  registrationFee: "Free",
  studyMaterials: false,
  mockTests: true,
  doubtSessions: true,
};

export const ieltsContent = {
  title: "IELTS Coaching",
  slug: "ielts",
  href: "/academy/ielts",
  description:
    "Comprehensive IELTS preparation for Academic and General Training with flexible batch options.",
  courses: [
    "IELTS Academic",
    "IELTS General Training",
    "IELTS Online",
    "IELTS Classroom",
    "IELTS Crash Course",
    "IELTS Weekend Batch",
    "IELTS One-to-One",
  ],
  modules: ["Listening", "Reading", "Writing", "Speaking"],
  fee: "₹6,500",
  ...sharedCourseDetails,
  image:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
};

export const pteContent = {
  title: "PTE Coaching",
  slug: "pte",
  href: "/academy/pte",
  description:
    "PTE Academic preparation with computer-based practice, full-length mock exams, and dedicated PTE lab.",
  courses: ["PTE Academic"],
  features: [
    "Computer-based practice",
    "Full-length mock exams",
    "Score improvement program",
    "Trainer support",
    "One-on-one support",
    "Doubt sessions",
  ],
  fee: "Contact for details",
  ...sharedCourseDetails,
  image:
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
};

export const greContent = {
  title: "GRE Preparation",
  slug: "gre",
  href: "/academy/gre",
  description:
    "GRE General Test preparation covering Quantitative, Verbal, and Analytical Writing with personal mentoring.",
  courses: ["GRE General Test Preparation"],
  modules: [
    "Quantitative Reasoning",
    "Verbal Reasoning",
    "Analytical Writing",
  ],
  features: [
    "Personal mentoring",
    "Mock tests",
    "Practice tests",
    "Study material",
    "Doubt sessions",
  ],
  fee: "Contact for details",
  ...sharedCourseDetails,
  image:
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
};

export const academyCourses = [ieltsContent, pteContent, greContent];
