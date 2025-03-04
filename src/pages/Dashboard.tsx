
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeSection from "@/components/dashboard/HomeSection";
import PlanSection from "@/components/dashboard/PlanSection";
import ActivateSection from "@/components/dashboard/ActivateSection";
import ImpactSection from "@/components/dashboard/ImpactSection";
import ExposureSection from "@/components/dashboard/ExposureSection";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<string>("advertiser");
  const [activeTab, setActiveTab] = useState<string>("home");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setUserType(type);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Theme Toggler in the top-right corner */}
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <img 
            src="/lovable-uploads/9afa94b9-ec6c-4ba7-b341-99a193733f2f.png" 
            alt="VTION LOGO" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">VTION Optima</h1>
          <p className="text-lg mb-4">
            Welcome, <span className="font-semibold text-vtion-purple capitalize">{userType}</span>
          </p>
        </header>

        <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 w-full h-auto flex flex-wrap mb-8">
            <TabsTrigger value="home" className="data-[state=active]:bg-vtion-purple text-foreground">Home</TabsTrigger>
            <TabsTrigger value="plan" className="data-[state=active]:bg-vtion-purple text-foreground">Plan</TabsTrigger>
            <TabsTrigger value="activate" className="data-[state=active]:bg-vtion-purple text-foreground">Activate</TabsTrigger>
            <TabsTrigger value="impact" className="data-[state=active]:bg-vtion-purple text-foreground">Impact</TabsTrigger>
            <TabsTrigger value="exposure" className="data-[state=active]:bg-vtion-purple text-foreground">Exposure</TabsTrigger>
          </TabsList>

          <div className="p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg min-h-[60vh]">
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
              <ExposureSection userType={userType} />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
