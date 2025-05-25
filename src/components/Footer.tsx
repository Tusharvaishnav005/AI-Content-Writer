import React from 'react';
import { PenTool, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-2 mb-4">
              <PenTool className="h-8 w-8 text-primary-500" />
              <span className="text-2xl font-bold">Abun</span>
            </a>
            <p className="text-gray-400 mb-4">
              AI-powered content writer that creates valuable content for your readers. Easy to use, professional results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Updates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Abun. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors duration-300 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;