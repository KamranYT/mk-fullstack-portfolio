"use client";
import { motion } from "framer-motion";
import { FiLayout } from "react-icons/fi";
import { FaCode, FaServer } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";

export default function ServicesSection() {
  const services = [
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
      icon: <FiLayout size={24} />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces with great user experience.",
    },
  ];

  return (
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
          {services.map((service, index) => (
            <motion.div
              key={index}
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
  );
} 
