import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FullResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullResumeModal({ isOpen, onClose }: FullResumeModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Full Resume</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold">Bachelor in Computer Science</h3>
                <p className="text-muted-foreground">University Name</p>
                <p className="text-sm text-muted-foreground">2019 - 2023</p>
                <ul className="list-disc list-inside mt-2 text-muted-foreground">
                  <li>GPA: 3.8/4.0</li>
                  <li>Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                  <li>Senior Project: Full-Stack E-commerce Platform</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold">Senior Full Stack Developer</h3>
                  <p className="text-muted-foreground">Company Name</p>
                  <p className="text-sm text-muted-foreground">2021 - Present</p>
                  <ul className="list-disc list-inside mt-2 text-muted-foreground">
                    <li>Led development of multiple web applications using Next.js and Node.js</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                    <li>Implemented CI/CD pipelines using GitHub Actions</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Frontend</h3>
                  <p className="text-muted-foreground">React, Next.js, TypeScript, TailwindCSS</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Backend</h3>
                  <p className="text-muted-foreground">Node.js, Express, MongoDB, PostgreSQL</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        <div className="flex justify-end mt-6">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
