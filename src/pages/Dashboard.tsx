
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import HomeSection from "@/components/dashboard/HomeSection";
import PlanSection from "@/components/dashboard/PlanSection";
import ImpactSection from "@/components/dashboard/ImpactSection";
import MeasureForm from "@/components/dashboard/MeasureForm";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import CustomSurveyForm from "@/components/dashboard/CustomSurveyForm";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [userType, setUserType] = useState<string>("user");
  const [activeSection, setActiveSection] = useState<string>("home");
  const [showMeasureForm, setShowMeasureForm] = useState(false);
  const [showCustomSurveyForm, setShowCustomSurveyForm] = useState(false);
  
  // Feature modules state
  const [activeFeatureSet, setActiveFeatureSet] = useState<string | null>(null);

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setUserType(type);
    }
    
    // Get feature parameter if available
    const feature = searchParams.get("feature");
    if (feature) {
      setActiveFeatureSet(feature);
    }
  }, [searchParams]);

  const handleBackToHome = () => {
    setActiveFeatureSet(null);
    setShowMeasureForm(false);
    setShowCustomSurveyForm(false);
  };

  const renderContent = () => {
    if (showMeasureForm) {
      return (
        <div className="space-y-4">
          <button 
            onClick={handleBackToHome}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors duration-200 mb-4"
          >
            ← Back to Dashboard
          </button>
          <MeasureForm />
        </div>
      );
    }
    
    if (showCustomSurveyForm) {
      return (
        <div className="space-y-4">
          <button 
            onClick={handleBackToHome}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors duration-200 mb-4"
          >
            ← Back to Dashboard
          </button>
          <CustomSurveyForm />
        </div>
      );
    }

    if (activeFeatureSet) {
      return (
        <div className="space-y-4">
          <button 
            onClick={handleBackToHome}
            className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md transition-colors duration-200 mb-4"
          >
            ← Back to Dashboard
          </button>
          <HomeSection 
            userType={userType}
            featureSet={activeFeatureSet}
            onMeasureClick={() => setShowMeasureForm(true)}
            onCustomSurveyClick={() => setShowCustomSurveyForm(true)}
          />
        </div>
      );
    }

    return (
      <HomeSection 
        userType={userType}
        onFeatureSetChange={setActiveFeatureSet}
        onMeasureClick={() => setShowMeasureForm(true)}
        onCustomSurveyClick={() => setShowCustomSurveyForm(true)}
      />
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/f57d577c-4076-43a8-b9d5-40c7d55ef0bd.png" 
              alt="VTION Logo" 
              className="h-16"
            />
            <span className="text-xl font-bold text-white ml-2">Connect</span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-white">VTION Optima</h1>
          <p className="text-lg mb-4 text-white/80">
            Welcome to your <span className="font-semibold text-vtion-purple">Data-Driven Platform</span>
          </p>
        </header>

        <div className="flex-1 overflow-auto">
          <div className="mt-6 p-4">
            {renderContent()}
          </div>
        </div>
      </div>

      <footer className="w-full bg-black/30 backdrop-blur-md py-4 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              Modules & Product data based on your platform subscription.
            </div>
            <div className="text-right">
              <div className="text-white/80 text-sm font-medium">Unlocking Insights</div>
              <div className="text-white/80 text-sm font-medium">Driving Activation</div>
              <div className="text-white/80 text-sm font-medium">Measuring Success</div>
            </div>
          </div>
          <div className="text-center text-white/60 text-xs mt-4 pt-2 border-t border-white/10">
            © {new Date().getFullYear()} VTION. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
