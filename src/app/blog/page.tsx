"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "./data";

export default function Blog() {
  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-3">
                          {post.category}
                        </span>
                        <h2 className="text-2xl font-semibold">{post.title}</h2>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <CalendarDays className="w-4 h-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button variant="ghost" className="group">
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 
