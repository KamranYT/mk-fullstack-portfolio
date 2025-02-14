"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CalendarDays, Clock } from "lucide-react";
import { blogPosts } from "../data"; // We'll move the data to a separate file

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-2xl font-bold">Blog post not found</h1>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-6"
      >
        <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-3">
          {post.category}
        </span>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-8">
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
        <div className="prose dark:prose-invert max-w-none">
          {/* This is where you would put your blog post content */}
          <p>{post.excerpt}</p>
        </div>
      </motion.div>
    </main>
  );
} 
