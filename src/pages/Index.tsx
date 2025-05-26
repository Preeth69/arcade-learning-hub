
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ForexTools from "@/components/ForexTools";
import PropFirmComparison from "@/components/PropFirmComparison";
import { Link } from "react-router-dom";

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
        
        {/* Prop Firm Comparison Section */}
        <PropFirmComparison />
        
        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50 rounded-lg mt-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-trader-blue">About Library Trader</h2>
            <p className="text-lg mb-4">
              Library Trader by Option Arcade is a comprehensive educational platform dedicated to making 
              trading education accessible, structured, and effective. Founded by a trader and investor with 
              over seven years of market experience—investing since 2018 and trading actively since 2021—the 
              platform is built on a deep understanding of what traders truly need to succeed.
            </p>
            <p className="text-lg mb-4">
              Our mission is to democratize trading education by providing carefully curated, high-quality 
              resources at no cost. We believe that with the right mindset, discipline, and systematic learning, 
              anyone can develop the skills required to navigate the financial markets effectively.
            </p>
            <p className="text-lg mb-4">
              The educational framework is designed to guide users through a logical progression, starting with 
              core fundamentals and moving toward advanced strategies. This ensures learners build a strong 
              foundation before tackling complex topics.
            </p>
            <p className="text-lg mb-4">
              To complement the learning experience, Library Trader provides access to essential trading tools 
              that support practical application and decision-making, including Currency Strength Meters, 
              Forex Session Clocks, Economic Calendars, ATR Calculators, Position Size Calculators, and 
              Lot Size Converters—all key components for long-term trading success.
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
            <Button 
              size="lg" 
              className="bg-trader-blue hover:bg-trader-blue/90"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
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
