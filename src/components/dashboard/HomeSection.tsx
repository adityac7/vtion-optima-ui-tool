
import { 
  BarChart, Play, TrendingUp, Eye, 
  LineChart, Target, Users, TrendingDown
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface HomeSectionProps {
  userType: string;
}

const HomeSection = ({ userType }: HomeSectionProps) => {
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
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi",
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
      title: "Custom Audience Creation",
      description: "Build high-value audience segments based on behavioral and purchase patterns",
      link: "https://proddashboard.vtion.in/adhoc_requests/"
    },
    {
      title: "Multi-Platform Activation",
      description: "Activate audiences seamlessly across Meta, Google, DV360, and other DSPs",
      link: "https://proddashboard.vtion.in/adhoc_requests/"
    },
    {
      title: "Audience Enrichment",
      description: "Enhance first-party data with VTION's rich behavioral insights",
      link: "https://proddashboard.vtion.in/adhoc_requests/"
    },
    {
      title: "Real-time Campaign Monitoring",
      description: "Track audience activation and engagement in real-time across platforms",
      link: "https://proddashboard.vtion.in/adhoc_requests/"
    }
  ];

  const measureFeatures = [
    {
      title: "Brand Lift Surveys",
      description: "Measure impact on brand awareness, consideration, and preference",
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
    {
      title: "Multi-Touch Attribution",
      description: "Analyze touchpoint contribution across the customer journey",
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
    {
      title: "Conversion Impact Analysis",
      description: "Measure how media exposure drives conversions and sales",
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
    {
      title: "Campaign ROI Dashboard",
      description: "Comprehensive view of campaign performance and return on investment",
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    }
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((module, index) => (
          <a 
            key={index} 
            href={module.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block hover:no-underline"
          >
            <Card className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300 h-full cursor-pointer">
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
                  View Dashboard →
                </div>
              </CardContent>
              <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-10 group-hover:opacity-25 transition-opacity duration-300`} />
            </Card>
          </a>
        ))}
      </div>

      {/* OPTIMA Insights Features */}
      <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">OPTIMA Insights Features</h2>
        <p className="text-white/90 mb-6">
          OPTIMA Insights analyzes digital and e-commerce behavior for comprehensive audience identification,
          tailored for <span className="font-semibold text-vtion-purple">{userType}s</span>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {insightFeatures.map((feature, index) => (
            <a 
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:no-underline"
            >
              <div className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30">
                <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
                <div className="mt-3 text-sm text-vtion-purple">View Analysis →</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* OPTIMA Planner Features */}
      <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">OPTIMA Planner Features</h2>
        <p className="text-white/90 mb-6">
          OPTIMA Planner helps optimize your media planning with data-driven insights for 
          maximizing reach and impact across digital touchpoints for 
          <span className="font-semibold text-vtion-purple"> {userType}s</span>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {plannerFeatures.map((feature, index) => (
            <a 
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:no-underline"
            >
              <div className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30">
                <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
                <div className="mt-3 text-sm text-vtion-purple">View Planner →</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* OPTIMA Activate Features */}
      <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">OPTIMA Activate Features</h2>
        <p className="text-white/90 mb-6">
          OPTIMA Activate enables seamless audience activation across multiple platforms and channels,
          empowering <span className="font-semibold text-vtion-purple">{userType}s</span> to reach high-value audiences.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {activateFeatures.map((feature, index) => (
            <a 
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:no-underline"
            >
              <div className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30">
                <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
                <div className="mt-3 text-sm text-vtion-purple">Activate Now →</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* OPTIMA Measure Features */}
      <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">OPTIMA Measure Features</h2>
        <p className="text-white/90 mb-6">
          OPTIMA Measure provides comprehensive analytics to evaluate campaign performance and ROI,
          giving <span className="font-semibold text-vtion-purple">{userType}s</span> actionable insights.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {measureFeatures.map((feature, index) => (
            <a 
              key={index}
              href={feature.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:no-underline"
            >
              <div className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all duration-300 hover:border-white/30">
                <h3 className="font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm">{feature.description}</p>
                <div className="mt-3 text-sm text-vtion-purple">View Metrics →</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-vtion-purple/20 to-transparent p-6 rounded-lg border border-white/10">
        <h2 className="text-xl font-bold mb-2 text-white">About VTION Connect</h2>
        <p className="text-white/80">
          VTION Connect's OPTIMA Suite is a comprehensive Audience Intelligence Platform designed for 
          digital agencies, advertisers, and brands. Navigate through the tabs above to explore different 
          modules and features tailored to your needs as a{" "}
          <span className="font-medium text-vtion-purple">{userType}</span>.
        </p>
      </div>
    </div>
  );
};

export default HomeSection;
