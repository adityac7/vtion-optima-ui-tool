
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Home, BarChart, Play, TrendingUp, Eye, 
  Building2, Target, Newspaper, Search 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

// Feature components
import PlanSection from "@/components/dashboard/PlanSection";
import ActivateSection from "@/components/dashboard/ActivateSection";
import ImpactSection from "@/components/dashboard/ImpactSection";
import ExposureSection from "@/components/dashboard/ExposureSection";
import HomeSection from "@/components/dashboard/HomeSection";

const Index = () => {
  const [userType, setUserType] = useState<string>("advertiser");
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  
  // Check for user type in URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (type) {
      setUserType(type);
    } else {
      // If no type parameter, redirect to user selection
      navigate("/user-selection");
    }
  }, [location, navigate]);

  const getUserIcon = () => {
    switch(userType) {
      case "advertiser": return <Building2 className="w-5 h-5 text-vtion-purple" />;
      case "agency": return <Target className="w-5 h-5 text-vtion-purple" />;
      case "publisher": return <Newspaper className="w-5 h-5 text-vtion-purple" />;
      case "data-partner": return <Search className="w-5 h-5 text-vtion-purple" />;
      default: return <Building2 className="w-5 h-5 text-vtion-purple" />;
    }
  };

  const getUserTitle = () => {
    switch(userType) {
      case "advertiser": return "Advertiser";
      case "agency": return "Agency";
      case "publisher": return "Publisher";
      case "data-partner": return "Data Partner";
      default: return "Advertiser";
    }
  };

  const handleNavHome = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vtion-darkPurple to-gray-900 text-white">
      {/* Top Navigation Bar */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleNavHome} 
              className="text-white"
            >
              <img 
                src="/lovable-uploads/84273f88-53d9-4228-9118-22283fe7b9f1.png" 
                alt="Vtion Logo" 
                className="h-8"
              />
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 border border-white/30">
              {getUserIcon()}
              <span className="text-sm font-medium">{getUserTitle()}</span>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => navigate("/login")}
              className="border-white/30 text-white hover:bg-white/20"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome to Vtion Optima
          </h1>
          <p className="text-white/70 mt-2">
            Your comprehensive platform for data-driven media planning, activation, and measurement
          </p>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 p-1 mb-8 w-full justify-start">
            <TabsTrigger value="home" className="data-[state=active]:bg-vtion-purple text-white">
              <Home className="mr-2 h-4 w-4" /> Home
            </TabsTrigger>
            <TabsTrigger value="plan" className="data-[state=active]:bg-vtion-purple text-white">
              <BarChart className="mr-2 h-4 w-4" /> Plan
            </TabsTrigger>
            <TabsTrigger value="activate" className="data-[state=active]:bg-vtion-purple text-white">
              <Play className="mr-2 h-4 w-4" /> Activate
            </TabsTrigger>
            <TabsTrigger value="impact" className="data-[state=active]:bg-vtion-purple text-white">
              <TrendingUp className="mr-2 h-4 w-4" /> Impact
            </TabsTrigger>
            <TabsTrigger value="exposure" className="data-[state=active]:bg-vtion-purple text-white">
              <Eye className="mr-2 h-4 w-4" /> Exposure
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home" className="mt-0">
            <HomeSection userType={userType} />
          </TabsContent>
          
          <TabsContent value="plan" className="mt-0">
            <PlanSection userType={userType} />
          </TabsContent>
          
          <TabsContent value="activate" className="mt-0">
            <ActivateSection userType={userType} />
          </TabsContent>
          
          <TabsContent value="impact" className="mt-0">
            <ImpactSection />
          </TabsContent>
          
          <TabsContent value="exposure" className="mt-0">
            <ExposureSection />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
