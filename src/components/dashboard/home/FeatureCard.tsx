
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  actionText?: string;
  color?: string;
  onClick?: () => void;
  link?: string;
}

const FeatureCard = ({ 
  title, 
  description, 
  actionText = "View Analysis →", 
  color = "from-blue-500/20 to-cyan-400/20",
  onClick,
  link
}: FeatureCardProps) => {
  
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:no-underline"
        >
          {children}
        </a>
      );
    }
    
    return (
      <div 
        onClick={onClick}
        className="block hover:no-underline cursor-pointer"
      >
        {children}
      </div>
    );
  };

  return (
    <CardWrapper>
      <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl text-white font-bold">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white/90">
            {description}
          </CardDescription>
          <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
            {actionText}
          </div>
        </CardContent>
        <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-10 group-hover:opacity-25 transition-opacity duration-300`} />
      </Card>
    </CardWrapper>
  );
};

export default FeatureCard;
