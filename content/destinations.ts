export type VisaDetails = {
  documentsSummary: string;
  bestFor: string;
};

export type StudentVisaDetails = {
  universitiesNote: string;
  intakeSeasons: string;
  postStudyOptions: string;
};

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
  about: string;
  popularFor: string;
  highlights: string[];
  whyChoose: string[];
  visitVisaDetails?: VisaDetails;
  studentVisaDetails?: StudentVisaDetails;
};

export const destinations: Destination[] = [
  {
    slug: "australia",
    name: "Australia",
    region: "Oceania",
    flag: "🇦🇺",
    image: "/images/destinations/australia.jpg",
    tagline: "Explore. Study. Work. Experience Australia.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Australia offers world-class education, stunning landscapes, and a high quality of life. Ideal for both tourism and long-term study.",
    about:
      "From Sydney's harbour to the Great Barrier Reef and Melbourne's cultural scene, Australia blends outdoor adventure with globally ranked universities. Indian travellers visit for holidays, family reunions, and business, while students choose Australia for its strong post-study work rights and welcoming multicultural cities.",
    popularFor: "Tourism, higher education, skilled migration pathways",
    highlights: ["Top universities", "Post-study work options", "Multicultural cities"],
    whyChoose: [
      "Globally recognised degrees from Group of Eight universities",
      "Temporary Graduate visa (subclass 485) for post-study work",
      "Safe, English-speaking environment with strong Indian communities",
      "Excellent quality of life across major cities and regional areas",
    ],
    visitVisaDetails: {
      documentsSummary:
        "Valid passport, recent photographs, proof of funds, travel itinerary, employment or business proof, and accommodation details. Additional documents may apply based on your profile.",
      bestFor:
        "Tourism, visiting family and friends, short business trips, and exploring study options before enrolling.",
    },
    studentVisaDetails: {
      universitiesNote:
        "Home to the Group of Eight and many vocational institutions. Popular fields include IT, engineering, healthcare, business, and hospitality across Sydney, Melbourne, Brisbane, and Perth.",
      intakeSeasons:
        "Major intakes in February and July, with some courses offering November intakes. Apply 3–6 months before your course start date.",
      postStudyOptions:
        "Post-study work visas allow graduates to gain local experience. Skilled migration pathways are available for in-demand occupations.",
    },
  },
  {
    slug: "usa",
    name: "USA",
    region: "North America",
    flag: "🇺🇸",
    image: "/images/destinations/usa.jpg",
    tagline: "Explore. Study. Work. Experience America.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "The United States remains the top destination for international students and offers diverse travel experiences across 50 states.",
    about:
      "The USA attracts millions of visitors each year for iconic landmarks, theme parks, and business opportunities. For students, it remains the world's largest host of international enrolments — offering unmatched research facilities, diverse campuses, and career networks from coast to coast.",
    popularFor: "Tourism, STEM & business degrees, Optional Practical Training (OPT)",
    highlights: ["Ivy League universities", "Silicon Valley opportunities", "Diverse culture"],
    whyChoose: [
      "World-leading universities and research institutions",
      "OPT and STEM OPT extensions for eligible graduates",
      "Diverse campus life across every climate and culture",
      "Strong alumni networks and global career recognition",
    ],
    visitVisaDetails: {
      documentsSummary:
        "Valid passport, DS-160 confirmation, visa fee receipt, photograph, financial proof, travel plans, and ties to home country. A consular interview is required.",
      bestFor:
        "Tourism, attending conferences, visiting relatives, campus tours, and short business meetings.",
    },
    studentVisaDetails: {
      universitiesNote:
        "Thousands of accredited universities and colleges. Top choices include MIT, Stanford, UCLA, and state universities offering excellent value. STEM, MBA, and healthcare programs are especially popular.",
      intakeSeasons:
        "Fall (August–September) is the primary intake; Spring (January) is widely available. Summer sessions exist for select programs.",
      postStudyOptions:
        "F-1 students may apply for OPT after graduation, with STEM extensions available. Many graduates transition to H-1B or other work visas with employer sponsorship.",
    },
  },
  {
    slug: "uk",
    name: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    image: "/images/destinations/uk.jpg",
    tagline: "Explore. Study. Work. Experience the UK.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Home to Oxford, Cambridge, and historic landmarks — the UK is a premier destination for education and heritage tourism.",
    about:
      "The United Kingdom combines centuries of academic tradition with vibrant modern cities. Visitors come for history, shopping, and family visits, while students benefit from shorter degree durations, the Graduate Route visa, and access to Europe's financial and creative hubs.",
    popularFor: "Heritage tourism, one-year masters, Graduate Route visa",
    highlights: ["Historic institutions", "Graduate Route visa", "Rich culture"],
    whyChoose: [
      "One-year master's programs save time and cost",
      "Graduate Route allows 2 years (3 for PhD) post-study work",
      "Prestigious Russell Group universities",
      "Rich cultural heritage across England, Scotland, Wales, and Northern Ireland",
    ],
    visitVisaDetails: {
      documentsSummary:
        "Valid passport, application form, financial evidence, accommodation details, travel plans, and supporting documents showing ties to India. Biometrics appointment required.",
      bestFor:
        "Sightseeing, visiting family, short courses, university open days, and business networking in London and regional cities.",
    },
    studentVisaDetails: {
      universitiesNote:
        "Russell Group institutions including Oxford, Cambridge, Imperial, UCL, and Manchester lead global rankings. Business, law, engineering, and creative arts are top Indian student choices.",
      intakeSeasons:
        "September is the main intake; January intake available at many universities. Apply early for competitive courses.",
      postStudyOptions:
        "The Graduate Route visa lets you work in the UK for up to 2 years after completing a degree (3 years for doctoral graduates).",
    },
  },
  {
    slug: "canada",
    name: "Canada",
    region: "North America",
    flag: "🇨🇦",
    image: "/images/destinations/canada.jpeg",
    tagline: "Explore. Study. Work. Experience Canada.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Canada combines affordable education, welcoming immigration policies, and breathtaking natural beauty.",
    about:
      "Canada is consistently ranked among the world's most liveable countries. Travellers enjoy Niagara Falls, the Rockies, and multicultural cities, while students benefit from affordable tuition compared to the US, co-op programs, and clear pathways to permanent residency.",
    popularFor: "PR pathways, affordable study, family tourism",
    highlights: ["Affordable tuition", "PGWP pathway", "Safe cities"],
    whyChoose: [
      "Post-Graduation Work Permit (PGWP) up to 3 years",
      "Transparent Express Entry and provincial nominee programs",
      "High quality of life in Toronto, Vancouver, Montreal, and beyond",
      "Work-while-study rights on a valid study permit",
    ],
    visitVisaDetails: {
      documentsSummary:
        "Valid passport, application form, proof of funds, travel history, purpose of visit letter, employment proof, and family ties documentation. Biometrics may be required.",
      bestFor:
        "Tourism, visiting children studying in Canada, exploring universities, and attending family events.",
    },
    studentVisaDetails: {
      universitiesNote:
        "Universities of Toronto, UBC, McGill, and Waterloo are globally ranked. College diplomas and university degrees both offer strong co-op and internship opportunities.",
      intakeSeasons:
        "September and January are the main intakes; May intake available at select institutions. Apply 4–6 months ahead for study permit processing.",
      postStudyOptions:
        "PGWP length depends on program duration. Graduates often transition to Express Entry or Provincial Nominee Programs for permanent residency.",
    },
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    region: "Oceania",
    flag: "🇳🇿",
    image: "/images/destinations/new-zealand.jpg",
    tagline: "Explore. Study. Work. Experience New Zealand.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "New Zealand offers a peaceful environment, quality education, and adventure tourism in one of the world's most scenic countries.",
    about:
      "New Zealand is known for its friendly people, clean environment, and adventure tourism — from Milford Sound to Hobbiton. Students enjoy practical, industry-linked education at universities in Auckland, Wellington, and Christchurch with manageable living costs compared to Australia.",
    popularFor: "Adventure tourism, practical degrees, peaceful study environment",
    highlights: ["Work while studying", "Adventure tourism", "Friendly locals"],
    whyChoose: [
      "High student satisfaction and safety ratings",
      "Post-study work visa for eligible graduates",
      "Stunning natural landscapes and outdoor lifestyle",
      "Smaller class sizes and personalised academic support",
    ],
    visitVisaDetails: {
      documentsSummary:
        "Valid passport, proof of funds, return travel plans, accommodation details, and evidence of genuine temporary stay. Health and character requirements may apply.",
      bestFor:
        "Nature tourism, adventure sports, visiting friends and family, and scouting universities before applying.",
    },
    studentVisaDetails: {
      universitiesNote:
        "University of Auckland, Otago, Victoria, and AUT offer strong programs in agriculture, tourism, IT, and health sciences with a focus on real-world skills.",
      intakeSeasons:
        "February and July are the primary intakes. Some vocational courses start throughout the year.",
      postStudyOptions:
        "Eligible graduates can apply for a post-study work visa to gain local experience, supporting future skilled migration applications.",
    },
  },
  {
    slug: "europe",
    name: "Europe",
    region: "Europe",
    flag: "🇪🇺",
    image: "/images/destinations/europe.jpg",
    tagline: "Explore. Study. Work. Experience Europe.",
    visitVisa: true,
    studentVisa: true,
    overview:
      "Explore Schengen countries with a single visa. Europe offers diverse cultures, languages, and prestigious universities.",
    about:
      "Europe spans dozens of countries united by rich history, art, and innovation. Schengen visit visas open France, Germany, Italy, Spain, and more on one trip. Students choose Europe for affordable or tuition-free education in Germany and Nordic countries, plus prestigious programs in France, Netherlands, and Ireland.",
    popularFor: "Schengen tourism, affordable EU study, cultural exchange",
    highlights: ["Schengen access", "Affordable education", "Rich history"],
    whyChoose: [
      "One Schengen visa covers 27+ countries for tourism",
      "Low or no tuition fees in Germany, Norway, and Finland",
      "Erasmus+ and exchange opportunities across the continent",
      "World-class culture, history, and travel connectivity",
    ],
    visitVisaDetails: {
      documentsSummary:
        "Valid passport, Schengen application form, travel insurance, flight and hotel bookings, bank statements, employment proof, and cover letter explaining your itinerary.",
      bestFor:
        "Multi-country holidays, honeymoons, attending events, and exploring European universities before enrolling.",
    },
    studentVisaDetails: {
      universitiesNote:
        "Germany (TU Munich, Heidelberg), Netherlands (TU Delft), France (Sorbonne), and Ireland (Trinity) are popular. Many programs are taught in English at master's level.",
      intakeSeasons:
        "September/October is the main intake in most countries; Spring intakes vary by nation and institution.",
      postStudyOptions:
        "Post-study work rules vary by country — Germany, Ireland, and France offer graduate job-seeker or work permits for eligible alumni.",
    },
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
    about:
      "Dubai has transformed into a global business and tourism capital with iconic skylines, luxury shopping, and tax-free income. International branch campuses from UK and Australian universities make it an attractive study destination close to India, with strong links to the Gulf job market.",
    popularFor: "Branch campus degrees, business hub, tax-free careers",
    highlights: ["Modern campuses", "Business hub", "Tax-free income"],
    whyChoose: [
      "International university branch campuses with global degrees",
      "Tax-free salaries and booming job market in the Gulf",
      "Safe, modern city with excellent infrastructure",
      "Strategic location connecting Asia, Europe, and Africa",
    ],
    studentVisaDetails: {
      universitiesNote:
        "Heriot-Watt, Middlesex, Manipal, and BITS Pilani Dubai offer UK and Indian-affiliated degrees. Business, hospitality, engineering, and media are popular fields.",
      intakeSeasons:
        "September and January intakes are common; some institutions offer rolling admissions throughout the year.",
      postStudyOptions:
        "Graduates can explore employment in the UAE's free zones and corporate sector. Visa sponsorship is typically employer-led.",
    },
  },
  {
    slug: "singapore",
    name: "Singapore",
    region: "Asia",
    flag: "🇸🇬",
    image: "/images/destinations/singapore.jpeg",
    tagline: "Study at top-ranked universities in Asia.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Singapore offers top-ranked universities, a safe environment, and a gateway to Asian markets.",
    about:
      "Singapore is Asia's leading financial and education hub — clean, efficient, and English-speaking. Students benefit from NUS and NTU's global rankings, strong industry links, and proximity to India, making it ideal for business, tech, and finance careers across Southeast Asia.",
    popularFor: "Top-ranked Asian universities, finance & tech careers",
    highlights: ["Top-ranked universities", "Safe & clean", "Asian gateway"],
    whyChoose: [
      "NUS and NTU consistently rank among the world's best",
      "English-medium instruction in a multicultural city",
      "Strong graduate employment rates in finance and technology",
      "Gateway to ASEAN markets and multinational headquarters",
    ],
    studentVisaDetails: {
      universitiesNote:
        "National University of Singapore (NUS), Nanyang Technological University (NTU), and SMU lead in engineering, business, and computing. Singapore Management University excels in finance.",
      intakeSeasons:
        "August is the primary intake for most degree programs; some courses offer January entry.",
      postStudyOptions:
        "Graduates may apply for a Long-Term Visit Pass to seek employment. Employment Pass sponsorship is available for skilled roles.",
    },
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    region: "Asia",
    flag: "🇲🇾",
    image: "/images/destinations/malaysia.jpeg",
    tagline: "Affordable education in a vibrant setting.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Malaysia provides affordable, quality education with English-medium programs and a vibrant multicultural society.",
    about:
      "Malaysia offers one of the most affordable study-abroad options in Asia without compromising quality. Twinning and transfer programs with UK and Australian universities, tropical lifestyle, and halal-friendly environment make it especially popular with Indian and Middle Eastern students.",
    popularFor: "Affordable degrees, twinning programs, tropical lifestyle",
    highlights: ["Affordable fees", "English programs", "Tropical lifestyle"],
    whyChoose: [
      "Tuition and living costs significantly lower than Western countries",
      "Twinning programs with UK, Australian, and US partner universities",
      "English widely used in education and daily life",
      "Multicultural society with large Indian and international communities",
    ],
    studentVisaDetails: {
      universitiesNote:
        "Universiti Malaya, Taylor's, Sunway, and INTI offer transfer pathways to UK and Australian degrees. Medicine, engineering, and hospitality are popular.",
      intakeSeasons:
        "Multiple intakes in February, April, September, and November depending on the institution and program.",
      postStudyOptions:
        "Graduates can explore employment in Malaysia's growing tech and tourism sectors. Some transition to partner countries via transfer programs.",
    },
  },
  {
    slug: "turkey",
    name: "Turkey",
    region: "Eurasia",
    flag: "🇹🇷",
    image: "/images/destinations/turkey.jpg",
    tagline: "Explore. Study. Experience Turkey.",
    visitVisa: false,
    studentVisa: true,
    overview:
      "Turkey bridges East and West with affordable tuition, rich history, and growing international student communities.",
    about:
      "Turkey sits at the crossroads of Europe and Asia, offering affordable university education, rich Ottoman and Byzantine heritage, and a growing number of English-taught programs. Istanbul and Ankara host internationally recognised universities attracting students seeking value and cultural depth.",
    popularFor: "Affordable European-adjacent study, medical programs, cultural heritage",
    highlights: ["Affordable education", "Rich heritage", "Growing hub"],
    whyChoose: [
      "Tuition fees among the lowest for quality European-standard education",
      "Growing number of English-medium programs in medicine and engineering",
      "Rich history spanning two continents",
      "Vibrant student life in Istanbul, Ankara, and Izmir",
    ],
    studentVisaDetails: {
      universitiesNote:
        "Boğaziçi, Koç, Middle East Technical University (METU), and Istanbul University offer strong programs. Medicine and engineering attract many international students.",
      intakeSeasons:
        "September is the main intake; Spring intake available at select universities.",
      postStudyOptions:
        "Graduates can explore opportunities in Turkey's tourism, construction, and tech sectors, or use their degree as a stepping stone to Europe.",
    },
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
