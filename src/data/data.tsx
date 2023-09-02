import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import heroImage from "../images/header-background.jpg";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.png";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import profilepic from "../images/profilepic.jpg";
import testimonialImage from "../images/testimonial.jpg";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Welcome to my home ♥",
  description: "My portfolio",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Nam.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">Android/Back-end Developer. </strong>My will is to
        build a modern, mobile-first website and Android application.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me playing{" "}
        <strong className="text-stone-100">video games</strong> or watching
        <strong className="text-stone-100"> anime, comics</strong> to improve my
        <strong className="text-stone-100"> Japanese</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `With strengths is the ability to think logically to solve problems along with the interest in study new technologies, I
  want to improve my skill and learn new knowledge when working in a professional environment and experienced
  seniors.`,
  aboutItems: [
    {
      label: "Location",
      text: "Thu Duc City, Ho Chi Minh City",
      Icon: MapIcon,
    },
    {
      label: "Age",
      text: "22",
      Icon: CalendarIcon,
    },
    {
      label: "Nationality",
      text: "Vietnam",
      Icon: FlagIcon,
    },
    {
      label: "Interests",
      text: "Anime, comic, video games",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "Ho Chi Minh University of Technology and Education",
      Icon: AcademicCapIcon,
    },
    {
      label: "Former employee",
      text: "Miagi Solution",
      Icon: BuildingOffice2Icon,
    },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 7,
      },
      {
        name: "Japanese",
        level: 2,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Java",
        level: 7,
      },
      {
        name: "Kotlin",
        level: 7,
      },
      {
        name: "C#",
        level: 7,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "Java",
        level: 7,
      },
      {
        name: "Kotlin",
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "MUSIC",
    description: "An Android application about music.",
    url: "/",
    image: porfolioImage1,
  },
  {
    title: "Nichigas",
    description: "A Back-end API application",
    url: "https://www.nichigas.co.jp/en",
    image: porfolioImage2,
  },
  {
    title: "TODO",
    description: "An Android application about notes.",
    url: "/",
    image: porfolioImage3,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "Aug 2019 - Aug 2023",
    location: "HCMC University of Technology and Education",
    title: "Information Technology",
    content: (
      <p>
        My major is software technologies. This is my second home and it helps me to become a
        developer.
      </p>
    ),
  },
  {
    date: "Feb 2023 - Aug 2023",
    location: "Miagi Solution",
    title: "Intern Developer",
    content: (
      <p>
        I'm an intern developer in this place with an only misson: Making my first step to developer
        world outside my university.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "Feb 2023 - Aug 2023",
    location: "Miagi Solution",
    title: "Developer",
    content: (
      <p>
        In this company, I'm an intern developer and work with Java (Back-end API application with
        Spring Boot), Python Flask (Front-end application), C# (Windows Forms application).
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: "Vo Van Hoi - Developer at Miagi Solution",
      text: "During the internship, students have a good attitude and complete assigned work. In the future, he needs to improve his knowledge to develop further.",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch",
  description: "If you want to contact me, please take a look at below.",
  items: [
    {
      type: ContactType.Email,
      text: "namcao502@gmail.com",
      href: "mailto:namcao502@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Thu Duc City, Ho Chi Minh City",
      href: "https://goo.gl/maps/838Vegnm4V3r4tfa9",
    },
    {
      type: ContactType.Github,
      text: "namcao502",
      href: "https://github.com/namcao502",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/namcao502",
  },
];
