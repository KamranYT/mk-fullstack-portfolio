"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Project 1",
    description: "Description of project 1",
    image: "/car2.png",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 2",
    description: "Description of project 2",
    image: "/2nd.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 3",
    description: "Description of project 3",
    image: "/2nd.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Project 4",
    description: "Description of project 4",
    image: "/2nd.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/yourusername/project1"
  },
  // Add more projects
];

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h1 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={800}
                    height={400}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Button variant="outline" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 
