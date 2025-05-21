
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  onSearch: (query: string, tags: string[]) => void;
  className?: string;
}

const availableTags = [
  "Beginner",
  "Intermediate",
  "Advanced",
  "Psychology",
  "Price Action",
  "Technical Analysis",
  "Options",
  "Risk",
  "Strategy"
];

const SearchBar = ({ onSearch, className }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  const handleSearch = () => {
    onSearch(query, selectedTags);
  };
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  return (
    <div id="search" className={cn("w-full", className)}>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search resources..."
            className="pl-10"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button onClick={handleSearch}>Search</Button>
      </div>
      
      <div className="mt-3">
        <div className="flex flex-wrap gap-2 mt-2">
          {availableTags.map(tag => (
            <Badge
              key={tag}
              variant={selectedTags.includes(tag) ? "default" : "outline"}
              className={cn(
                "cursor-pointer",
                selectedTags.includes(tag) ? "bg-trader-blue" : ""
              )}
              onClick={() => toggleTag(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
