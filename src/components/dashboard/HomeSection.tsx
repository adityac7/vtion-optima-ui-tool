
import { 
  BarChart, Play, TrendingUp, Eye, 
  LineChart, Target, Users, TrendingDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface HomeSectionProps {
  userType: string;
  featureSet?: string | null;
  onFeatureSetChange?: (featureSet: string) => void;
  onMeasureClick?: () => void;
  onCustomSurveyClick?: () => void;
}

const HomeSection = ({ 
  userType, 
  featureSet = null,
  onFeatureSetChange,
  onMeasureClick,
  onCustomSurveyClick
}: HomeSectionProps) => {
  
  const handleCardClick = (link: string, title: string) => {
    if (title === "OPTIMA Insights" && onFeatureSetChange) {
      onFeatureSetChange("insights");
    } else if (title === "OPTIMA Planner" && onFeatureSetChange) {
      onFeatureSetChange("planner");
    } else if (title === "OPTIMA Activate" && onFeatureSetChange) {
      onFeatureSetChange("activate");
    } else if (title === "OPTIMA Measure" && onFeatureSetChange) {
      onFeatureSetChange("measure");
    } else {
      window.open(link, "_blank");
    }
  };

  const handleMeasureFeatureClick = (feature: string) => {
    if (feature === "Full Funnel Measurement" && onMeasureClick) {
      onMeasureClick();
    } else if (feature === "Custom Surveys" && onCustomSurveyClick) {
      onCustomSurveyClick();
    }
  };

  const modules = [
    {
      title: "OPTIMA Insights",
      subtitle: "Understand consumer behaviour",
      description: "Track competition SOV, and analyse e-commerce journeys",
      icon: <BarChart className="h-12 w-12 text-vtion-purple" />,
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=e3d839cf-5629-4a86-80b7-4406f9c35a7b",
      color: "from-blue-500/20 to-cyan-400/20"
    },
    {
      title: "OPTIMA Planner",
      subtitle: "Select digital touchpoints",
      description: "Plan incremental reach and analyze HML audience classification",
      icon: <LineChart className="h-12 w-12 text-vtion-purple" />,
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=d5a34e11-51a0-4371-a7c9-2655fecd525a",
      color: "from-purple-500/20 to-indigo-400/20"
    },
    {
      title: "OPTIMA Activate",
      subtitle: "Create custom audiences",
      description: "Activate on meta, GA, DV360 and other DSPs",
      icon: <Play className="h-12 w-12 text-vtion-purple" />,
      link: "https://proddashboard.vtion.in/adhoc_requests/",
      color: "from-pink-500/20 to-rose-400/20"
    },
    {
      title: "OPTIMA Measure",
      subtitle: "Track Exposure & Impact",
      description: "Measure campaign effectiveness through BLS, MTA and surveys",
      icon: <TrendingUp className="h-12 w-12 text-vtion-purple" />,
      link: "#", 
      color: "from-green-500/20 to-teal-400/20"
    },
  ];

  const insightFeatures = [
    {
      title: "Digital Usage Analysis",
      description: "Identify digital penetration across regions and demographics",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=e3d839cf-5629-4a86-80b7-4406f9c35a7b"
    },
    {
      title: "Digital Behavior Tracking",
      description: "Identify touchpoints by target group (TG) and market segmentation",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=af0c1574-89c7-4022-a4d9-9df23731de93"
    },
    {
      title: "Digital Share of Voice Analysis",
      description: "Competitive benchmarking for brand presence and ad spend efficiency",
      link: "https://app.powerbi.com/groups/88869307-8e64-44b5-9131-1c972cfc8596/reports/8e262cf5-80ee-4a64-a8be-2630d516d681/ReportSection0fe7429ed681a2aa2ad3?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
    {
      title: "E-commerce Behavior Analysis",
      description: "Identify intent-driven audiences based on product searches and cart behavior",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=50b999e1-312d-45b5-9e89-8429a3dfc7b4"
    }
  ];

  const plannerFeatures = [
    {
      title: "Digital Reach Planner",
      description: "Plan optimal reach across digital platforms and touchpoints",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=d5a34e11-51a0-4371-a7c9-2655fecd525a"
    },
    {
      title: "Audience Classification",
      description: "Analyze High, Medium, and Low value audience segments for targeting",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=d5a34e11-51a0-4371-a7c9-2655fecd525a"
    },
    {
      title: "Incremental Reach Analysis",
      description: "Identify platforms that provide maximum incremental reach for your budget",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=d5a34e11-51a0-4371-a7c9-2655fecd525a"
    },
    {
      title: "Campaign Budget Allocator",
      description: "Optimize budget allocation across platforms to maximize campaign impact",
      link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=d5a34e11-51a0-4371-a7c9-2655fecd525a"
    }
  ];

  const activateFeatures = [
    {
      title: "Audience Builder – New Segment Planner",
      description: "Prebuilt 270+ Segments (demographics, behavior, geography)",
      link: "https://www.vtion.ai/audience-sets/"
    },
    {
      title: "Custom Audience Activation",
      description: "Activate audiences seamlessly across multiple platforms and channels",
      link: "https://proddashboard.vtion.in/adhoc_requests/"
    }
  ];

  const measureFeatures = [
    {
      title: "Full Funnel Measurement",
      description: "Measure impact on brand awareness, consideration, and preference",
      link: "#"
    },
    {
      title: "Custom Surveys",
      description: "Create custom surveys to measure campaign effectiveness",
      link: "#"
    }
  ];

  // If we're showing a specific feature set, render only that section
  if (featureSet) {
    switch(featureSet) {
      case "insights":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">OPTIMA Insights Features</h2>
            <p className="text-white/90 mb-6">
              OPTIMA Insights analyzes digital and e-commerce behavior for comprehensive audience identification.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {insightFeatures.map((feature, index) => (
                <a 
                  key={index}
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:no-underline"
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-white font-bold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/90">
                        {feature.description}
                      </CardDescription>
                      <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
                        View Analysis →
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-400/20 opacity-10 group-hover:opacity-25 transition-opacity duration-300" />
                  </Card>
                </a>
              ))}
            </div>
          </div>
        );
        
      case "planner":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">OPTIMA Planner Features</h2>
            <p className="text-white/90 mb-6">
              OPTIMA Planner helps optimize your media planning with data-driven insights for 
              maximizing reach and impact across digital touchpoints.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {plannerFeatures.map((feature, index) => (
                <a 
                  key={index}
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:no-underline"
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-white font-bold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/90">
                        {feature.description}
                      </CardDescription>
                      <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
                        View Planner →
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-400/20 opacity-10 group-hover:opacity-25 transition-opacity duration-300" />
                  </Card>
                </a>
              ))}
            </div>
          </div>
        );
        
      case "activate":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">OPTIMA Activate Features</h2>
            <p className="text-white/90 mb-6">
              OPTIMA Activate enables seamless audience activation across multiple platforms and channels.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {activateFeatures.map((feature, index) => (
                <a 
                  key={index}
                  href={feature.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:no-underline"
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-white font-bold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/90">
                        {feature.description}
                      </CardDescription>
                      <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
                        Activate Now →
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-400/20 opacity-10 group-hover:opacity-25 transition-opacity duration-300" />
                  </Card>
                </a>
              ))}
            </div>
          </div>
        );
        
      case "measure":
        return (
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-2xl font-bold text-white">OPTIMA Measure Features</h2>
            <p className="text-white/90 mb-6">
              OPTIMA Measure provides comprehensive analytics to evaluate campaign performance and ROI.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {measureFeatures.map((feature, index) => (
                <div 
                  key={index}
                  onClick={() => handleMeasureFeatureClick(feature.title)}
                  className="block hover:no-underline cursor-pointer"
                >
                  <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl text-white font-bold">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-white/90">
                        {feature.description}
                      </CardDescription>
                      <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
                        Open Form →
                      </div>
                    </CardContent>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-400/20 opacity-10 group-hover:opacity-25 transition-opacity duration-300" />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  }

  // Main dashboard view (module cards)
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, index) => (
          <div 
            key={index} 
            onClick={() => handleCardClick(module.link, module.title)}
            className="block hover:no-underline cursor-pointer"
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="mb-4">{module.icon}</div>
                <CardTitle className="text-xl text-white font-bold">
                  {module.title}
                </CardTitle>
                <CardDescription className="text-cyan-300 font-medium mt-1">
                  {module.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90">
                  {module.description}
                </CardDescription>
                <div className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
                  {module.title === "OPTIMA Measure" ? "View Features →" : "View Features →"}
                </div>
              </CardContent>
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-10 group-hover:opacity-25 transition-opacity duration-300`} />
            </Card>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-vtion-purple/20 to-transparent p-6 rounded-lg border border-white/10">
        <h2 className="text-xl font-bold mb-2 text-white">About VTION Connect</h2>
        <p className="text-white/80">
          VTION Connect's OPTIMA Suite is a comprehensive Audience Intelligence Platform designed for 
          digital agencies, advertisers, and brands. Navigate through the modules above to explore different 
          features specific to your needs.
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
