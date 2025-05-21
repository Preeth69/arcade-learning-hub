
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Learning Tracks", href: "#learning-tracks" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-trader-blue text-white sticky top-0 z-50 shadow-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <span className="text-xl font-bold">Library Trader</span>
            <span className="ml-2 text-xs bg-trader-accent text-white px-2 py-0.5 rounded">by Option Arcade</span>
          </a>
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
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-trader-lightBlue"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button 
            className="bg-trader-accent hover:bg-trader-accent/90 text-white"
          >
            Start Learning Free
          </Button>
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-xl font-semibold leading-8 text-white hover:text-trader-lightBlue"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="py-6 px-8">
              <Button 
                className="w-full bg-trader-accent hover:bg-trader-accent/90 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Learning Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
