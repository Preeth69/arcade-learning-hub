
import { useState } from "react";
import { ArrowUp, Book, ChevronDown, Home, Info, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { learningContent } from "@/data/content";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);
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

  const togglePhase = (phaseId: string) => {
    if (expandedPhase === phaseId) {
      setExpandedPhase(null);
    } else {
      setExpandedPhase(phaseId);
    }
  };

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
          
          <div className="mt-6 mb-2">
            <p className="text-xs uppercase tracking-wider text-trader-lightBlue mb-3">Learning Tracks</p>
            
            {learningContent.map((phase) => (
              <div key={phase.id} className="mb-2">
                <button 
                  onClick={() => togglePhase(phase.id)}
                  className="flex items-center justify-between w-full p-2 text-left rounded-md hover:bg-trader-darkBlue"
                >
                  <span>{phase.title.split(':')[0]}</span>
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform", 
                      expandedPhase === phase.id ? "transform rotate-180" : ""
                    )} 
                  />
                </button>
                
                {expandedPhase === phase.id && (
                  <div className="ml-4 pl-2 border-l border-trader-lightBlue/30 mt-1 space-y-1">
                    {phase.resources.map((resource) => (
                      <a 
                        key={resource.id}
                        href={`#${resource.id}`}
                        className="block py-1 px-2 text-sm text-trader-lightBlue hover:text-white rounded-md hover:bg-trader-darkBlue"
                      >
                        {resource.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <a href="#about" className="flex items-center p-2 rounded-md hover:bg-trader-darkBlue">
            <Info className="mr-2 h-5 w-5" />
            <span>About</span>
          </a>
          
          <a href="#search" className="flex items-center p-2 rounded-md hover:bg-trader-darkBlue">
            <Search className="mr-2 h-5 w-5" />
            <span>Search</span>
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
