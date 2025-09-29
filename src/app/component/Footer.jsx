import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className="bg-blue-50  text-black-900">
      <div className="w-full mx-auto px-4 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* IIT BHU Image */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <img 
              src="iit-bhu.png" 
              alt="IIT BHU" 
              className="w-32 h-32 object-contain rounded-full shadow-lg"
            />
            <p className="text-center text-blue-400 text-sm">
              Proudly affiliated with IIT BHU
            </p>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-400">SAE</h3>
            <p className="text-black text-sm leading-relaxed">
              Building amazing digital experiences with passion and creativity. 
              Your trusted partner for innovative solutions.
            </p>
           <div className="flex space-x-4">
  <Facebook className="w-5 h-5 text-blue-600 hover:text-blue-800 cursor-pointer transition-colors" />
  <Twitter className="w-5 h-5 text-sky-400 hover:text-sky-600 cursor-pointer transition-colors" />
  <Instagram className="w-5 h-5 text-pink-500 hover:text-pink-700 cursor-pointer transition-colors" />
  <Linkedin className="w-5 h-5 text-blue-500 hover:text-blue-700 cursor-pointer transition-colors" />
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-black hover:text-blue-400 text-sm transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Services</h3>
            <ul className="space-y-2">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'Digital Marketing', 'Consulting', 'Support'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-black hover:text-blue-400 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-black text-sm">IIT(BHU),Varanasi (IND)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-black text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-black text-sm">sae@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-blue-200 mt-8 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Stay Updated</h3>
            <p className="text-black text-sm mb-4">Subscribe to our newsletter for the latest updates</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-blue-100 border border-blue-200 rounded-lg text-black-900 placeholder-blue-300 focus:outline-none focus:border-blue-400"
              />
              <button className="px-6 py-2 bg-blue-200 hover:bg-blue-300 text-black-900 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-200 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-black text-sm">
              © 2025 SAE. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-black text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by SAE</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4 mt-4 sm:mt-2">
            <a href="#" className="text-black hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-black hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-black hover:text-blue-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
