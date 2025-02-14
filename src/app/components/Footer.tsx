'use client';
import Link from 'next/link';
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Muhammad Kamran</h3>
            <p className="text-muted-foreground">
              Full Stack Developer crafting digital experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About</Link>
              <Link href="/projects" className="text-muted-foreground hover:text-primary">Projects</Link>
              <Link href="/blog" className="text-muted-foreground hover:text-primary">Blog</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Karachi, Pakistan</p>
              <p>mk7275374@gmail.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/KamranYT" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FiGithub size={20} />
              </a>
              <a href="https://web.facebook.com/profile.php?id=100080963443012" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FiFacebook size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muhammad-kamran-916b752b4/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FiLinkedin size={20} />
              </a>
              <a href="https://x.com/MuhammadKa31378?t=Icz5q6U4T9WSdL7h15Y7Wg&s=09" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Muhammad Kamran. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
