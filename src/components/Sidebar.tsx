
import { useState } from "react";
import { ArrowUp, Book, Home, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Set up scroll event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <aside className={cn(
      "hidden md:block w-64 bg-trader-blue text-white overflow-y-auto h-screen sticky top-0 left-0 scrollbar-thin scrollbar-thumb-trader-darkBlue scrollbar-track-trader-blue",
      className
    )}>
      <div className="p-5">
        <a href="#" className="flex items-center mb-6">
          <Book className="mr-2 h-6 w-6" />
          <span className="font-bold text-xl">Library Trader</span>
        </a>
        
        <nav className="space-y-1">
          <a href="#" className="flex items-center p-2 rounded-md hover:bg-trader-darkBlue">
            <Home className="mr-2 h-5 w-5" />
            <span>Home</span>
          </a>
          
          <a href="#about" className="flex items-center p-2 rounded-md hover:bg-trader-darkBlue">
            <Info className="mr-2 h-5 w-5" />
            <span>About</span>
          </a>
        </nav>
      </div>
      
      {showScrollTop && (
        <Button
          variant="ghost"
          size="icon"
          className="absolute bottom-4 right-4 bg-trader-accent/80 hover:bg-trader-accent text-white"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </aside>
  );
};

export default Sidebar;
