'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  demoLink,
  codeLink
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex gap-4">
            <Button asChild variant="default" size="sm">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <FiExternalLink className="mr-2" /> Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <FiGithub className="mr-2" /> Code
              </a>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 