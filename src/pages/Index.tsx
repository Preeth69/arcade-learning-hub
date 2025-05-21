
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ForexTools from "@/components/ForexTools";

const Index = () => {
  const openCurriculum = () => {
    window.open("https://peppermint-handbell-374.notion.site/Building-Your-Trading-Journey-A-Structured-Approach-e987e794180f46db846fcbc0c7a78407", "_blank");
  };

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      
      <div className="flex-1 overflow-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section className="hero-gradient text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Library Trader by Option Arcade
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
              Master Trading with Free, Curated Resources
            </p>
            <Button
              size="lg"
              className="bg-trader-accent hover:bg-trader-accent/90 text-white text-lg px-8 py-6 h-auto"
              onClick={openCurriculum}
            >
              Access Free Trading Curriculum
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
        
        {/* Forex Tools Section */}
        <ForexTools />
        
        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 rounded-lg mt-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-trader-blue">About Library Trader</h2>
            <p className="text-lg mb-4">
              Library Trader by Option Arcade provides a structured approach to learning trading 
              through carefully curated free resources. Our mission is to make trading education 
              accessible to everyone, regardless of their background or financial situation.
            </p>
            <p className="text-lg mb-4">
              We believe that with the right education, mindset, and practice, anyone can develop 
              the skills needed to become a successful trader. Our curriculum is designed to guide 
              you through this journey step by step.
            </p>
            <p className="text-lg">
              All content is organized to help you build a solid foundation before moving on to 
              more advanced topics, ensuring that you develop the skills and knowledge in the right order.
            </p>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-trader-blue">Get in Touch</h2>
            <p className="text-lg mb-8">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <Button size="lg" className="bg-trader-blue hover:bg-trader-blue/90">
              Contact Us
            </Button>
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

export default Index;
