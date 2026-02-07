const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    subtitle:
      "Desktop application for managing patient appointments and records",
    description:
      "A Java-based desktop application developed as an academic project to manage hospital appointments and patient records. The system allows users to create, update, and organize appointments through a simple interface, applying object-oriented programming principles and structured data management.",
    excerpt:
      "Desktop application built with Java to manage patient appointments and hospital records.",
    stack: ["Java", "OOP", "Desktop Application", "MySQL"],
    links: {
      live: "",
      github: "https://github.com/Elatifi01/gestion-hopitalier",
    },
    images: ["/images/managementSystem.webp"],
    featured: true,
    date: "2022",
    category: "Desktop Application",
  },
  {
    id: 2,
    title: "SkillTracker",
    subtitle: "Learning progress tracker built with Django",
    description:
      "A full-stack web application built during a coding bootcamp to help users track their learning journey. The app allows users to manage skills, log daily study progress, set goals, and organize learning resources in one place. It includes user authentication, profile management, progress charts, and a personalized dashboard to visualize growth over time.",
    excerpt:
      "Django web app for tracking skills, study hours, goals, and learning resources.",
    stack: ["Python", "Django", "SQLite", "HTML", "CSS", "Chart.js"],
    links: {
      live: "",
      github: "YOUR_GITHUB_LINK_HERE",
    },
    images: [
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
    ],
    featured: true,
    date: "2025",
    category: "Web Application",
  },
  {
    id: 3,
    title: "Vroom — Car Loan Platform",
    subtitle: "Full-stack web app for browsing and financing vehicles",
    description:
      "A full-stack web application for browsing cars and simulating loan options, built with a React frontend and a Laravel REST API backend. The project follows a decoupled architecture, with separate repositories for the client and server. Currently in development, it focuses on clean UI, structured APIs, and a scalable application structure.",
    excerpt:
      "React and Laravel full-stack app for browsing vehicles and simulating car loans.",
    stack: ["React", "Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"],
    links: {
      live: "",
      github: "FRONTEND_REPO_LINK",
      api: "BACKEND_API_REPO_LINK",
    },
    images: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&q=80",
    ],
    featured: true,
    date: "2026",
    category: "Full-Stack Web Application",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    subtitle: "Online store with product catalog and order flow",
    description:
      "A full-stack e-commerce website built with PHP and MySQL, featuring a product catalog, search and filtering, a shopping cart, and a basic checkout flow. The project focuses on clean UI with HTML/CSS, interactive features with JavaScript, and structured CRUD operations on the backend for managing products and orders.",
    excerpt:
      "PHP & MySQL e-commerce site with product listings, cart, and checkout flow.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    links: {
      live: "",
      github: "",
    },
    images: [
      "https://images.unsplash.com/photo-1557825835-70d97c4aa567?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    ],
    featured: false,
    date: "2023",
    category: "Web Application",
  },
];

export default projects;
