'use client';

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <main className="container mx-auto min-h-screen py-24 px-4">
      <div className="space-y-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6">
            <div className="grid md:grid-cols-[2fr,3fr] gap-8 items-center">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/profile.png"
                  alt="Your Name"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight">Muhammad Kamran</h1>
                <p className="text-muted-foreground text-lg">
                  Passionate Full Stack Developer with expertise in building modern web applications and creating seamless user experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Full Stack Developer</Badge>
                  <Badge variant="secondary">UI/UX Designer</Badge>
                  <Badge variant="secondary">Tech Enthusiast</Badge>
                  <Badge variant="secondary">React.js</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Tabs defaultValue="background" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="background">Background</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="interests">Interests</TabsTrigger>
            </TabsList>
            
            <TabsContent value="background" className="space-y-6 mt-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-4">Education</h3>
                    <div className="space-y-4">
                      <div className="border-l-2 pl-4 border-primary">
                        <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                        <p className="text-muted-foreground">University of Engineering and Technology (2018-2022)</p>
                        <p className="mt-2">Focused on software engineering principles, web development, and database management.</p>
                      </div>
                      <div className="border-l-2 pl-4 border-primary">
                        <h4 className="font-medium">Certifications</h4>
                        <ul className="text-muted-foreground list-disc ml-4 space-y-2">
                          <li>AWS Certified Developer Associate</li>
                          <li>Meta Frontend Developer Professional Certificate</li>
                          <li>Google UX Design Professional Certificate</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="experience" className="mt-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="border-l-2 pl-4 border-primary">
                        <h4 className="font-medium">Senior Full Stack Developer</h4>
                        <p className="text-muted-foreground">TechCorp Solutions (2022 - Present)</p>
                        <ul className="mt-2 list-disc ml-4 space-y-2">
                          <li>Lead development of enterprise-level web applications using Next.js and Node.js</li>
                          <li>Implemented microservices architecture improving system scalability by 40%</li>
                          <li>Mentored junior developers and conducted code reviews</li>
                        </ul>
                      </div>
                      <div className="border-l-2 pl-4 border-primary">
                        <h4 className="font-medium">Frontend Developer</h4>
                        <p className="text-muted-foreground">Digital Innovations Inc. (2020 - 2022)</p>
                        <ul className="mt-2 list-disc ml-4 space-y-2">
                          <li>Developed responsive web applications using React.js and TypeScript</li>
                          <li>Collaborated with UI/UX team to implement pixel-perfect designs</li>
                          <li>Reduced page load times by 60% through optimization techniques</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="interests" className="mt-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="prose max-w-none dark:prose-invert space-y-4">
                      <h3 className="text-xl font-semibold">Professional Interests</h3>
                      <ul className="list-disc ml-4 space-y-2">
                        <li>Cloud Computing and Serverless Architecture</li>
                        <li>Web Performance Optimization</li>
                        <li>UI/UX Design Principles</li>
                        <li>Emerging Web Technologies</li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold pt-4">Personal Interests</h3>
                      <ul className="list-disc ml-4 space-y-2">
                        <li>Photography and Digital Art</li>
                        <li>Open Source Contributing</li>
                        <li>Tech Blogging</li>
                        <li>Hiking and Nature Exploration</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </main>
  );
}

export default About;
