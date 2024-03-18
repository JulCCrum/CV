import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Julian Chase Crummedyo",
  initials: "JC",
  location: "Houston, TX, USA",
  locationLink: "https://www.google.com/maps/place/Houston,+TX/@29.8155408,-96.0607242,9z/data=!3m1!4b1!4m6!3m5!1s0x8640b8b4488d8501:0xca0d02def365053b!8m2!3d29.7604267!4d-95.3698028!16zL20vMDNsMm4?entry=ttu",
  about:
    "Student of life focused on learning, growing, and building products with extra attention to detail",
  summary:
    "I'm an engineer and creative. I enjoy learning topics with meaning, because there's so much to learn and not enough time to learn everything. The more I learn, the more I realize that I know nothing. Learning helps me create, and creating helps me bring my ideas to life! Leading teams to a common goal allows me to learn and create at a faster rate as well as bring the best out of others. I'll let you learn more about who I am as you go through my website. Enjoy!",
  avatarUrl: "https://avatars.githubusercontent.com/u/101664366?s=96&v=4",
  personalWebsiteUrl: "https://cv-alpha-ten.vercel.app/",
  contact: {
    email: "chas3.crummedyo@gmail.com",
    tel: "+17135385882",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/JulCCrum",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/julian-crummedyo/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/ChaseBank_3k",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "The University of Texas at San Antonio",
      degree: "Bachelor's Degree in Mechanical Engineering (Pursuing Master's in Computer Science with Robotics Concentration)",
      start: "2018",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Kiolbassa",
      link: "https://kiolbassa.com/",
      badges: ["San Antonio, TX"],
      title: "Lean Product Manager",
      logo: ParabolLogo,
      start: "Septober 2023",
      end: "December 2023",
      description:
        "Focused on restructuring product planning and procurement through lean methodologies.",
    },
    {
      company: "Amazon Robotics",
      link: "https://www.aboutamazon.com/news/tag/robotics",
      badges: ["Travel role in the US"],
      title: "Project Engineer",
      logo: ClevertechLogo,
      start: "January 2023",
      end: "June 2023",
      description:
        "Led retrofit deployment of automated workstations (ARSAW), created onboarding and handoff documentation as well as identified cost reductions within different robot programs.",
    },
    {
      company: "Collins Aerospace",
      link: "https://www.collinsaerospace.com/",
      badges: ["Remote"],
      title: "Chief Project Engineering Manager",
      logo: JojoMobileLogo,
      start: "May 2022",
      end: "December 2022",
      description:
        "Collaborated with mutlidisciplinary engineers to escalate and facilitate issues in cross-functional teams in small commercial airplanes.",
    },
    {
      company: "Pacific Gas and Electric (PG&E)",
      link: "https://www.pge.com/en.html",
      badges: ["San Ramon, CA"],
      title: "Gas Operations Engineer",
      logo: NSNLogo,
      start: "May 2021",
      end: "August 2021",
      description: "Managed thousands of gas line data points within California, identifying damaged gas lines dating back 40+ years of data.",
    },
  ],
  skills: [
    "CAD",
    "Materials",
    "React/Next.js",
    "Node.js",
    "MATLAB",
    "Project Management",
    "Machining",
    "Graphic design",
    "Figma/Flutter",
    "Social media management",
    "Product roadmapping",
  ],
  projects: [
    {
      title: "Website Build",
      techStack: [
        "Version Control",
        "TypeScript",
        "Next.js",
        "Javascript",
        "CSS",
        "Hosting",
        "Software"
      ],
      description: "Created this website by changing the structure, adding icons, and deploying the website",
      logo: ConsultlyLogo,
      link: {
        label: "cv-alpha-ten.vercel.app",
        href: "https://cv-alpha-ten.vercel.app/",
      },
    },
    {
      title: "Ping Pong Game",
      techStack: ["Software", "MATLAB", "Animation", "Gaming"],
      description: "Created a single player ping pong game in MATLAB that continues until the player loses",
      logo: MonitoLogo,
      link: {
        label: "github.com/JulCCrum/Ping-Pong-game",
        href: "https://github.com/JulCCrum/Ping-Pong-game",
      },
    },
    {
      title: "Motorized Bulletproof Podium",
      techStack: ["SolidWorks", "Gantt Charts", "Product Life Cycle", "Project Management", "Electrical Wiring"],
      description:
        "Led the build of a motorized machanism that transports a 2000 lb podium 2+ mph from idea to finished product",
      logo: JarockiMeLogo,
      link: {
        label: "utsacloud-my.sharepoint.com/:p:/g/personal/julian_crummedyo_my_utsa_edu/EQXbunGD4zNPs3oRAqOLS6EBFLhh5NRZeQqb9Z8SARqvmA?e=8TNLMY",
        href: "https://utsacloud-my.sharepoint.com/:p:/g/personal/julian_crummedyo_my_utsa_edu/EQXbunGD4zNPs3oRAqOLS6EBFLhh5NRZeQqb9Z8SARqvmA?e=8TNLMY",
      },
    },
    {
      title: "Stainless Steel Hammer",
      techStack: ["Machining", "Drilling", "Milling", "Engineering Drawings", "Polishing", "Mechanical Engineering"],
      description:
        "Created a 2 piece stainless steel hammer from scrap metal and engraved the hammer",
      logo: Minimal,
      link: {
        label: "useminimal.com", // Change link
        href: "https://useminimal.com/",
      },
    },
    {
      title: "FSAE Chassis Build",
      techStack: ["Machining", "Welding", "Stress Analysis", "Mechanical Engineering", "Ansys"],
      description:
        "Created chassis in SolidWorks, assisted in welding frame rods, and determined mounting points for the engine",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com", // Change link
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
