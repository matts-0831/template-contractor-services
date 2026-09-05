export const site = {
  businessName: "Your Business Name",
  shortName: "[Contractor Name]",
  tagline: "[Trade / Specialty]",
  themeId: "charcoal-bronze",
  headerStyle: "atelier",
  phoneDisplay: "[Phone Number]",
  phoneTel: "tel:+15555550100",
  email: "[email@yourbusiness.com]",
  siteUrl: "https://www.yourbusiness.com",
  ogImage: "/images/stock/construction.jpg",
  priceRange: "$$",
  address: {
    streetAddress: "[Street Address]",
    addressLocality: "[City]",
    addressRegion: "[State]",
    postalCode: "[ZIP]",
    addressCountry: "US",
  },
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
  serviceArea: "[City], [County], & Surrounding Areas",
  serviceAreaShort: "[City] · [County] · Nearby Towns",
  metaTitle: "Your Business Name | [Primary Trade] in [Service Area]",
  metaDescription:
    "Replace this description with a local, conversion-focused summary of the contractor's trades, service area, and call to action.",
  hours: {
    weekday: "Monday–Friday: [Hours]",
    saturday: "Saturday: [Hours]",
    sunday: "Sunday: [Hours / By appointment]",
  },
  hero: {
    headline: "[Primary Service Line]",
    headlineLine2: "[Service Region]",
    subheadline:
      "[Short positioning statement about the crew, specialties, and the type of work you want to win.]",
    primaryCta: "Request a Quote",
    secondaryCta: "View Our Work",
    underlaySrc: "/images/stock/construction.jpg",
    underlayAlt: "General construction job site",
    slides: [
      {
        src: "/images/stock/construction.jpg",
        alt: "General construction job site",
      },
      {
        src: "/images/stock/electrical.jpg",
        alt: "Electrical work on a job site",
      },
      {
        src: "/images/stock/concrete.jpg",
        alt: "Concrete and masonry work",
      },
    ],
  },
  trustItems: [
    "[Trust point 01]",
    "[Trust point 02]",
    "Free estimates",
    "[Trust point 03]",
  ],
  servicesEyebrow: "What we do",
  servicesHeading: "[Core services headline]",
  servicesLede:
    "[One sentence describing who you serve and the work you finish clean.]",
  services: [
    {
      number: "01",
      title: "[Service 01]",
      description: "Replace with a short description of this trade or offering.",
    },
    {
      number: "02",
      title: "[Service 02]",
      description: "Replace with a short description of this trade or offering.",
    },
    {
      number: "03",
      title: "[Service 03]",
      description: "Replace with a short description of this trade or offering.",
    },
    {
      number: "04",
      title: "[Service 04]",
      description: "Replace with a short description of this trade or offering.",
    },
  ],
  proof: {
    eyebrow: "In the field",
    heading: "Featured project proof",
    caption:
      "[Caption for equipment, crews, or completed jobs. Replace placeholder media below.]",
    videoLabel: "[Featured Project Title]",
    videoSrc: "",
    // Add a client clip at /videos/featured-project.mp4 and set videoSrc to "/videos/featured-project.mp4"
    poster: "/images/stock/construction.jpg",
    gallery: [
      {
        src: "/images/stock/construction.jpg",
        label: "Construction",
        caption: "General construction and remodel work.",
      },
      {
        src: "/images/stock/electrical.jpg",
        label: "Electrical",
        caption: "Electrical installs and service work.",
      },
      {
        src: "/images/stock/concrete.jpg",
        label: "Concrete",
        caption: "Concrete and masonry job-site work.",
      },
      {
        src: "/images/stock/landscaping.jpg",
        label: "Landscaping",
        caption: "Lawn and landscaping field work.",
      },
    ],
  },
  estimate: {
    eyebrow: "Free quote",
    heading: "Tell us about the job. We’ll call you back with a straight answer.",
    lede: "[Who you serve and what they should expect after submitting this form.]",
    points: [
      "Call [Phone Number] if you want to talk it through now.",
      "Serving [City], [County], and surrounding areas.",
      "Typical hours: [Weekday hours] · [Saturday hours]",
    ],
    serviceOptions: ["[Service 01]", "[Service 02]", "[Service 03]", "Other"],
    descriptionPlaceholder: "What work needs to be done?",
  },
  careers: {
    eyebrow: "Careers",
    heading: "Join our crew",
    lede:
      "[One sentence about the kind of people you hire, how the crew works, and why someone should apply.]",
    applyEyebrow: "Apply now",
    applyHeading: "Ready to get on the crew?",
    applyLede:
      "Call the shop or send a short email. Tell us the role you want and where you’ve worked.",
    callCta: "Call the shop",
    emailCta: "Email to apply",
    roles: [
      {
        number: "01",
        title: "Equipment Operator",
        type: "Full-time",
        description:
          "Replace with the machines, job sites, and experience this role needs.",
      },
      {
        number: "02",
        title: "Service Technician",
        type: "Full-time",
        description:
          "Replace with the service calls, installs, or repairs this role owns.",
      },
      {
        number: "03",
        title: "[Open Role 03]",
        type: "Full-time / Seasonal",
        description: "Replace with another position you hire for, or remove this card.",
      },
    ],
  },
  footerBlurb:
    "[One-sentence summary of the business, trades, and service area.]",
} as const;

export type SiteConfig = typeof site;
