export type Destination = {
  slug: string;
  name: string;
  region: string;
  flag: string;
  image: string;
  tagline: string;
  visitVisa: boolean;
  studentVisa: boolean;
  overview: string;
  highlights: string[];
};

export const destinations: Destination[] = [
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1523482580672-f1090198a325?w=1200&q=80",
    tagline: "Explore. Study. Work. Experience Australia.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Australia offers world-class education, stunning landscapes, and a high quality of life. Ideal for both tourism and long-term study.",
    highlights: ["Top universities", "Post-study work options", "Multicultural cities"],
  },
  {
    slug: "usa",
    name: "USA",
    region: "North America",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1485738422979-f299c4623312?w=1200&q=80",
    tagline: "Explore. Study. Work. Experience America.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "The United States remains the top destination for international students and offers diverse travel experiences across 50 states.",
    highlights: ["Ivy League universities", "Silicon Valley opportunities", "Diverse culture"],
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80",
    tagline: "Explore. Study. Work. Experience the UK.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Home to Oxford, Cambridge, and historic landmarks — the UK is a premier destination for education and heritage tourism.",
    highlights: ["Historic institutions", "Graduate Route visa", "Rich culture"],
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d049a221?w=1200&q=80",
    tagline: "Explore. Study. Work. Experience Canada.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Canada combines affordable education, welcoming immigration policies, and breathtaking natural beauty.",
    highlights: ["Affordable tuition", "PGWP pathway", "Safe cities"],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    image:
      "https://images.unsplash.com/photo-1469521669692-473ff072709a?w=1200&q=80",
    tagline: "Explore. Study. Work. Experience New Zealand.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "New Zealand offers a peaceful environment, quality education, and adventure tourism in one of the world's most scenic countries.",
    highlights: ["Work while studying", "Adventure tourism", "Friendly locals"],
  },
  {
    slug: "europe",
    name: "Europe",
    region: "Europe",
    flag: "🇪🇺",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=1200&q=80",
    tagline: "Explore. Study. Work. Experience Europe.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Explore Schengen countries with a single visa. Europe offers diverse cultures, languages, and prestigious universities.",
    highlights: ["Schengen access", "Affordable education", "Rich history"],
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "Middle East",
    flag: "🇦🇪",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    tagline: "Study. Work. Build your future in Dubai.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Dubai is a global hub for business and emerging education, with world-class infrastructure and tax-free opportunities.",
    highlights: ["Modern campuses", "Business hub", "Tax-free income"],
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "Asia",
    flag: "🇸🇬",
    image:
      "https://images.unsplash.com/photo-1525621487017-6080faded237?w=1200&q=80",
    tagline: "Study at top-ranked universities in Asia.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Singapore offers top-ranked universities, a safe environment, and a gateway to Asian markets.",
    highlights: ["Top-ranked universities", "Safe & clean", "Asian gateway"],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia",
    flag: "🇲🇾",
    image:
      "https://images.unsplash.com/photo-1596422846543-75c6fc197608?w=1200&q=80",
    tagline: "Affordable education in a vibrant setting.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Malaysia provides affordable, quality education with English-medium programs and a vibrant multicultural society.",
    highlights: ["Affordable fees", "English programs", "Tropical lifestyle"],
  },
  {
    slug: "turkey",
    name: "Turkey",
    region: "Eurasia",
    flag: "🇹🇷",
    image:
      "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80",
    tagline: "Explore. Study. Experience Turkey.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Turkey bridges East and West with affordable tuition, rich history, and growing international student communities.",
    highlights: ["Affordable education", "Rich heritage", "Growing hub"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
