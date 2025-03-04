
import { 
  BarChart, Play, TrendingUp, Eye, 
  Database, LineChart, PieChart, Users 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface HomeSectionProps {
  userType: string;
}

const HomeSection = ({ userType }: HomeSectionProps) => {
  const features = [
    {
      title: "Data-Driven Planning",
      description: "Make informed decisions with comprehensive audience insights and market data",
      icon: <Database className="h-12 w-12 text-vtion-purple" />,
      link: "https://app.powerbi.com/groups/me/reports/45a63991-a020-4973-8bd1-1723cfc468df/ReportSection9080411317a00a12631a?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
    {
      title: "Seamless Activation",
      description: "Deploy campaigns across multiple channels with integrated activation tools",
      icon: <Play className="h-12 w-12 text-vtion-purple" />,
      link: "https://proddashboard.vtion.in/adhoc_requests/"
    },
    {
      title: "Accurate Measurement",
      description: "Track performance with precise metrics and insightful analytics",
      icon: <PieChart className="h-12 w-12 text-vtion-purple" />,
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
    {
      title: "Audience Insights",
      description: "Understand your audience with detailed demographic and behavioral data",
      icon: <Users className="h-12 w-12 text-vtion-purple" />,
      link: "https://app.powerbi.com/groups/me/reports/f0d401c5-a7db-4f23-9c76-16c907260eb6/ReportSection67460f9086d019b8882e?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&experience=power-bi"
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden group hover:scale-105 transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-4">{feature.icon}</div>
              <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-white/90">{feature.description}</CardDescription>
              <a href={feature.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-vtion-purple hover:text-white transition-colors duration-200">
                View Dashboard →
              </a>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        ))}
      </div>

      <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Welcome to VTION Connect</h2>
        <p className="text-white/90 mb-6">
          VTION Connect is a comprehensive platform designed to enhance your media planning, 
          activation, and measurement capabilities. Navigate through the tabs above to explore 
          different features tailored to your needs as a{" "}
          <span className="font-semibold text-vtion-purple">{userType}</span>.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          <Button variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 w-full justify-start">
            <BarChart className="mr-2 h-5 w-5 text-vtion-purple" /> Planning Tools
          </Button>
          <Button variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 w-full justify-start">
            <Play className="mr-2 h-5 w-5 text-vtion-purple" /> Activation Suite
          </Button>
          <Button variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 w-full justify-start">
            <TrendingUp className="mr-2 h-5 w-5 text-vtion-purple" /> Impact Analysis
          </Button>
          <Button variant="outline" className="border-white/30 text-white bg-white/10 hover:bg-white/20 w-full justify-start">
            <Eye className="mr-2 h-5 w-5 text-vtion-purple" /> Exposure Metrics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
