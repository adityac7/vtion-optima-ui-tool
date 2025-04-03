
import { ReactNode } from "react";
import ModuleCard from "./ModuleCard";
import { modules } from "./data/moduleData";

interface ModuleGridProps {
  onModuleClick: (link: string, title: string) => void;
}

const ModuleGrid = ({ onModuleClick }: ModuleGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {modules.map((module, index) => (
        <ModuleCard
          key={index}
          title={module.title}
          subtitle={module.subtitle}
          description={module.description}
          icon={module.icon}
          color={module.color}
          onClick={() => onModuleClick(module.link, module.title)}
        />
      ))}
    </div>
  );
};

export default ModuleGrid;
