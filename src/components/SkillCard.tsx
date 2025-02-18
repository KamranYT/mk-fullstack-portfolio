'use client';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  name: string;
}

export function SkillCard({ name }: SkillCardProps) {
  return (
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
}