
import { BarChart, LineChart, Play, TrendingUp } from "lucide-react";
import { ReactNode } from "react";

export interface ModuleData {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactNode;
  link: string;
  color: string;
}

export const modules: ModuleData[] = [
  {
    title: "OPTIMA Insights",
    subtitle: "Understand consumer behaviour",
    description: "Track competition SOV, and analyse e-commerce journeys",
    icon: <BarChart className="h-12 w-12 text-vtion-purple" />,
    link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=e3d839cf-5629-4a86-80b7-4406f9c35a7b&noSignUpCheck=1",
    color: "from-blue-500/20 to-cyan-400/20"
  },
  {
    title: "OPTIMA Planner",
    subtitle: "Select digital touchpoints",
    description: "Plan incremental reach and analyze HML audience classification",
    icon: <LineChart className="h-12 w-12 text-vtion-purple" />,
    link: "https://app.powerbi.com/links/FjJfka92ae?ctid=dbc53595-801f-44ba-95b3-181c4b278c83&pbi_source=linkShare&bookmarkGuid=d5a34e11-51a0-4371-a7c9-2655fecd525a&noSignUpCheck=1",
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
