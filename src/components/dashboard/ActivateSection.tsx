
import { useEffect, useState } from "react";
import { 
  PieChart, Search, Target, Zap
} from "lucide-react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ActivateSectionProps {
  userType: string;
}

const ActivateSection = ({ userType }: ActivateSectionProps) => {
  const [activationCards, setActivationCards] = useState<any[]>([]);

  useEffect(() => {
    // Only show activation cards for agency users
    if (userType === "agency") {
      setActivationCards([
        {
          id: "segment-planner",
          title: "Segment Planner",
          description: "Create and manage audience segments for targeting",
          icon: <PieChart className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Build custom audience segments based on behavior and demographics",
          modalContent: "The Segment Planner allows you to create, manage, and analyze custom audience segments. Build segments based on demographics, behaviors, interests, and more to improve targeting precision across campaigns."
        },
        {
          id: "search-word-bidder",
          title: "Search Word Bidder",
          description: "Optimize keyword bidding strategies based on data",
          icon: <Search className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Data-driven keyword bidding optimization",
          modalContent: "The Search Word Bidder provides AI-driven recommendations for keyword bidding strategies. Leverage audience data and performance metrics to optimize SEM campaigns and improve ROAS."
        },
        {
          id: "campaign-optimizer",
          title: "Campaign Optimizer",
          description: "Real-time campaign optimization recommendations",
          icon: <Target className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "AI-powered suggestions to improve campaign performance",
          modalContent: "The Campaign Optimizer delivers real-time recommendations to enhance campaign performance. Using AI and machine learning, it identifies opportunities to optimize targeting, creative, bidding, and placement strategies."
        },
        {
          id: "dcr-activation",
          title: "DCR - 1P & DSP Activation",
          description: "Activate campaigns across DSPs with first-party data",
          icon: <Zap className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Seamless activation across platforms using first-party data",
          modalContent: "DCR - 1P & DSP Activation enables seamless deployment of campaigns across multiple demand-side platforms. Leverage first-party data for enhanced targeting while maintaining privacy compliance."
        }
      ]);
    } else {
      // Show limited or no cards for other user types
      setActivationCards([]);
    }
  }, [userType]);

  if (activationCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center animate-fade-in">
        <div className="bg-vtion-purple/20 p-6 rounded-full mb-6">
          <Target className="h-16 w-16 text-vtion-purple" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Activation Features</h2>
        <p className="text-white/70 max-w-md mb-6">
          Activation features are currently available for Agency accounts. 
          Please contact your account manager for more information.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Activation Tools</h2>
      <p className="text-white/70 mb-6">
        Powerful solutions to activate your media campaigns with precision and efficiency.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {activationCards.map((card) => (
          <Dialog key={card.id}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DialogTrigger asChild>
                    <Card className="bg-white/10 backdrop-blur-md border border-white/20 cursor-pointer hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                      <CardHeader>
                        <div className="mb-4">{card.icon}</div>
                        <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-white/70">
                          {card.description}
                        </CardDescription>
                      </CardContent>
                      <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Card>
                  </DialogTrigger>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{card.tooltipText}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <DialogContent className="bg-gray-900 border border-vtion-purple/50 text-white">
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  {card.icon}
                  <DialogTitle className="text-2xl">{card.title}</DialogTitle>
                </div>
                <DialogDescription className="text-white/70">
                  {card.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-white/90">{card.modalContent}</p>
                
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-medium mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1 text-white/80">
                    <li>Enhanced targeting precision</li>
                    <li>Improved campaign efficiency</li>
                    <li>Data-driven optimization</li>
                    <li>Cross-platform activation</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default ActivateSection;
