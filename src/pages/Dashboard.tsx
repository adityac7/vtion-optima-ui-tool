
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
    <div className="flex flex-col h-screen">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <img 
            src="/lovable-uploads/bc89a4f0-9aa4-4729-b125-9258b8ae1d13.png" 
            alt="VTION LOGO" 
            className="h-16 mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">VTION Optima</h1>
          <p className="text-lg mb-4">
            Welcome, <span className="font-semibold text-vtion-purple capitalize">{userType}</span>
          </p>
        </header>

        <div className="flex-1 overflow-auto">
          <Tabs defaultValue="home" className="w-full">
            <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 w-full h-auto flex flex-wrap mb-8">
              <TabsTrigger value="home" className="data-[state=active]:bg-vtion-purple text-foreground">Home</TabsTrigger>
              <TabsTrigger value="plan" className="data-[state=active]:bg-vtion-purple text-foreground">Plan</TabsTrigger>
              <TabsTrigger value="activate" className="data-[state=active]:bg-vtion-purple text-foreground">Activate</TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-vtion-purple text-foreground">Impact</TabsTrigger>
              <TabsTrigger value="exposure" className="data-[state=active]:bg-vtion-purple text-foreground">Exposure</TabsTrigger>
            </TabsList>

            <div className="mt-6 p-4">
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
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
