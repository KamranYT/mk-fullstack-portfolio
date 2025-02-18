"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Doe",
      role: "CEO, Tech Solutions",
      content: "Exceptional work! Delivered the project on time with outstanding quality.",
    },
    {
      name: "Jane Smith",
      role: "Product Manager, Digital Corp",
      content: "Great communication and technical skills. Would definitely work with again.",
    },
    {
      name: "Mike Johnson",
      role: "CTO, Startup Inc",
      content: "Innovative solutions and attention to detail. Highly recommended!",
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
          What Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <p className="mb-4 italic">&quot;{testimonial.content}&quot;</p>
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
  );
} 
