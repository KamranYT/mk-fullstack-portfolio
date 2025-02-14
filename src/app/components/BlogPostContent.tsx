'use client';
import { motion } from 'framer-motion';
import { BlogPost } from '../types';

export default function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12"
    >
      <article className="max-w-4xl mx-auto px-6">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4"
        >
          {post.title}
        </motion.h1>
        <motion.time
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 block mb-8"
        >
          {post.date}
        </motion.time>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="prose max-w-none"
        >
          {post.content}
        </motion.div>
      </article>
    </motion.main>
  );
} 