
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface VideoEmbedProps {
  videoId: string;
  title?: string;
}

const VideoEmbed = ({ videoId, title = "YouTube video player" }: VideoEmbedProps) => {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-lg">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
      ></iframe>
    </AspectRatio>
  );
};

export default VideoEmbed;
