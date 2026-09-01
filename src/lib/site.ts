export const site = {
  businessName: "Your Business Name",
  shortName: "[Contractor Name]",
  tagline: "[Trade / Specialty]",
  phoneDisplay: "[Phone Number]",
  phoneTel: "tel:+15555550100",
  email: "[email@yourbusiness.com]",
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
    primaryCta: "Call [Phone Number]",
    secondaryCta: "Get a Free Estimate",
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
    // Add a client clip at /public/videos/featured-project.mp4 and set videoSrc to "/videos/featured-project.mp4"
    poster: "/placeholders/video-poster.svg",
    gallery: [
      {
        src: "/placeholders/gallery-1.svg",
        label: "[Project Photo 01]",
        caption: "Replace this placeholder with a client job-site photo.",
      },
      {
        src: "/placeholders/gallery-2.svg",
        label: "[Project Photo 02]",
        caption: "Replace this placeholder with a client job-site photo.",
      },
      {
        src: "/placeholders/gallery-3.svg",
        label: "[Project Photo 03]",
        caption: "Replace this placeholder with a client job-site photo.",
      },
      {
        src: "/placeholders/gallery-4.svg",
        label: "[Project Photo 04]",
        caption: "Replace this placeholder with a client job-site photo.",
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
  footerBlurb:
    "[One-sentence summary of the business, trades, and service area.]",
} as const;

export type SiteConfig = typeof site;
