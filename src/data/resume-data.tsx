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
import { GitHubIcon, LinkedInIcon, XIcon, InstagramIcon } from "@/components/icons";

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
      { name: "Instagram",
        url: "https://www.instagram.com/jpautomations/",
        icon: InstagramIcon,
      }
    ],
  },
  education: [
    {
      school: "The University of Texas at San Antonio",
      degree: "Bachelor's Degree in Mechanical Engineering",
      start: "2018",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Dassault Systemes",
      link: "https://www.3ds.com/",
      badges: ["Boston, MA"],
      title: "SOLIDWORKS Product Manager Intern",
      logo: ParabolLogo,
      start: "May 2024",
      end: "Present",
      description:
        "Focused on improving the SOLIDWORKS 3DExperience for beginner/intermediate users.",
    },
    {
      company: "Kiolbassa",
      link: "https://kiolbassa.com/",
      badges: ["San Antonio, TX"],
      title: "Lean Product Manager Intern",
      logo: ParabolLogo,
      start: "September 2023",
      end: "December 2023",
      description:
        "Focused on restructuring product planning and procurement through lean methodologies.",
    },
    {
      company: "Amazon Robotics",
      link: "https://www.aboutamazon.com/news/tag/robotics",
      badges: ["Travel role in the US"],
      title: "Project Engineer Co-op",
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
      title: "Chief Project Engineering Manager Co-op",
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
      title: "Gas Operations Engineer Intern",
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
      title: "Internship Finder",
      techStack: [
        "Next.js",
        "Javascript",
        "CSS",
        "Vercel V0",
        "Software",
        "GenUI"
      ],
      description: "Created an interactive page for students to search for internships utilizing V0 GenUI (still in progress)",
      logo: ConsultlyLogo,
      link: {
        label: "Internom8",
        href: "https://internships-git-nextjs-migration-julccrums-projects.vercel.app/",
      },
    },
    {
      title: "Landing Page Creation",
      techStack: [
        "HTML",
        "Figma",
        "Javascript",
        "CSS",
        "Vercel",
        "Software"
      ],
      description: "Created a landing page for my startup from scratch using fundamentals of web development after creating a mockup in Figma",
      logo: ConsultlyLogo,
      link: {
        label: "Jackpotautomations",
        href: "https://www.jackpotautomations.fyi",
      },
    },
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
        label: "jccrummedyo.me",
        href: "https://www.jccrummedyo.me/",
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
      techStack: ["SolidWorks", "Gantt Charts", "Product Life Cycle", "Project Management"],
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
        label: "canva.com", // Change link
        href: "https://www.canva.com/design/DAFVEwg1jt0/aNHzmiyxGSRIXbGDZ3IoPg/edit?utm_content=DAFVEwg1jt0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    },
    {
      title: "FSAE Chassis Build",
      techStack: ["Machining", "Welding", "Stress Analysis", "SolidWorks", "Mechanical Engineering", "Ansys"],
      description:
        "Created chassis in SolidWorks, assisted in welding frame rods, and determined mounting points for the engine",
      logo: BarepapersLogo,
      link: {
        label: "canva.com", // Change link
        href: "https://www.canva.com/design/DAFVEwg1jt0/aNHzmiyxGSRIXbGDZ3IoPg/edit?utm_content=DAFVEwg1jt0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
      },
    },
    {
      title: "Sumobot",
      techStack: ["Mechatronics", "3D Printing", "Arduino", "Wiring", "Product Design", "DFA"],
      description: "Created a sumobot using several electrical components and added a 3D printed shovel/ramp to compete in a competition",
      logo: YearProgressLogo,
      link: {
        label: "canva.com", // Change link
        href: "https://www.canva.com/design/DAF_4S8CWMY/gaoMa2yenzyloT8pbGXbYA/edit?utm_content=DAF_4S8CWMY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", // Change link
      },
    },
    {
      title: "Mechanical Gearbox Design",
      techStack: [
        "SolidWorks",
        "FEA",
        "Simulation",
        "FMEA",
        "MATLAB",
        "Project Management",
      ],
      description:
        "Engineered a gearbox to interface with a motor rotating at 1200 rpm, effectively reducing speed to 155 rpm",
      logo: ParabolLogo,
      link: {
        label: "github.com", // Add link
        href: "https://www.jccrummedyo.me/", // Change link
      },
    },
    {
      title: "Star Wars Buzzer",
      techStack: [
        "Programming",
        "Arduino",
        "Wiring",
        "Software",
        "Hardware",
      ],
      description:
        "Developed a device that plays the Star Wars theme song using a buzzer if the lights in the room are off",
      logo: EvercastLogo,
      link: {
        label: "https://www.jccrummedyo.me/", // Add link
        href: "https://www.jccrummedyo.me/", // Add link
      },
    },
    {
      title: "Tractor Design",
      techStack: ["SolidWorks", "Leadership", "Engineering drawings", "Assebbly"],
      description:
        "Led a group of 4 to build of an up-to-scale tractor in SolidWorks with over 50 parts and 10 sub-assemblies",
      logo: MobileVikingsLogo,
      link: {
        label: "https://www.jccrummedyo.me/", // Change link
        href: "https://www.canva.com/design/DAFVEwg1jt0/aNHzmiyxGSRIXbGDZ3IoPg/edit", // Change link
      },
    },
  ],
} as const;
