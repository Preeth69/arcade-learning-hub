
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import PhaseCard from "@/components/PhaseCard";
import SearchBar from "@/components/SearchBar";
import { learningContent, Resource } from "@/data/content";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Index = () => {
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  const handleSearch = (query: string, tags: string[]) => {
    // If both query and tags are empty, clear search
    if (!query && tags.length === 0) {
      setIsSearching(false);
      return;
    }
    
    // Set searching state
    setIsSearching(true);
    
    // Collect all resources
    const allResources = learningContent.flatMap(phase => phase.resources);
    
    // Filter resources
    const filtered = allResources.filter(resource => {
      const matchesQuery = !query || 
        resource.title.toLowerCase().includes(query.toLowerCase()) || 
        resource.description.toLowerCase().includes(query.toLowerCase());
      
      const matchesTags = tags.length === 0 || 
        tags.some(tag => 
          resource.tags.includes(tag) || 
          resource.level === tag
        );
      
      return matchesQuery && matchesTags;
    });
    
    setFilteredResources(filtered);
  };
  
  const scrollToLearning = () => {
    const learningSection = document.getElementById('learning-tracks');
    if (learningSection) {
      learningSection.scrollIntoView({ behavior: 'smooth' });
    }
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
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Master Trading with Free, Curated Resources
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-trader-accent hover:bg-trader-accent/90 text-white"
                onClick={scrollToLearning}
              >
                Start Learning For Free
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Explore Curriculum
              </Button>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="h-8 w-8 mx-auto" />
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          {/* Search Bar */}
          <div className="mb-12 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Find Trading Resources</h2>
            <SearchBar onSearch={handleSearch} />
          </div>
          
          {/* Learning Tracks */}
          <div id="learning-tracks">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Your Trading Learning Path
            </h2>
            
            {isSearching ? (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold">
                    Search Results ({filteredResources.length})
                  </h3>
                  <Button
                    variant="outline"
                    onClick={() => setIsSearching(false)}
                  >
                    Clear Search
                  </Button>
                </div>
                
                {filteredResources.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredResources.map(resource => (
                      <div key={resource.id} className="bg-white rounded-lg shadow-md p-4">
                        <h3 className="font-bold mb-2">{resource.title}</h3>
                        <p className="text-gray-700 mb-2">{resource.description}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {resource.tags.map(tag => (
                            <span key={tag} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No resources found. Try adjusting your search criteria.</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-12">
                {learningContent.map(phase => (
                  <PhaseCard key={phase.id} phase={phase} />
                ))}
              </div>
            )}
          </div>
          
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
        </main>
        
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
