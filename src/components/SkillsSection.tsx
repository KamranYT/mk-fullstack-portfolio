"use client";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SkillCard } from "@/components/SkillCard";

export default function SkillsSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-6">
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
  );
} 
