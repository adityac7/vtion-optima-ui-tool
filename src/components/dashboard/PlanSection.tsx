
import { useEffect, useState } from "react";
import { 
  Smartphone, TrendingUp, BarChart3, ShoppingCart,
  Target, LineChart, PlayCircle
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

interface PlanSectionProps {
  userType: string;
}

const PlanSection = ({ userType }: PlanSectionProps) => {
  const [planningCards, setPlanningCards] = useState<any[]>([]);

  useEffect(() => {
    // Define different cards based on user type
    if (userType === "advertiser") {
      setPlanningCards([
        {
          id: "digital-behavior",
          title: "Digital Behavior",
          description: "Analyze online user behavior patterns across platforms",
          icon: <Smartphone className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Deep insights into how users interact with digital platforms",
          modalContent: "Digital Behavior analysis provides comprehensive insights into how users interact with websites, apps, and other digital touchpoints. Track engagement patterns, session duration, and user flows."
        },
        {
          id: "intent-signals",
          title: "Intent Signals",
          description: "Identify purchase intent signals from user behavior",
          icon: <Target className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Capture signals that indicate user purchase readiness",
          modalContent: "Intent Signals help identify users who are actively researching products or services similar to yours. Understand where your potential customers are in their buying journey and target them at the right moment."
        },
        {
          id: "advertising-sov",
          title: "Advertising SOV",
          description: "Measure share of voice across advertising channels",
          icon: <BarChart3 className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Compare your advertising presence against competitors",
          modalContent: "Advertising Share of Voice (SOV) measures how your brand's presence compares to competitors across various advertising channels. Identify opportunities to increase visibility in underserved channels."
        },
        {
          id: "ecommerce-journeys",
          title: "E-commerce Journeys",
          description: "Map customer journeys through e-commerce platforms",
          icon: <ShoppingCart className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Track customer paths from discovery to purchase",
          modalContent: "E-commerce Journeys mapping helps you understand the complete customer path from product discovery to purchase. Identify friction points, abandonment reasons, and opportunities to optimize conversion rates."
        }
      ]);
    } else if (userType === "agency") {
      setPlanningCards([
        {
          id: "digital-behavior",
          title: "Digital Behavior",
          description: "Comprehensive analysis of audience digital interactions",
          icon: <Smartphone className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "In-depth view of how audiences interact across digital touchpoints",
          modalContent: "Digital Behavior analysis for agencies provides multi-dimensional views of how different audience segments interact across digital platforms. Use these insights for more targeted media planning across client campaigns."
        },
        {
          id: "digital-intender",
          title: "Digital Intender Behavior",
          description: "Track behavior of users likely to convert",
          icon: <Target className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Focus on high-propensity users across your client base",
          modalContent: "Digital Intender Behavior analysis identifies users who show strong purchase intent signals. This helps agencies develop more effective targeting strategies for clients in various industries."
        },
        {
          id: "incremental-reach",
          title: "Incremental Reach Planner",
          description: "Optimize media plans for maximum incremental reach",
          icon: <LineChart className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Plan media that reaches new, unduplicated audiences",
          modalContent: "The Incremental Reach Planner helps agencies optimize media plans to reach new, unduplicated audiences. Maximize the effectiveness of your clients' media budgets by reducing waste on audience overlap."
        },
        {
          id: "ott-planner",
          title: "OTT & Content Planner",
          description: "Plan campaigns across OTT and streaming platforms",
          icon: <PlayCircle className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Target audiences on streaming and OTT platforms",
          modalContent: "The OTT & Content Planner helps agencies develop effective strategies for reaching audiences on streaming platforms. Get insights on content preferences, viewing patterns, and optimal ad placements."
        }
      ]);
    } else {
      // Default cards for other user types
      setPlanningCards([
        {
          id: "digital-behavior",
          title: "Digital Behavior",
          description: "Analyze online user behavior patterns",
          icon: <Smartphone className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Understand how users interact with digital platforms",
          modalContent: "Digital Behavior analysis provides insights into how users interact with digital platforms. This data can help inform your planning strategies."
        },
        {
          id: "audience-insights",
          title: "Audience Insights",
          description: "Comprehensive audience demographic and behavioral data",
          icon: <Target className="h-12 w-12 text-vtion-purple" />,
          tooltipText: "Detailed data about your audience segments",
          modalContent: "Audience Insights provides detailed information about your audience segments, including demographics, interests, and behaviors."
        }
      ]);
    }
  }, [userType]);

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Planning Tools</h2>
      <p className="text-white/70 mb-6">
        Data-driven solutions to enhance your media planning and strategy development.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {planningCards.map((card) => (
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
                    <li>Data-driven decision making</li>
                    <li>Comprehensive audience insights</li>
                    <li>Competitive analysis</li>
                    <li>Optimization opportunities</li>
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

export default PlanSection;
