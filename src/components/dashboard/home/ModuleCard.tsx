
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface ModuleCardProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  color: string;
  onClick: () => void;
}

const ModuleCard = ({ title, subtitle, description, icon, color, onClick }: ModuleCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="block hover:no-underline cursor-pointer"
    >
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
        <CardHeader className="pb-2">
          <div className="mb-4">{icon}</div>
          <CardTitle className="text-xl text-white font-bold">
            {title}
          </CardTitle>
          <CardDescription className="text-cyan-300 font-medium mt-1">
            {subtitle}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white/90">
            {description}
          </CardDescription>
          <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
            View Features →
          </div>
        </CardContent>
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 group-hover:opacity-25 transition-opacity duration-300`} />
      </Card>
    </div>
  );
};

export default ModuleCard;
