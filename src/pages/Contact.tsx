
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Phone, Mail } from "lucide-react";
import { ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-hidden">
        <Navbar />
        
        {/* Contact Hero Section */}
        <section className="hero-gradient text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
          </div>
        </section>
        
        {/* Contact Information Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-trader-blue text-center">
              Contact Library Trader
            </h2>
            
            <p className="text-lg mb-8 text-center">
              If you have any questions, feedback, or collaboration ideas, feel free to reach out. 
              We are always open to connecting with like-minded individuals and traders.
            </p>
            
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-trader-blue">Contact Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 transition-all hover:translate-x-1">
                    <Phone className="text-trader-blue h-5 w-5" />
                    <span className="text-lg">+91 63613 14549</span>
                  </div>
                  <div className="flex items-center gap-3 transition-all hover:translate-x-1">
                    <Mail className="text-trader-blue h-5 w-5" />
                    <a 
                      href="mailto:librarytrader9@gmail.com" 
                      className="text-lg text-trader-blue hover:underline"
                    >
                      librarytrader9@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-trader-blue">Social Media</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 transition-all hover:translate-x-1">
                    <Instagram className="text-trader-blue h-5 w-5" />
                    <a 
                      href="https://www.instagram.com/preetham_kumar_69" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-trader-blue hover:underline flex items-center"
                    >
                      @preetham_kumar_69 (Founder)
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3 transition-all hover:translate-x-1">
                    <Instagram className="text-trader-blue h-5 w-5" />
                    <a 
                      href="https://www.instagram.com/option_arcade" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-trader-blue hover:underline flex items-center"
                    >
                      @option_arcade (Brand)
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                  <div className="flex items-center gap-3 transition-all hover:translate-x-1">
                    <Youtube className="text-trader-blue h-5 w-5" />
                    <a 
                      href="https://www.youtube.com/channel/UCfVlzI8MRxIwkWZM5RBmsMA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg text-trader-blue hover:underline flex items-center"
                    >
                      Library Trader YouTube Channel
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 text-center text-gray-500 italic">
              We typically respond within 24–48 hours.
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-trader-darkBlue text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold">Library Trader</h3>
                <p className="text-sm text-gray-300">by Option Arcade</p>
              </div>
              <div className="text-sm text-gray-300">
                © {new Date().getFullYear()} Library Trader. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
