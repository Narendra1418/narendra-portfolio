import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone, User, ExternalLink } from 'lucide-react';

const Contact = ({ isDark }) => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <User className="w-6 h-6 text-indigo-500" />
                  <span>Your Name</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-indigo-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-indigo-500" />
                  <span>your.email@example.com</span>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}>
              <h3 className="text-2xl font-bold mb-6">Social Links</h3>
              
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="mailto:your.email@example.com" className="p-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} p-8 shadow-xl`}>
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input type="text" className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'} border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all`} placeholder="Your Name" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input type="email" className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'} border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all`} placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block mb-2 text-sm font-medium">Message</label>
                <textarea rows="5" className={`w-full px-4 py-3 rounded-lg ${isDark ? 'bg-gray-900/50 border-gray-700' : 'bg-white border-gray-300'} border focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all resize-none`} placeholder="Your message..."></textarea>
              </div>
              
              <button className="w-full px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all flex items-center justify-center space-x-2">
                <span>Send Message</span>
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;