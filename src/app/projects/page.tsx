"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Foodi Website",
    description: "Description of project 1",
    image: "/car2.png",
    technologies: ["React", "Next.Js", "Tailwind CSS"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Hekto Furniture",
    description: "Description of project 2",
    image: "/2nd.jpg",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/KamranYT/hack3-.git"
  },
  {
    title: "Growth Mindset",
    description: "Description of project 3",
    image: "/2nd.jpg",
    technologies: ["Python", "Streamlit"],
    demoLink: "https://github.com/KamranYT/python/blob/main/streamlit-apps/data-sweeper.py",
    codeLink: "https://mk-data-sweeper.streamlit.app/"
  },
  {
    title: "Unit Converter",
    description: "Description of project 4",
    image: "/2nd.jpg",
    technologies: ["Python", "UV", "Streamlit"],
    demoLink: "https://mk-unit-converter.streamlit.app/",
    codeLink: "https://github.com/KamranYT/python/blob/main/streamlit-apps/Unit_Converter.py"
  },
  {
    title: "Password Strength Meter",
    description: "Description of project 4",
    image: "/password-meter.png",
    technologies: ["Python", "UV", "Streamlit"],
    demoLink: "https://mk-password-generator.streamlit.app/",
    codeLink: "https://github.com/KamranYT/password-strength-meter.git"
  },
  {
    title: "ATM Machine",
    description: "Description of project 4",
    image: "/atm.png",
    technologies: ["Python", "UV", "Streamlit"],
    demoLink: "https://demo1.com",
    codeLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Word Count",
    description: "Description of project 4",
    image: "/word-count.png",
    technologies: ["Python", "UV", "Streamlit"],
    demoLink: "https://mk-word-count.streamlit.app/",
    codeLink: "https://github.com/KamranYT/python/blob/main/streamlit-apps/word_count_app.py"
  },
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
