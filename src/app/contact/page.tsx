'use client'
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Linkedin, Twitter, Github, Facebook } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  async function handleSubmit(formData: FormData) {
    try {
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        to: 'mk7275374@gmail.com', // Your email address
      };

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Failed to send email');
      
      setStatus({ 
        type: 'success', 
        message: 'Thank you for your message! I will get back to you soon.' 
      });
    } catch {
      setStatus({ 
        type: 'error', 
        message: 'There was an error sending your message. Please try again.' 
      });
    }
  }

  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-12 bg-background"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center"
        >
          Get in Touch
        </motion.h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <Mail className="h-5 w-5 text-blue-600" />
                  <a href="mailto:mk7275374@gmail.com" className="text-blue-600 hover:underline">
                    mk7275374@gmail.com
                  </a>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <span>Karachi, Pakistan</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                  className="space-y-2"
                >
                  <h3 className="font-semibold">Availability</h3>
                  <div className="text-sm text-gray-600">
                    <p>Business Hours: Mon-Fri, 9:00 AM - 6:00 PM IST</p>
                    <p>Typical Response Time: Within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.57, duration: 0.5 }}
                  className="space-y-2"
                >
                  <h3 className="font-semibold">Preferred Contact</h3>
                  <p className="text-sm text-gray-600">
                    For quickest response, please reach out via email or WhatsApp.
                    Available for video calls by appointment.
                  </p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.58, duration: 0.5 }}
                  className="space-y-2"
                >
                  <h3 className="font-semibold">Quick Connect on WhatsApp</h3>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://wa.me/+923313007384"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5" />
                    Chat on WhatsApp
                  </motion.a>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="space-y-2"
                >
                  <h3 className="font-semibold">Connect</h3>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://github.com/KamranYT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://web.facebook.com/profile.php?id=100080963443012"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <Facebook className="h-5 w-5" />
                      Facebook
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href="https://x.com/MuhammadKa31378?t=Icz5q6U4T9WSdL7h15Y7Wg&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <Twitter className="h-5 w-5" />
                      Twitter
                    </motion.a>
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form action={handleSubmit} className="space-y-6">
                  {status.message && (
                    <Alert variant={status.type === 'success' ? 'default' : 'destructive'}>
                      <AlertDescription>{status.message}</AlertDescription>
                    </Alert>
                  )}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input type="text" id="name" name="name" required placeholder="Your name" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input type="email" id="email" name="email" required placeholder="your@email.com" />
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea id="message" name="message" required placeholder="Your message" rows={6} />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
} 

