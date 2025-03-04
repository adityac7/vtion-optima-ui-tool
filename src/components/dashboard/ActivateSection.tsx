
import { useEffect, useState } from "react";
import { 
  PieChart, Search, Target, Zap, 
  Users, Gamepad2, ShoppingCart, Tv, 
  Wine, Baby, Cookie, Coffee, Car, Music, 
  ExternalLink
} from "lucide-react";
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter
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
import { Button } from "@/components/ui/button";

export interface ActivateSectionProps {
  userType: string;
}

const ActivateSection = ({ userType }: ActivateSectionProps) => {
  const [activationCards, setActivationCards] = useState<any[]>([]);
  const [segmentCards, setSegmentCards] = useState<any[]>([]);

  const segments = [
    {
      id: "ecommerce-shoppers",
      title: "E-commerce Shoppers",
      description: "Users who regularly shop on online platforms",
      icon: <ShoppingCart className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "netflix-consumers",
      title: "Netflix Content Consumers",
      description: "Users who frequently stream Netflix content",
      icon: <Tv className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "gamers",
      title: "Mobile Gamers",
      description: "Users who play games on mobile devices",
      icon: <Gamepad2 className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "beauty-shoppers",
      title: "Beauty Shoppers",
      description: "Users interested in beauty and personal care products",
      icon: <Wine className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "parents",
      title: "Parents of Young Children",
      description: "Users with children under 10 years old",
      icon: <Baby className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "foodies",
      title: "Food Enthusiasts",
      description: "Users interested in cooking and dining experiences",
      icon: <Cookie className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "coffee-lovers",
      title: "Coffee Enthusiasts",
      description: "Users who frequently purchase coffee products",
      icon: <Coffee className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "auto-intenders",
      title: "Auto Intenders",
      description: "Users researching vehicle purchases",
      icon: <Car className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "music-lovers",
      title: "Music Enthusiasts",
      description: "Users who stream music regularly",
      icon: <Music className="h-10 w-10 text-vtion-purple" />,
    },
    {
      id: "luxury-shoppers",
      title: "Luxury Shoppers",
      description: "Users who purchase premium and luxury products",
      icon: <Users className="h-10 w-10 text-vtion-purple" />,
    },
  ];

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
          modalContent: "The Segment Planner allows you to create, manage, and analyze custom audience segments. Build segments based on demographics, behaviors, interests, and more to improve targeting precision across campaigns.",
          link: "https://proddashboard.vtion.in/adhoc_requests/"
        },
        {
          id: "search-word-bidder",
          title: "Search Word Bidder",
          description: "Optimize keyword bidding strategies based on data",
          icon: <Search className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Data-driven keyword bidding optimization",
          modalContent: "The Search Word Bidder provides AI-driven recommendations for keyword bidding strategies. Leverage audience data and performance metrics to optimize SEM campaigns and improve ROAS.",
          link: "#"
        },
        {
          id: "campaign-optimizer",
          title: "Campaign Optimizer",
          description: "Real-time campaign optimization recommendations",
          icon: <Target className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "AI-powered suggestions to improve campaign performance",
          modalContent: "The Campaign Optimizer delivers real-time recommendations to enhance campaign performance. Using AI and machine learning, it identifies opportunities to optimize targeting, creative, bidding, and placement strategies.",
          link: "#"
        },
        {
          id: "dcr-activation",
          title: "DCR - 1P & DSP Activation",
          description: "Activate campaigns across DSPs with first-party data",
          icon: <Zap className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Seamless activation across platforms using first-party data",
          modalContent: "DCR - 1P & DSP Activation enables seamless deployment of campaigns across multiple demand-side platforms. Leverage first-party data for enhanced targeting while maintaining privacy compliance.",
          link: "#"
        }
      ]);
      setSegmentCards(segments);
    } else {
      // Show limited or no cards for other user types
      setActivationCards([]);
      setSegmentCards([]);
    }
  }, [userType]);

  if (activationCards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center animate-fade-in">
        <div className="bg-vtion-purple/20 p-6 rounded-full mb-6">
          <Target className="h-16 w-16 text-vtion-purple" />
        </div>
        <h2 className="text-2xl font-bold mb-4">Activation Features</h2>
        <p className="text-white/90 max-w-md mb-6">
          Activation features are currently available for Agency accounts. 
          Please contact your account manager for more information.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Activation Tools</h2>
      <p className="text-white/90 mb-6">
        Powerful solutions to activate your media campaigns with precision and efficiency.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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
                        <CardDescription className="text-white/90">
                          {card.description}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-vtion-purple hover:text-white transition-colors duration-200 flex items-center">
                          Access Tool <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </CardFooter>
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
                <DialogDescription className="text-white/90">
                  {card.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-white/90">{card.modalContent}</p>
                
                <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                  <h4 className="font-medium mb-2">Key Benefits</h4>
                  <ul className="list-disc pl-5 space-y-1 text-white/90">
                    <li>Enhanced targeting precision</li>
                    <li>Improved campaign efficiency</li>
                    <li>Data-driven optimization</li>
                    <li>Cross-platform activation</li>
                  </ul>
                </div>
                
                <div className="mt-6 text-right">
                  <Button asChild className="bg-vtion-purple hover:bg-vtion-purple/80">
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Open Tool <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      
      {segmentCards.length > 0 && (
        <>
          <h3 className="text-xl font-bold mt-10">Available Audience Segments</h3>
          <p className="text-white/90 mb-6">
            Pre-built audience segments ready for activation across your campaigns.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {segmentCards.map((segment) => (
              <Card key={segment.id} className="bg-white/10 backdrop-blur-md border border-white/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                <CardHeader className="pb-2 pt-4 px-4">
                  <div className="flex justify-center mb-2">{segment.icon}</div>
                  <CardTitle className="text-base text-white text-center">{segment.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4 pt-0">
                  <CardDescription className="text-white/90 text-xs text-center">
                    {segment.description}
                  </CardDescription>
                  <div className="mt-3 text-center">
                    <a 
                      href="https://proddashboard.vtion.in/adhoc_requests/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-xs text-vtion-purple hover:text-white transition-colors duration-200"
                    >
                      Activate Segment
                    </a>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ActivateSection;
