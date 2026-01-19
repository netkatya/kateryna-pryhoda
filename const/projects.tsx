import { Project } from "@/types/types";

export const projects: Project[] = [
  {
    title: "The Nail Touch",
    type: "commercial",
    description:
      "Modern commercial landing page for a beauty master with responsive layout, light/dark themes, and client-focused UI.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    image: "/img/projects/nail/nail-touch-main.jpg",
    live: "https://the-nail-touch.vercel.app",
    github: "https://github.com/netkatya/the-nail-touch",

    details: {
      role: "Lead Designer & Developer",
      collaboration:
        "Worked alongside another developer, but I was the main author and designer.",
      responsibilities: [
        "Created the visual style, color palette, and overall UI.",
        "Designed logo, icons, and all graphic elements.",
        "Developed the site structure and implemented SEO best practices.",
        "Built responsive and user-friendly layout for both desktop and mobile.",
      ],
      problemSolved:
        "The client provided minimal information and no clear visual direction. We turned the limited requirements into a fully designed, functional, and visually appealing website.",
      outcome:
        "The client was very satisfied with the result and didn’t request any further changes.",
    },

    gallery: [
      "/img/projects/nail/nail-touch-main.jpg",
      "/img/projects/nail/nail-touch-price.jpg",
      "/img/projects/nail/nail-touch-gallery.jpg",
      "/img/projects/nail/nail-touch-about.jpg",
      "/img/projects/nail/nail-touch-services.jpg",
      "/img/projects/nail/nail-touch-dark.jpg",
    ],
  },
  {
    title: "Nanny Services",
    type: "educational",
    description:
      "Modern web application with authentication, favorites functionality, and a fully responsive, user-friendly interface.",
    image: "/img/projects/nanny/nanny.jpg",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "Firebase"],
    live: "https://nanny-services-alpha-navy.vercel.app",
    github: "https://github.com/netkatya/nanny-services",
    details: {
      role: "Front-End Developer",
      collaboration: "Individual project – worked alone",
      responsibilities: [
        "Implemented the main page with responsive layout.",
        "Built login and registration functionality using React Hook Form.",
        "Added filtering and pagination for project listings.",
        "Integrated Firebase for backend services (authentication and database).",
        "Handled form validation and state management with React Hook Form.",
      ],
      problemSolved:
        "Needed to build a fully functional mini-project with proper authentication and data handling from scratch, ensuring smooth UX and correct form handling.",
      outcome:
        "Successfully developed a complete demo project demonstrating authentication, dynamic content, and data management. Project is fully functional and can serve as a learning portfolio piece.",
    },
    gallery: [
      "/img/projects/nanny/nannies-page.jpg",
      "/img/projects/nanny/nanny-filter.jpg",
      "/img/projects/nanny/nanny-register.jpg",
      "/img/projects/nanny/nanny.jpg",
    ],
  },
  {
    title: "ARI - Learn JavaScript",
    type: "personal",
    description:
      "Interactive JavaScript learning game with quizzes and live coding challenges, featuring multilingual support, modern animations, and a fully responsive UI.",
    image: "/img/projects/ari/ari-main.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    live: "https://js-game-seven-indol.vercel.app",
    github: "https://github.com/netkatya/js-game",
    details: {
      role: "Author, Lead, Front-End Developer, Partial Designer",
      collaboration:
        "Collaborated with a designer and another developer; I led the idea and design, while they assisted with content creation and technical implementation.",
      responsibilities: [
        "Developed the overall concept and structure of the learning platform.",
        "Designed the user interface and UX flow, focusing on interactive learning.",
        "Integrated Monaco Editor for live coding exercises.",
        "Implemented interactive quizzes for JavaScript practice.",
        "Worked on front-end functionality to provide an engaging, educational experience.",
      ],
      problemSolved:
        "Wanted to create an engaging way to practice JavaScript, since existing materials felt monotonous. Needed a platform combining interactivity, coding exercises, and learning content.",
      outcome:
        "Created a fully functional learning site that made JavaScript practice interactive and engaging. The platform is unique in offering hands-on coding experiences with custom content. It has been used by real users, who provided positive feedback. Additionally, a couple of developer publications/articles were written about this project, highlighting its approach and implementation.",
    },
    gallery: [
      "/img/projects/ari/ari-main.jpg",
      "/img/projects/ari/ari-levels.jpg",
      "/img/projects/ari/ari-level-one.jpg",
      "/img/projects/ari/ari-level-three.jpg",
      "/img/projects/ari/ari-level-complete.jpg",
    ],
  },
  {
    title: "Cozy Corner",
    type: "educational",
    description:
      "Online store with authentication, product catalog, filtering, cart and favorites, user account, and Telegram-based password recovery.",
    image: "/img/projects/cozy/goods-cozy.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "https://online-shop-chi-flame.vercel.app",
    github: "https://github.com/netkatya/online-shop",
    details: {
      role: "Team Lead & Frontend Developer",
      collaboration:
        "Worked with 3 other developers on the backend; I implemented the frontend and coordinated the project",
      responsibilities: [
        "Created main page with store description and location",
        "Developed product pages with filtering, sorting, and pagination",
        "Implemented login, registration, and password recovery via Telegram",
        "Built shopping cart functionality and favorites system",
        "Integrated frontend with MongoDB backend",
        "Responsive design and interactive UI components",
        "Team project coordination",
      ],
      problemSolved:
        "Transformed a backend-only project into a full-fledged online store, providing complete frontend integration and user interactivity",
      outcome:
        "Project functions as a fully operational online store; users can browse, filter, and add items to cart",
    },
    gallery: [
      "/img/projects/cozy/cozy-main.jpg",
      "/img/projects/cozy/cozy-story-location.jpg",
      "/img/projects/cozy/goods-cozy.jpg",
      "/img/projects/cozy/login-cozy.jpg",
      "/img/projects/cozy/change-cozy.jpg",
      "/img/projects/cozy/telegram-cozy.jpg",
      "/img/projects/cozy/card-cozy.jpg",
      "/img/projects/cozy/my-acc-cozy.jpg",
    ],
  },
  {
    title: "Alien Survivor: Survival Arena",
    type: "commercial",
    description:
      "Responsive landing page for a video game company, built with HTML, CSS, and JavaScript for a clean and modern presentation.",
    image: "/img/projects/alien/alien-main.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vite"],
    live: "https://netkatya.github.io/STP-10194",
    github: "https://github.com/netkatya/STP-10194",
    details: {
      role: "Team Lead & Front-End Developer",
      collaboration: "Worked with one developer and a designer",
      responsibilities: [
        "Developed hero section with call-to-action button for downloading the game",
        "Created sections: Advantages, Features, Game Description, How to Play",
        "Built interactive gallery",
        "Implemented Contacts section and company information",
        "Added Privacy Policy, Terms & Conditions, and Cookies Policy pages",
        "Integrated smooth scrolling and interactive UI elements",
        "Added minimal animations and hover effects where appropriate",
        "Ensured responsive design for desktop and mobile devices",
      ],
      problemSolved:
        "The project had a very strict brief with minimal guidance on animations or interactive elements. Enhanced user experience and engagement while following the given requirements.",
      outcome:
        "Landing page fully functional, visually appealing, user-friendly, with smooth animations and clear presentation of game information.",
    },
    gallery: [
      "/img/projects/alien/alien-gallery.jpg",
      "/img/projects/alien/alien-howtoplay.jpg",
      "/img/projects/alien/alien-main.jpg",
    ],
  },
  {
    title: "Clothica - E-Commerce",
    type: "educational",
    description:
      "Full-stack online clothing store with catalog, order system, light/dark themes, Telegram-based password reset, email subscription functionality.",
    image: "/img/projects/clothica/clothica-goods.jpg",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    live: "https://clothica-shop.vercel.app",
    github: "https://github.com/netkatya/clothica-shop",
    details: {
      role: "Front-End Team Lead",
      collaboration: "Worked with a 12-person team.",
      responsibilities: [
        "Led front-end development and organized team tasks",
        "Developed product catalog with filtering, sorting, and pagination",
        "Implemented product details pages and cart functionality",
        "Built reviews system, including user-submitted reviews fetched from backend",
        "Created user account pages with order history",
        "Implemented order form and Telegram-based password recovery",
        "Added newsletter subscription via email",
        "Developed admin panel for managing orders and updating statuses",
        "Implemented language switcher (frontend only) and theme toggle",
        "Built Favorites page",
      ],
      problemSolved:
        "Short deadlines and complex interaction between frontend and backend required efficient coordination and rapid development to deliver all features successfully.",
      outcome:
        "Fully functional e-commerce platform with responsive design, complete user flow, admin management, and scalable frontend structure. Team collaboration and project delivery were successful.",
    },
    gallery: [
      "/img/projects/clothica/clothica-main.jpg",
      "/img/projects/clothica/clothica-card.jpg",
      "/img/projects/clothica/clothica-good.jpg",
      "/img/projects/clothica/clothica-goods.jpg",
      "/img/projects/clothica/clothica-my-orders.jpg",
      "/img/projects/clothica/clothica-order.jpg",
      "/img/projects/clothica/clothica-signin.jpg",
      "/img/projects/clothica/reviews.jpg",
    ],
  },
  {
    title: "Travel Trucks",
    type: "educational",
    description:
      "Responsive camper rental frontend with catalog, filtering, favorites, camper details, reviews and booking requests.",
    image: "/img/projects/campers/campers-filter.jpg",
    stack: ["Next.js", "TypeScript", "Tailwind", "REST API"],
    live: "https://travel-trucks-rent-five.vercel.app",
    github: "https://github.com/netkatya/travel-trucks-rent",
    details: {
      role: "Front-End Developer",
      collaboration: "Worked independently using a provided backend",
      responsibilities: [
        "Implemented catalog of campers available for rent",
        "Added filtering by city, equipment, and vehicle type",
        "Enabled favoriting of campers",
        "Developed detail pages with features and reviews",
        "Created booking form for camper reservations",
        "Ensured responsive design and smooth user experience",
      ],
      problemSolved: [
        "Integrated frontend with a pre-existing backend via REST API. Simulated a real-world technical assignment with limited guidance",
      ],
      outcome:
        "Project successfully simulates a real-world booking platform with full frontend functionality and responsive design",
    },
    gallery: [
      "/img/projects/campers/campers-main.jpg",
      "/img/projects/campers/campers-details.jpg",
      "/img/projects/campers/campers-filter.jpg",
      "/img/projects/campers/campers-reviews.jpg",
    ],
  },
  {
    title: "Booksy",
    type: "educational",
    description:
      "Responsive book search website with category-based search, external API integration, modal book details, and light/dark theme toggle.",
    image: "/img/projects/booksy/booksy-main.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Vite", "REST API"],
    live: "https://netkatya.github.io/project-js-06",
    github: "https://github.com/netkatya/project-js-06",
    details: {
      role: "Team Lead & Front-End Developer",
      collaboration:
        "Worked in a team of 9 members, organized task distribution and workflow",
      responsibilities: [
        "Implemented book catalog with filtering by genre",
        "Added pagination for catalog navigation",
        "Developed book detail pages with reviews and event information",
        "Created interactive carousel/swiper for featured content",
        "Implemented location section for store information",
        "Enabled light/dark theme switching",
        "Managed team workflow and task allocation",
      ],
      problemSolved: [
        "Coordinated work among 9 team members to meet project deadlines",
        "Integrated various frontend features with consistency and responsive design",
      ],
      outcome:
        "Successfully delivered a fully functional team project with interactive features, responsive design, and smooth user experience",
    },
    gallery: [
      "/img/projects/booksy/booksy-main.jpg",
      "/img/projects/booksy/booksy-dark.jpg",
      "/img/projects/booksy/booksy-books.jpg",
    ],
  },
  {
    title: "Currency Exchange",
    type: "educational",
    description:
      "Responsive book search website with category-based search, external API integration, modal book details, and light/dark theme toggle.",
    image: "/img/projects/currency/currency-second.jpg",
    stack: ["Next.js", "Tailwind", "TypeScript", "REST API"],
    live: "https://next-blended-team-project.vercel.app",
    github: "https://github.com/netkatya/currency-exchange",
    details: {
      role: "Front-End Developer",
      collaboration:
        "Team project with 4 members, focused on practicing API integration",
      responsibilities: [
        "Implemented currency converter using a public API",
        "Added input for custom amount conversion",
        "Enabled selection of any currency for conversion",
        "Displayed exchange rates dynamically based on selected currency",
        "Automatically detected user's local currency based on location",
        "Provided manual selection of currency to view exchange rates",
      ],
      problemSolved: [
        "Practiced integrating a public API and handling dynamic data. Coordinated work in a small team while implementing responsive and user-friendly features",
      ],
      outcome:
        "Successfully created a functional and interactive currency conversion tool, demonstrating API integration skills and teamwork",
    },
    gallery: [
      "/img/projects/currency/currency-main.jpg",
      "/img/projects/currency/currency-second.jpg",
    ],
  },
];
