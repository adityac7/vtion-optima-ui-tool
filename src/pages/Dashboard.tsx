
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HomeSection from "@/components/dashboard/HomeSection";
import PlanSection from "@/components/dashboard/PlanSection";
import ActivateSection from "@/components/dashboard/ActivateSection";
import ImpactSection from "@/components/dashboard/ImpactSection";
import ExposureSection from "@/components/dashboard/ExposureSection";
import MeasureForm from "@/components/dashboard/MeasureForm";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<string>("advertiser");
  const [activeTab, setActiveTab] = useState<string>("home");
  const [showMeasureForm, setShowMeasureForm] = useState(false);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setUserType(type);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <header className="text-center mb-8">
          <div className="flex flex-col items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/bc89a4f0-9aa4-4729-b125-9258b8ae1d13.png" 
              alt="VTION Logo" 
              className="h-16 mb-2"
            />
            <span className="text-xl font-bold text-white">Connect</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">VTION Optima</h1>
          <p className="text-lg mb-4 text-white/80">
            Welcome, <span className="font-semibold text-vtion-purple capitalize">{userType}</span>
          </p>
        </header>

        <div className="flex-1 overflow-auto">
          <Tabs defaultValue="home" className="w-full" onValueChange={(value) => {
            setActiveTab(value);
            if (value === "impact") {
              setShowMeasureForm(false);
            }
          }}>
            <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 w-full h-auto flex flex-wrap mb-8">
              <TabsTrigger value="home" className="data-[state=active]:bg-vtion-purple text-white">Home</TabsTrigger>
              <TabsTrigger value="plan" className="data-[state=active]:bg-vtion-purple text-white">Plan</TabsTrigger>
              <TabsTrigger value="activate" className="data-[state=active]:bg-vtion-purple text-white">Activate</TabsTrigger>
              <TabsTrigger value="impact" className="data-[state=active]:bg-vtion-purple text-white">Measure</TabsTrigger>
              <TabsTrigger value="exposure" className="data-[state=active]:bg-vtion-purple text-white">Exposure</TabsTrigger>
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
                {showMeasureForm ? (
                  <MeasureForm />
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Brand Lift Survey",
                          description: "Measure the impact of your campaign on brand perception",
                          icon: "📈"
                        },
                        {
                          title: "Multi-Touch Attribution",
                          description: "Analyze touchpoint contribution to conversions",
                          icon: "👆"
                        },
                        {
                          title: "Custom Surveys",
                          description: "Create custom research to understand consumer behavior",
                          icon: "📊"
                        }
                      ].map((option, index) => (
                        <div 
                          key={index}
                          onClick={() => setShowMeasureForm(true)}
                          className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg cursor-pointer hover:bg-white/20 transition duration-300"
                        >
                          <div className="text-4xl mb-4">{option.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                          <p className="text-white/70">{option.description}</p>
                          <div className="mt-4 text-vtion-purple">Request Now →</div>
                        </div>
                      ))}
                    </div>
                    <ImpactSection />
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="exposure" className="mt-0">
                <ExposureSection />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>

      <footer className="w-full bg-black/30 backdrop-blur-md py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              Modules & Product cats' data to be populated basis subscription by Agency / Advertiser.
            </div>
            <div className="text-right">
              <div className="text-white/80 text-sm font-medium">Unlocking Insights</div>
              <div className="text-white/80 text-sm font-medium">Driving Activation</div>
              <div className="text-white/80 text-sm font-medium">Measuring Success</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
