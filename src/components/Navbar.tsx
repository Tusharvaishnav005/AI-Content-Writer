import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, PenTool } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
    {
      name: 'Resources',
      href: '#',
      submenu: [
        { name: 'Blog', href: '#blog' },
        { name: 'Documentation', href: '#docs' },
        { name: 'Support', href: '#support' },
      ],
    },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <PenTool className="h-8 w-8 text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">Abun</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={index} className="relative group">
                {link.submenu ? (
                  <button
                    className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                )}

                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {link.submenu.map((subLink, subIndex) => (
                      <a
                        key={subIndex}
                        href={subLink.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="text-gray-600 hover:text-primary-600 transition-colors duration-300">
              Log in
            </a>
            <Button variant="primary" size="md">
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-primary-600 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link, index) => (
                <div key={index}>
                  {link.submenu ? (
                    <div className="relative">
                      <button
                        className="flex items-center justify-between w-full text-gray-600 hover:text-primary-600 transition-colors duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          // Toggle submenu logic here if needed
                        }}
                      >
                        <span>{link.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </button>
                      <div className="pl-4 mt-2 space-y-2">
                        {link.submenu.map((subLink, subIndex) => (
                          <a
                            key={subIndex}
                            href={subLink.href}
                            className="block text-sm text-gray-600 hover:text-primary-600 transition-colors duration-300"
                          >
                            {subLink.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-4 border-t border-gray-200">
                <a
                  href="#login"
                  className="block text-gray-600 hover:text-primary-600 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Log in
                </a>
                <Button variant="primary" size="md" fullWidth onClick={() => setIsOpen(false)}>
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;