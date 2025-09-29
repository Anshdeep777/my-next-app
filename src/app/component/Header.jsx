'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: 'Home', link: '/' },
    { name: 'About us', link: '/about-us' },
    { name: 'Projects', link: '/project' },
    { name: 'Events', link: '/events' },
    { name: 'Blogs', link: '/blogs' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`top-0 z-50 transition-all duration-500 ease-out
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100'
          : 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              </div>
              <span
                className={`text-2xl font-light tracking-wide transition-colors duration-300
                  ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}
              >
                SAE
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {links.map((item) => (
              <Link
                href={item.link}
                key={item.link}
                onClick={() => handleLinkClick(item.link)}
                className={`relative px-6 py-3 text-sm font-medium tracking-wide uppercase transition-all duration-300 group overflow-hidden
                  ${activeLink === item.link
                    ? scrolled
                      ? 'text-slate-900'
                      : 'text-slate-900'
                    : scrolled
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Animated underline */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out
                    ${activeLink === item.link
                      ? 'w-full bg-gradient-to-r from-gray-900 to-gray-900'
                      : 'w-0 bg-gray-900 group-hover:w-full'
                    }`}
                />
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100
                    ${scrolled ? 'bg-slate-50' : 'bg-slate-50'
                    }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
  <button
    className="px-8 py-3 text-sm font-medium tracking-wide transition-all duration-300
    bg-black text-white border border-transparent rounded-full hover:bg-gray-800 hover:shadow-xl"
  >
    Contact Us
  </button>
</div>


          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full transition-colors duration-200"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`w-full h-0.5 transition-all duration-300 origin-center
                ${scrolled ? 'bg-slate-900' : 'bg-white'}
                ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`w-full h-0.5 transition-all duration-300
                ${scrolled ? 'bg-slate-900' : 'bg-white'}
                ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 transition-all duration-300 origin-center
                ${scrolled ? 'bg-slate-900' : 'bg-white'}
                ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ease-out overflow-hidden
        ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-100">
          <nav className="px-6 py-4 space-y-2">
            {links.map((item) => (
              <Link
                href={item.link}
                key={item.link}
                onClick={() => handleLinkClick(item.link)}
                className={`block px-4 py-3 text-base font-medium tracking-wide uppercase transition-all duration-200 rounded-lg
                  ${activeLink === item.link
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <button className="w-full px-4 py-3 bg-slate-900 text-white text-base font-medium tracking-wide rounded-lg hover:bg-slate-800 transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
