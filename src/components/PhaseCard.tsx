
import { Phase } from "@/data/content";
import ResourceCard from "./ResourceCard";

interface PhaseCardProps {
  phase: Phase;
}

const PhaseCard = ({ phase }: PhaseCardProps) => {
  const { id, title, description, resources } = phase;
  
  return (
    <section id={id} className="py-12">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-trader-blue">{title}</h2>
        <p className="mt-2 text-gray-600 max-w-3xl">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </section>
  );
};

export default PhaseCard;
