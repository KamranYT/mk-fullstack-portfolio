import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Subscribe to my newsletter for the latest updates</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Me</h3>
            <p className="text-gray-600 mb-4">
              A passionate developer focused on creating interactive and user-friendly applications.
              Specialized in modern web technologies and committed to delivering high-quality solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-blue-600 transition duration-300">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <FaGithub size={20} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <FaLinkedinIn size={20} /> LinkedIn
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <FaTwitter size={20} /> Twitter
              </a>
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300"
              >
                <FaEnvelope size={20} /> Email
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 
