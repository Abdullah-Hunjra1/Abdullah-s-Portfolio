const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title:
      "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Authentication",
    items: ["JWT", "Clerk"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Vercel"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#181717",
    link: "https://github.com/Abdullah-Hunjra1",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/instagram.png",
    bg: "#E4405F",
    link: "https://www.instagram.com/abdjutt_804/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#000000",
    link: "https://x.com/ABDJutt804",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#0A66C2",
    link: "https://www.linkedin.com/in/abdullah-jutt-8194bb279",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "TaskForge - Project Management Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "TaskForge Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "TaskForge is a modern full-stack project management platform built to help teams organize projects, manage tasks, and collaborate efficiently.",
            "It provides a centralized workspace where teams can create projects, assign tasks, track progress, and manage their work through an intuitive dashboard.",
            "The platform is built with React, Node.js, Express, and PostgreSQL, with Clerk handling authentication and Prisma managing database interactions.",
            "TaskForge also uses Inngest for background workflows and automated processes, making it a scalable and practical solution for modern team collaboration.",
          ],
        },
        {
          id: 2,
          name: "taskforge.vercel",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://task-forge-client.vercel.app",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "taskforge.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-99",
          imageUrl: "/images/taskforge-dash.png",
        },
        {
          id: 8,
          name: "taskforge1.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-60",
          imageUrl: "/images/taskforge-CreateProject.png",
        },
        {
          id: 9,
          name: "taskforge2.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-20",
          imageUrl: "/images/taskforge-team.png",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "NeuroDiary - AI Digital Diary",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[28vh] left-7",
      children: [
        {
          id: 1,
          name: "NeuroDiary Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-12 right-10",
          description: [
            "NeuroDiary is an AI-powered digital diary designed to help users capture their thoughts, track their moods, and gain meaningful insights through journaling.",
            "Instead of being just a place to write, it uses AI-powered sentiment analysis to understand the emotions behind journal entries and provide intelligent insights.",
            "Users can reflect on their thoughts, monitor their mood over time, and better understand their emotional patterns through a simple and intuitive experience.",
            "It's built with React, Node.js, Express, and MongoDB, with Groq AI powering its intelligent features and Stripe handling payment integration.",
          ],
        },
        {
          id: 2,
          name: "neurodiary.vercel",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://neuro-diary-frontend.vercel.app",
          position: "top-12 left-15",
        },
        {
          id: 4,
          name: "CreateNewEntry.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-5",
          imageUrl: "/images/neu-createEntry.png",
        },
        {
          id: 8,
          name: "UserDashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-48",
          imageUrl: "/images/neu-userdashboard.png",
        },
        {
          id: 9,
          name: "AdminDashboard.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-90",
          imageUrl: "/images/neu-admindashboard.png",
        },
      ],
    },

    // ▶ Project 3
{
  id: 7,
  name: "Connectify - Video Chat & Social App",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-10 left-80",
  windowPosition: "top-[50vh] left-7",
  children: [
    {
      id: 1,
      name: "Connectify Project.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "Connectify is an all-in-one social networking platform that brings real-time messaging, video calling, and social interactions together in one place.",
        "Users can connect with friends, send messages, make video calls, and interact through a modern and responsive social experience.",
        "It includes secure authentication, an onboarding flow, a friends system, protected routes, and customizable UI themes for a more personalized experience.",
        "It's built with React, Node.js, Express, and MongoDB, with real-time communication powered by Socket.IO and modern tools for a smooth and reliable user experience.",
      ],
    },
    {
      id: 2,
      name: "connectify.vercel",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://connectify-peach.vercel.app",
      position: "top-10 right-20",
    },
    {
      id: 4,
      name: "connectify.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-90",
      imageUrl: "/images/connectify.png",
    },
    {
      id: 8,
      name: "LoginPage.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-40",
      imageUrl: "/images/connectify-login.png",
    },
    
  ],
},
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpg",
    },
    {
      id: 2,
      name: "big-achievement.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/Linkedin.jpeg",
    },
    {
      id: 3,
      name: "my-fyp.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/fyp-book.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/abd1.png",
      description: [
        "Hey! I’m Abdullah 👋, a Full Stack MERN Developer who enjoys turning ideas into real-world web applications.",
        "I mostly work with JavaScript, React, Node.js, Express.js, and MongoDB, building everything from responsive user interfaces to complete full-stack applications.",
        "I enjoy solving problems, writing clean code, and creating products that are simple, useful, and easy to use.",
        "When I’m away from the code, I’m usually working on a new project, exploring something interesting, or thinking about what to build next.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/public/files/My-Resume.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash2.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };