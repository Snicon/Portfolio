import {
    bitbucket,
    freelancer,
    github,
    gulp,
    javascript,
    linkedin,
    nartryck,
    nodejs,
    sass,
    tailwindcss,
    vue,
    winterzone,
    react,
    django,
    python,
    php,
    laravel,
    opensource,
    mariadb,
    bootstrap,
    briefcase,
    smile,
    silenced,
    lightbulb,
    globe,
    chart
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "books",
        title: "Book recommendations",
    },
    {
        id: "foss",
        title: "Open source",
    },
];

export const work = [
    {
        id: "work-1",
        logo: winterzone,
        company: "WinterZone AB",
        link: "https://winterzone.se",
        title: "Co-founder & CTO",
        started: "2020",
        ended: "Present",
    },
    {
        id: "work-2",
        logo: nartryck,
        company: "Närtryck",
        link: "https://nartryck.se",
        title: "Intern",
        started: "2019",
        ended: "2019",
    },
    {
        id: "work3",
        logo: freelancer,
        company: "Freelancer",
        link: "#",
        title: "Software development & design",
        started: "2017",
        ended: "2020",
    },
];

export const books = [
    {
        id: "book-1",
        title: "Atomic Habits",
        author: "James Clear",
        icon: react
    },
    {
        id: "book-2",
        title: "THE LEAN STARTUP",
        author: "Eric Ries",
        icon: briefcase,
    },
    {
        id: "book-3",
        title: "Essentialism",
        author: "Greg McKeown",
        icon: smile,
    },
    {
        id: "book-4",
        title: "Digital Minimalism",
        author: "Cal Newport",
        icon: silenced,
    },
    {
        id: "book-5",
        title: "New Thinking",
        author: "Dagogo Altraide",
        icon: lightbulb,
    },
    {
        id: "book-6",
        title: "Life 3.0",
        author: "Max Tegmark",
        icon: globe,
    },
    {
        id: "book-7",
        title: "BUILDING A STORYBRAND",
        author: "Donald Miller",
        icon: chart,
    }
]

export const projects = [
    {
        id: "project-1",
        logo: winterzone,
        title: "WinterZone Website",
        link: "winterzone.se",
        description: "A simple landing website providing customers with information about how to reach out.",
        tech: [
            nodejs, javascript, vue, tailwindcss, bitbucket
        ],
    },
    {
        id: "project-2",
        logo: freelancer,
        title: "Old Portfolio",
        link: "old.snicon.rip",
        description: "A basic portfolio website used for redirecting people to my inbox and projects of mine.",
        tech: [
            nodejs, javascript, sass, gulp, bitbucket
        ],
    },
    {
        id: "project-3",
        logo: freelancer,
        title: "Current Portfolio (this site)",
        link: "snicon.rip",
        description: "A basic portfolio website used for redirecting people to my inbox and projects of mine.",
        tech: [
            nodejs, javascript, react, tailwindcss, bitbucket
        ],
    },
    {
        id: "project-4",
        logo: freelancer,
        title: "RealStudies (-> StudiesDB)",
        link: "github.com/Snicon/RealStudies",
        description: "An open source solution for studying groups promoting sharing of information and deadlines.",
        tech: [
            javascript, python, django, sass, github, opensource
        ],
    },
    {
        id: "project-5",
        logo: winterzone,
        title: "Lokstall1 (in development)",
        link: "lokstall1.winterzone.se",
        description: "A hybrid web shop / landing page built for a client with the goal of taking orders via e-mail.",
        tech: [
            javascript, php, laravel, mariadb, bootstrap, sass, bitbucket
        ],
    },
    {
        id: "project-6",
        logo: winterzone,
        title: "Blizzard (internal testing)",
        link: "To be announced",
        description: "A monitoring tool for websites and services notifying users of downtime of their services.",
        tech: [
            javascript, vue, php, laravel, mariadb, tailwindcss, bitbucket
        ],
    },
        {
        id: "project-7",
        logo: winterzone,
        title: "StudiesDB (in active development)",
        link: "studiesdb.com",
        description: "A school project of mine. It is a study platform by students for students.",
        tech: [
            javascript, php, laravel, mariadb, tailwindcss, bitbucket
        ],
    },
    {
        id: "project-8",
        logo: freelancer,
        title: "Polisongen",
        link: "polisongen.com",
        description: "My first ever website made for a client, while it is an earlier work of mine it is still live.",
        tech: [
            javascript, bootstrap, bitbucket
        ],
    },
];
export const contributions = [
    {
        id: "opensource-1",
        logo: freelancer,
        title: "Paymenter",
        link: "paymenter.org",
        description: "My contributions includes translations, front-end and information for new contributors.",
        tech: [
            javascript, tailwindcss, php, laravel, github, opensource
        ],
    },
    {
        id: "opensource-2",
        logo: freelancer,
        title: "RealStudies (inactive)",
        link: "github.com/Snicon/RealStudies",
        description: "An open source solution for studying groups promoting sharing of information and deadlines.",
        tech: [
            javascript, python, django, sass, github, opensource
        ],
    },
];

export const socialMedia = [
    {
        id: "social-media-1",
        icon: github,
        link: "https://github.com/Snicon",
    },
    {
        id: "social-media-2",
        icon: linkedin,
        link: "https://www.linkedin.com/in/snicon/",
    },
];