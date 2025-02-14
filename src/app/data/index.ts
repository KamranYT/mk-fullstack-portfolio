import { Project, BlogPost } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js and Stripe integration",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    demoLink: "https://demo-ecommerce.com",
    codeLink: "https://github.com/yourusername/ecommerce"
  },
  {
    id: '2',
    title: "Task Management App",
    description: "A real-time task management application with team collaboration features",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    demoLink: "https://demo-taskmanager.com",
    codeLink: "https://github.com/yourusername/taskmanager"
  },
  // Add more projects...
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: "Getting Started with Next.js 13",
    excerpt: "Learn how to build modern web applications with Next.js 13 and its new app directory...",
    date: "2024-01-15",
    slug: "getting-started-nextjs-13",
    content: "Full blog post content here..."
  },
  {
    id: '2',
    title: "Mastering TypeScript",
    excerpt: "Essential TypeScript concepts every developer should know...",
    date: "2024-01-10",
    slug: "mastering-typescript",
    content: "Full blog post content here..."
  },
  // Add more blog posts...
]; 