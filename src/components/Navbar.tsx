
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      // If we're on the home page, scroll to section
      if (location.pathname === '/') {
        scrollToSection(href.substring(1));
      } else {
        // If we're on another page, navigate to home page with hash
        window.location.href = `/${href}`;
      }
    } else {
      // Regular navigation
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-trader-blue text-white sticky top-0 z-50 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="text-xl font-bold">Library Trader</span>
            <span className="ml-2 text-xs bg-trader-accent text-white px-2 py-0.5 rounded">by Option Arcade</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-trader-darkBlue" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-8">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-white hover:text-trader-lightBlue"
          >
            Home
          </Link>
          <button
            onClick={() => handleNavClick('#about')}
            className="text-sm font-semibold leading-6 text-white hover:text-trader-lightBlue cursor-pointer"
          >
            About
          </button>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-white hover:text-trader-lightBlue"
          >
            Contact
          </Link>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn(
        "fixed inset-0 z-50 bg-trader-darkBlue/95 lg:hidden transform transition-transform duration-300 ease-in-out",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex justify-end p-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white hover:bg-trader-darkBlue" 
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-700">
            <div className="space-y-2 py-6 px-8">
              <Link
                to="/"
                className="block text-xl font-semibold leading-8 text-white hover:text-trader-lightBlue"
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <button
                onClick={() => handleNavClick('#about')}
                className="block text-xl font-semibold leading-8 text-white hover:text-trader-lightBlue text-left w-full"
              >
                About
              </button>
              <Link
                to="/contact"
                className="block text-xl font-semibold leading-8 text-white hover:text-trader-lightBlue"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
