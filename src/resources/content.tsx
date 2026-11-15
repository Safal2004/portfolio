
import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
} from "@/types";

const person: Person = {
  firstName: "Safal",
  lastName: "Gawande",
  name: "Safal Gawande",
  role: "Backend Developer | DevOps",
  avatar: "/images/avatar.jpeg",
  email: "safalrgawande@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to Safal's Newsletter</>,
  description: <>Insights on backend development, cloud, and DevOps.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Safal2004",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/safal-gawande/",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/safalgawande12",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:safalrgawande@gmail.com",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "Safal Gawande's Portfolio",
  description:
    "Portfolio website showcasing my work in backend development, cloud computing, and DevOps.",

  headline: (
    <>
      Building scalable backend systems and cloud-native applications.
    </>
  ),

  featured: {
    display: false,
    title: <></>,
    href: "",
  },

  subline: (
    <>
      I'm Safal, a Computer Science undergraduate at IIIT Nagpur passionate
      about backend engineering, cloud computing, and DevOps.
      <br />
      I enjoy building scalable applications using Node.js, Django, Docker,
      AWS, and modern software engineering practices.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Learn more about ${person.name}`,

  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: true,
  },

  calendar: {
    display: false,
    link: "",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science student at IIIT Nagpur with a strong interest
        in backend engineering, cloud computing, and DevOps. I enjoy designing
        scalable backend systems, building REST APIs, and deploying
        applications using modern cloud infrastructure.
      </>
    ),
  },

  work: {
    display: true,
    title: "Experience",

    experiences: [
      {
        company: "Pitchmatter Holdings Inc.",

        timeframe: "July 2026 - October 2026",

        role: "DevOps Intern",

        achievements: [
          <>
            Deployed, configured, and maintained production applications on
            Liquid Web, managing server environments and application
            availability.
          </>,

          <>
            Set up Docker-based deployments with environment-specific
            configurations and CI/CD workflows, reducing manual release
            effort.
          </>,
        ],

        images: [],
      },

      {
        company:
          "Ministry of Home Affairs (MHA), Government of India",

        timeframe: "December 2025 - March 2026",

        role: "Research Intern",

        achievements: [
          <>
            Developed and enhanced front-end web pages, implementing new
            features and improving existing application functionality.
          </>,

          <>
            Fine-tuned Whisper and evaluated transcription performance,
            achieving approximately 70% improvement in Word Error Rate
            (WER).
          </>,
        ],

        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",

    institutions: [
      {
        name:
          "Indian Institute of Information Technology, Nagpur (IIIT Nagpur)",

        description: (
          <>
            Bachelor of Technology (B.Tech) in Computer Science and Engineering
            (2023 - Present)
          </>
        ),
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical Skills",

    skills: [
      {
        title: "Backend Development",

        description: (
          <>
            Building scalable REST APIs and backend systems using Node.js,
            Express.js, Django, and PostgreSQL.
          </>
        ),

        tags: [
          { name: "Node.js" },
          { name: "Express.js" },
          { name: "Django" },
          { name: "PostgreSQL" },
        ],

        images: [],
      },

      {
        title: "Cloud & DevOps",

        description: (
          <>
            Experience with AWS, Docker, GitHub Actions, CI/CD, Linux, Nginx,
            Terraform, and modern deployment workflows.
          </>
        ),

        tags: [
          { name: "AWS" },
          { name: "Docker" },
          { name: "GitHub Actions" },
          { name: "Linux" },
          { name: "Nginx" },
          { name: "Terraform" },
        ],

        images: [],
      },

      {
        title: "Frontend Development",

        description: (
          <>
            Building responsive and modern user interfaces using React.js,
            Next.js, Tailwind CSS, HTML, and CSS.
          </>
        ),

        tags: [
          { name: "React.js" },
          { name: "Next.js" },
          { name: "Tailwind CSS" },
        ],

        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Resume",
  title: `${person.name}'s Resume`,
  description: `View and download ${person.name}'s resume.`,
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Projects and systems built by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A collection of photos by ${person.name}`,
  images: [],
};

export {
  person,
  social,
  newsletter,
  home,
  about,
  blog,
  work,
  gallery,
};
