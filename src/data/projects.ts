export interface Project {
  id: number;
  name: string;
  description: string;
  demoLink: string;
  sourceLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "AI Chat Assistant",
    description: "A real-time chat application powered by OpenAI's GPT-4, featuring streaming responses and conversation history.",
    demoLink: "https://ai-chat.example.com",
    sourceLink: "https://github.com/yourusername/ai-chat"
  },
  {
    id: 2,
    name: "Task Management Dashboard",
    description: "A full-stack task management application built with Next.js, Prisma, and PostgreSQL.",
    demoLink: "https://tasks.example.com",
    sourceLink: "https://github.com/yourusername/task-dashboard"
  },
  {
    id: 3,
    name: "E-commerce Platform",
    description: "A modern e-commerce solution with Stripe integration, shopping cart functionality, and user authentication.",
    demoLink: "https://shop.example.com",
    sourceLink: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    id: 4,
    name: "Weather Forecast App",
    description: "A weather application that provides real-time forecasts using OpenWeatherMap API with beautiful visualizations.",
    demoLink: "https://weather.example.com",
    sourceLink: "https://github.com/yourusername/weather-app"
  }
]; 