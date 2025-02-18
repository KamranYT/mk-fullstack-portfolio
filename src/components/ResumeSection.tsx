"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import FullResumeModal from "@/components/FullResumeModal";

export default function ResumeSection() {
  const [showFullResume, setShowFullResume] = useState(false);

  return (
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
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Muhammad_Kamran_Resume.pdf";
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
  );
}