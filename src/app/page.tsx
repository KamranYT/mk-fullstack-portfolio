"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FiArrowRight,
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";
// import { SiPrisma, SiMongodb, SiPostgresql, SiDocker } from "react-icons/si";
import { FaCode, FaServer, FaMobileAlt } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTheme } from "next-themes";
import { useState } from 'react';
import FullResumeModal from '@/components/FullResumeModal';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [showFullResume, setShowFullResume] = useState(false);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6 bg-gradient-to-b from-background to-muted">
        <motion.button
          className="fixed top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm border border-border"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            Hi, I&apos;m Muhammad Kamran
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            A Full Stack Developer crafting exceptional digital experiences
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/projects">
                View My Work <FiArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/KamranYT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <FiGithub size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://web.facebook.com/profile.php?id=100080963443012"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <FiFacebook size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <FiLinkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary"
            >
              <FiTwitter size={24} />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "20+" },
              { label: "Happy Clients", value: "15+" },
              { label: "Technologies", value: "10+" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What I Do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaCode className="w-8 h-8" />,
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces with modern frameworks",
              },
              {
                icon: <FaServer className="w-8 h-8" />,
                title: "Backend Development",
                description: "Building robust server-side applications and APIs",
              },
              {
                icon: <FaMobileAlt className="w-8 h-8" />,
                title: "Mobile Development",
                description: "Developing cross-platform mobile applications",
              },
            ].map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">Project Name</h3>
                    <p className="text-muted-foreground mb-4">
                      Project description goes here...
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        View Demo
                      </Button>
                      <Button variant="ghost" size="sm">
                        Source Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Skills & Technologies
          </motion.h2>

          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="tools">Tools & Others</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["React", "Next.js", "TypeScript", "TailwindCSS"].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="backend">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Node.js", "Prisma", "MongoDB", "PostgreSQL"].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="tools">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Git", "Docker", "AWS", "Firebase"].map((skill) => (
                  <SkillCard key={skill} name={skill} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Resume & Experience
          </motion.h2>

          {/* Simplified Resume Preview */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Latest Experience</h3>
                <div className="space-y-2">
                  <h4 className="font-bold">Senior Full Stack Developer</h4>
                  <p className="text-muted-foreground">Company Name</p>
                  <p className="text-sm text-muted-foreground">2021 - Present</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Education</h3>
                <div className="space-y-2">
                  <h4 className="font-bold">Bachelor in Computer Science</h4>
                  <p className="text-muted-foreground">University Name</p>
                  <p className="text-sm text-muted-foreground">2019 - 2023</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => setShowFullResume(true)}>
              View Full Resume
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="/resume.pdf"
                download="Muhammad_Kamran_Resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Muhammad_Kamran_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume (PDF)
              </a>
            </Button>
          </div>
        </div>
        
        <FullResumeModal 
          isOpen={showFullResume} 
          onClose={() => setShowFullResume(false)} 
        />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What Clients Say
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "John Doe",
                role: "CEO, Tech Company",
                content: "Exceptional work and great communication throughout the project.",
              },
              {
                name: "Jane Smith",
                role: "Product Manager",
                content: "Delivered high-quality code and met all deadlines consistently.",
              },
            ].map((testimonial) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-6">
                    <p className="mb-4 italic">{testimonial.content}</p>
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const SkillCard = ({ name }: { name: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <Card>
      <CardContent className="flex items-center justify-center p-6">
        <span className="font-medium">{name}</span>
      </CardContent>
    </Card>
  </motion.div>
);

