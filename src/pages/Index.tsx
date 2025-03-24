
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  Building2, Target, Newspaper, Search 
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Feature components
import PlanSection from "@/components/dashboard/PlanSection";
import ActivateSection from "@/components/dashboard/ActivateSection";
import ImpactSection from "@/components/dashboard/ImpactSection";
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
    <div className="min-h-screen bg-vtion-navy text-white">
      {/* Top Navigation Bar */}
      <header className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              onClick={handleNavHome} 
              className="text-white"
            >
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/f57d577c-4076-43a8-b9d5-40c7d55ef0bd.png" 
                  alt="VTION Logo" 
                  className="h-8"
                />
                <span className="text-xl font-bold ml-2">Connect</span>
              </div>
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
              className="border-white/30 text-white bg-white/10 hover:bg-white/20"
            >
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Welcome to VTION Connect
          </h1>
          <p className="text-white/90 mt-2">
            Your comprehensive platform for data-driven media planning, activation, and measurement
          </p>
        </div>

        {/* Main content section - removed tabs navigation */}
        <HomeSection userType={userType} />
      </main>
      
      <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 py-4 mt-10">
        <div className="container mx-auto px-4 text-center text-white/50 text-sm">
          <p>© {new Date().getFullYear()} VTION. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
