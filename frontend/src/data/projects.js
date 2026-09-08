export const projectImages = {
    loop: "/assets/projects/loop.png",
    voltpath: "/assets/projects/voltpath.png",
    cravings: "/assets/projects/cravings.png",
    chatapp: "/assets/projects/chatapp.png",
    "location-finder": "/assets/projects/location-finder.png",
    "dice-game": "/assets/projects/dice-game.png",
    "jokes-app": "/assets/projects/jokes-app.png",
    "weather-app": "/assets/projects/weather-app.png",
    "password-manager": "/assets/projects/password-manager.png",
    "image-editor": "/assets/projects/image-editor.png",
};

export const projectNotes = {
    "location-finder":
        "DOM manipulation, event handling and coordinating UI state — markers, sound and map modes — in vanilla JavaScript.",
    "dice-game":
        "Game state management, turn-based logic and CSS animation timing in vanilla JavaScript.",
    "jokes-app":
        "Fetching and rendering third-party API data, plus building a bilingual UI with an instant theme toggle.",
    "weather-app":
        "Working with a live weather API — async fetch, loading states, and user-facing error handling for invalid city names.",
    "password-manager":
        "CRUD operations against localStorage and the clipboard API, with attention to simple, clear UX.",
    "image-editor":
        "The Canvas API — pixel-level filters, rotate/flip transformations, and exporting the edited image.",
};

export const projectVideos = {
    loop: "mZ824sQNh6A",
};

export const projects = [
    {
        slug: "loop",
        num: "01",
        title: "LOOP",
        subtitle: "AI Customer Feedback Intelligence Platform",
        category: "AI Platform",
        period: "Zidio Development Internship",
        featured: true,
        icon: "sparkles",
        gradient: "from-sky-600/90 via-indigo-700/90 to-violet-800/90",
        description:
            "An AI-powered platform that turns raw customer feedback into actionable intelligence — with multi-tenant workspaces, role-based access, analytics, and Gemini-driven classification, themes and trends.",
        stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "NextAuth", "pgvector", "Google Gemini AI"],
        github: "https://github.com/goutamkushwah/Project-loop",
        demo: "https://zidio-loop.vercel.app/",
        features: [
            "Multi-tenant workspaces for separating teams and products",
            "Role-based access control for workspace members",
            "Feedback ingestion via single entry and CSV bulk upload",
            "Analytics dashboard for feedback volume and sentiment patterns",
            "AI-powered feedback classification, themes and trend detection",
            "Ask LOOP — conversational AI querying over feedback data",
            "Member management and reporting",
            "Vector-based semantic capabilities with pgvector",
        ],
        caseStudy: {
            overview:
                "LOOP is a customer feedback intelligence platform built during my Web Developer internship at ZIDIO Development. It helps product teams collect, organize and understand customer feedback at scale — combining a structured data pipeline with AI-powered analysis so teams can move from raw comments to clear themes, trends and answers.",
            problem:
                "Product teams collect feedback across many channels, but it piles up as unstructured text. Manually reading, tagging and summarizing hundreds of entries doesn't scale — patterns emerge too late, and decisions get made on anecdote instead of evidence.",
            solution:
                "LOOP centralizes feedback into multi-tenant workspaces, supports both single-entry and CSV bulk ingestion, and layers Google Gemini AI on top for automatic classification, theme extraction and trend detection. Vector embeddings via pgvector enable semantic search and the Ask LOOP conversational interface, so teams can literally ask questions of their feedback data.",
            approach:
                "The platform is built on Next.js with TypeScript end-to-end, PostgreSQL with Prisma as the data layer, and NextAuth for authentication with role-based access control. The pgvector extension adds embedding storage and similarity search directly inside Postgres, keeping the architecture cohesive instead of introducing a separate vector database.",
            challenges: [
                "Designing a multi-tenant data model where workspaces, members, roles and feedback stay cleanly isolated",
                "Integrating AI classification into the ingestion flow without blocking the user experience",
                "Combining relational queries with vector similarity search in a single PostgreSQL database",
                "Coordinating frontend, backend, database and AI feature work across a team using Agile practices",
            ],
            contribution:
                "I contributed to LOOP as part of the ZIDIO Development internship team — collaborating across frontend, backend, database and AI-powered features. My work included building and integrating features across the stack, debugging integration issues between layers, and maintaining code quality through reviews and Agile workflows.",
            outcome:
                "LOOP shipped as a working, deployed product used to demonstrate the internship team's full-stack and AI capabilities. It gave me hands-on experience with production-grade patterns: multi-tenancy, RBAC, AI integration, vector search and team-based Agile delivery.",
        },
    },
    {
        slug: "voltpath",
        num: "02",
        title: "VoltPath",
        subtitle: "Smart EV Route Planning Platform",
        category: "Full Stack",
        period: "Jan 2026 — Jun 2026",
        featured: false,
        icon: "route",
        gradient: "from-cyan-600/90 via-sky-700/90 to-indigo-800/90",
        description:
            "A full-stack EV route planning platform that helps drivers plan optimized electric vehicle journeys — with charging station discovery, route visualization, weather insights and secure authentication.",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Leaflet", "REST APIs"],
        github: "https://github.com/GauravAthode/VoltPath",
        demo: "https://volt-path.vercel.app/",
        features: [
            "EV route planning with optimized journey paths",
            "Charging station discovery along planned routes",
            "Interactive route visualization with Leaflet maps",
            "Integration with external routing APIs",
            "Weather insights relevant to the journey",
            "Charging station data surfaced on the map",
            "Google OAuth sign-in plus JWT-based authentication",
        ],
        caseStudy: {
            overview:
                "VoltPath is a MERN stack platform for planning electric vehicle journeys. It combines routing, charging-station discovery and live map visualization into a single experience, so EV drivers can plan trips with confidence instead of range anxiety.",
            problem:
                "Planning a long EV trip means juggling range limits, charger locations, and route options across separate tools. Drivers need one place that answers: which route do I take, and where do I charge along the way?",
            solution:
                "VoltPath lets users plan a route, visualize it on an interactive Leaflet map, and discover charging stations along the path. External routing APIs provide the path data, weather insights add context for the journey, and Google OAuth with JWT keeps user sessions secure and frictionless.",
            approach:
                "The backend is Express.js and Node.js with MongoDB for persistence, exposing REST APIs consumed by a React frontend styled with Tailwind CSS. Map rendering is handled by Leaflet, with external APIs for routing, weather and charging-station data. Authentication combines Google OAuth with JWT tokens.",
            challenges: [
                "Coordinating multiple external APIs — routing, weather and charging stations — into one coherent route plan",
                "Rendering performant, interactive map visualizations of routes and station markers",
                "Implementing a dual authentication flow with Google OAuth and JWT sessions",
            ],
            contribution:
                "I designed and built VoltPath end-to-end: the REST API layer, MongoDB data models, the React frontend, Leaflet map integration, and the authentication system with Google OAuth and JWT.",
            outcome:
                "VoltPath is live and deployed, demonstrating a complete MERN application that integrates third-party APIs, interactive maps and production authentication patterns.",
        },
    },
    {
        slug: "cravings",
        num: "03",
        title: "Cravings",
        subtitle: "Food Ordering Web Application",
        category: "Web Application",
        period: "Sep 2025 — Jan 2026",
        featured: false,
        icon: "food",
        gradient: "from-indigo-600/90 via-violet-700/90 to-purple-900/90",
        description:
            "A full-stack food ordering platform with user authentication, restaurant listings and a responsive UI — with architecture prepared for payments and order tracking.",
        stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
        github: "https://github.com/GauravAthode/Cravings",
        demo: null,
        features: [
            "User authentication and account flows",
            "Restaurant listings with browsable menus",
            "Fully responsive UI across devices",
            "REST APIs powering the frontend",
            "Modern, component-based React architecture",
            "Architecture prepared for payment and order tracking features",
        ],
        caseStudy: {
            overview:
                "Cravings is a MERN stack food ordering web application — the kind of product users interact with daily. It covers the core commerce loop: browsing restaurants, exploring listings, and authenticated user sessions, wrapped in a responsive interface.",
            problem:
                "Food ordering lives or dies on experience: listings must be fast to browse, the UI must work flawlessly on mobile, and the underlying architecture must be ready for the hard parts — payments, cart state and order tracking.",
            solution:
                "Cravings provides authenticated user flows, restaurant listings and a responsive React frontend backed by REST APIs. The data models and API structure were designed with payments and order tracking in mind, so those features can be added without re-architecting.",
            approach:
                "Built on the MERN stack — MongoDB for flexible menu and restaurant data, Express.js and Node.js exposing REST endpoints, and a component-driven React frontend that keeps the UI consistent and maintainable.",
            challenges: [
                "Structuring restaurant, menu and user data models that stay flexible for future order flows",
                "Keeping the UI fully responsive and touch-friendly across screen sizes",
                "Designing APIs that anticipate payment and order-tracking integration",
            ],
            contribution:
                "I built Cravings end-to-end — from the MongoDB schema and Express APIs to the React frontend and authentication flow.",
            outcome:
                "A complete, working full-stack application that strengthened my MERN fundamentals and my ability to design systems with future features in mind.",
        },
    },
    {
        slug: "chatapp",
        num: "04",
        title: "ChatApp",
        subtitle: "Real-Time Messaging Application",
        category: "Web Application",
        period: null,
        featured: false,
        icon: "chat",
        gradient: "from-sky-700/90 via-cyan-800/90 to-slate-900/90",
        description:
            "A real-time chat application built with the MERN stack and Socket.IO — featuring user authentication, live messaging and instant updates without page refreshes.",
        stack: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
        github: "https://github.com/GauravAthode/ChatApp",
        demo: null,
        features: [
            "Real-time messaging powered by Socket.IO",
            "User authentication",
            "Live updates delivered instantly to connected clients",
            "MERN stack architecture with a React frontend",
        ],
        caseStudy: {
            overview:
                "ChatApp is a real-time messaging application built on the MERN stack with Socket.IO. It explores the difference between request-response web apps and persistent, event-driven connections — messages arrive live, with no refresh.",
            problem:
                "Traditional web apps poll or refresh to show new data. Chat demands the opposite: a persistent connection where messages are pushed to every participant the moment they're sent.",
            solution:
                "Socket.IO maintains WebSocket connections between clients and the Node.js server, broadcasting messages in real time. User authentication gates access, and the MERN stack provides the application foundation around the socket layer.",
            approach:
                "Express.js and Node.js host both the REST endpoints and the Socket.IO server. MongoDB stores users and conversation data, while the React frontend subscribes to socket events for live updates.",
            challenges: [
                "Managing socket connection lifecycles alongside authenticated sessions",
                "Keeping UI state in sync with real-time server events",
            ],
            contribution:
                "I built the full application: authentication, the Socket.IO real-time layer, message persistence and the React chat interface.",
            outcome:
                "A working real-time application that deepened my understanding of event-driven architecture beyond standard REST patterns.",
        },
    },
    {
        slug: "location-finder",
        num: "05",
        title: "Location Finder",
        subtitle: "Interactive Map Explorer",
        category: "Mini Project",
        period: null,
        featured: false,
        icon: "map",
        gradient: "from-cyan-600/85 via-teal-700/85 to-slate-900/90",
        description:
            "Interactive map explorer for Indian states and world continents — dropdown selection, flag markers with hover effects, add markers one-by-one or all at once, clear-all and sound feedback.",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
        github: "https://github.com/GauravAthode/Location_Finder",
        demo: "https://indian-state-finder.netlify.app/",
    },
    {
        slug: "dice-game",
        num: "06",
        title: "Dice Game",
        subtitle: "Two-Player Dice Game",
        category: "Mini Project",
        period: null,
        featured: false,
        icon: "dice",
        gradient: "from-violet-600/85 via-purple-700/85 to-indigo-900/90",
        description:
            "Two-player turn-based dice game — roll to stack points, first to 100 wins, with a CSS dice-spin animation, roll sound effects and start/restart flow.",
        stack: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
        github: "https://github.com/GauravAthode/Dice-Game",
        demo: "https://playingwithdice.netlify.app/",
    },
    {
        slug: "jokes-app",
        num: "07",
        title: "Jokes App",
        subtitle: "Bilingual Joke Generator",
        category: "Mini Project",
        period: null,
        featured: false,
        icon: "laugh",
        gradient: "from-amber-500/80 via-orange-600/85 to-slate-900/90",
        description:
            "Bilingual jokes app in Hindi and English powered by JokeAPI — categories like Programming and Knock-Knock, a fresh joke on every fetch, and an instant dark-mode toggle.",
        stack: ["HTML", "JavaScript", "Bootstrap 5", "JokeAPI"],
        github: "https://github.com/GauravAthode/Jokes-App",
        demo: "https://jokesby.netlify.app/",
    },
    {
        slug: "weather-app",
        num: "08",
        title: "Weather App",
        subtitle: "Live Weather Lookup",
        category: "Mini Project",
        period: null,
        featured: false,
        icon: "weather",
        gradient: "from-sky-500/85 via-blue-700/85 to-indigo-900/90",
        description:
            "City weather lookup on the OpenWeatherMap API — real-time temperature, condition icons, humidity and wind speed, with graceful 'city not found' error handling.",
        stack: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
        github: "https://github.com/GauravAthode/Weather_App",
        demo: "https://weatherwithgoru.netlify.app/",
    },
    {
        slug: "password-manager",
        num: "09",
        title: "Password Manager",
        subtitle: "Browser-Based Credential Store",
        category: "Mini Project",
        period: null,
        featured: false,
        icon: "key",
        gradient: "from-slate-600/85 via-indigo-800/85 to-slate-950/90",
        description:
            "Local-first password manager — save site, username and password entries, then view, copy to clipboard or delete them, all persisted in browser localStorage.",
        stack: ["HTML", "CSS", "JavaScript", "localStorage"],
        github: "https://github.com/GauravAthode/Password_Manager",
        demo: "https://password-manage-by.netlify.app/",
    },
    {
        slug: "image-editor",
        num: "10",
        title: "Image Editor",
        subtitle: "Canvas Photo Editor",
        category: "Mini Project",
        period: null,
        featured: false,
        icon: "image",
        gradient: "from-pink-500/80 via-violet-700/85 to-slate-900/90",
        description:
            "Browser-based image editor — upload a photo, apply filters, rotate or flip, reset to the original and save the result, powered by the Canvas API.",
        stack: ["HTML", "CSS", "JavaScript", "Canvas API"],
        github: "https://github.com/GauravAthode/Image-Editor",
        demo: "https://gauravimageeditor.netlify.app/",
    },
].map((p) => ({ ...p, tier: p.category === "Mini Project" ? "mini" : "major" }));

export const projectFilters = [
    { key: "all", label: "All", count: projects.length },
    { key: "major", label: "Major Projects", count: projects.filter((p) => p.tier === "major").length },
    { key: "mini", label: "Mini Projects", count: projects.filter((p) => p.tier === "mini").length },
];
