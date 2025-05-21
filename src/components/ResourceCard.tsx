
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Resource } from "@/data/content";
import VideoEmbed from "./VideoEmbed";

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const { id, title, description, link, videoId, tags, level } = resource;
  
  // Determine level badge color
  const levelColorMap = {
    'Beginner': 'bg-green-500',
    'Intermediate': 'bg-blue-500',
    'Advanced': 'bg-purple-500'
  };
  
  const levelColor = levelColorMap[level] || 'bg-gray-500';
  
  return (
    <Card id={id} className="card-hover">
      <CardHeader>
        <div className="flex flex-wrap gap-2 mb-2">
          <Badge variant="outline" className={levelColor}>{level}</Badge>
          {tags.slice(0, 2).map(tag => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {videoId && (
          <VideoEmbed videoId={videoId} title={title} />
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {link && (
          <Button asChild className="text-sm">
            <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center">
              <span>View Resource</span>
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourceCard;
