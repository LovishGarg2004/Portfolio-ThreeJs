export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Hotel Explorer - A Dynamic Travel Site',
        desc: 'Hotel Explorer is a responsive travel website offering users the ability to search and explore hotels. With interactive features and a clean UI, the site fetches hotel data dynamically from a .json file, allowing users to filter by location and other criteria.',
        subdesc:
            'This project, built using HTML, CSS, and JavaScript, is my first attempt at creating a fully functional frontend application to test and showcase my web development skills. Currently, the site is non-responsive, focusing on dynamic content rendering and user interactivity.',
        href: 'https://lovishgarg2004.github.io/travel-website-frontend-project/',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html5-logo.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css-logo.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript-logo.png',
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/bootstrap-5-logo.png',
            },
        ],
    },
    {
        title: 'Simon Says Game - A Fun Memory Challenge',
        desc: 'This is a simple browser-based Simon Says game, where users test their memory by following an increasing sequence of colors. Built using JavaScript for interactivity and CSS for basic styling, the game progressively gets more challenging with each correct input.',
        subdesc:
            'As my first JavaScript project, this game was developed to enhance my frontend development skills. It uses HTML, CSS, and JavaScript but is not fully responsive yet.',
        href: 'https://lovishgarg2004.github.io/simon-says-game/',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html5-logo.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css-logo.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript-logo.png',
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/bootstrap-5-logo.png',
            },
        ],
    },
    {
        title: 'ToDo List Application',
        desc: 'A simple and interactive ToDo list app built using HTML, CSS, and JavaScript. It allows users to manage their daily tasks by adding, removing, and marking them as completed. The interface is intuitive and responsive, offering a seamless user experience.',
        subdesc:
            'This project was created to test and refine my frontend development skills. It features basic task management functionality and is fully responsive across different screen sizes.',
        href: 'https://todo-list-frontend-project.vercel.app/',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'HTML5',
                path: '/assets/html5-logo.png',
            },
            {
                id: 2,
                name: 'CSS',
                path: 'assets/css-logo.png',
            },
            {
                id: 3,
                name: 'JavaScript',
                path: '/assets/javascript-logo.png',
            },
            {
                id: 4,
                name: 'Bootstrap',
                path: '/assets/bootstrap-5-logo.png',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -6, 0] : isMobile ? [5, -5, 0] : isTablet ? [8, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [6, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [7, 2, 0] : [15, 3, 0],
        ringPosition: isSmall ? [-10, 7, 0] : isMobile ? [-10, 7, 0] : isTablet ? [-18, 4, 0] : [-28, 10, 0],
        targetPosition: isSmall ? [-5, -10, -19] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-15, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];