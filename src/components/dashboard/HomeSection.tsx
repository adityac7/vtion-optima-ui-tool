
import { FC } from 'react';
import ModuleGrid from './home/ModuleGrid';
import AboutSection from './home/AboutSection';
import InsightsFeatureSection from './home/InsightsFeatureSection';
import PlannerFeatureSection from './home/PlannerFeatureSection';
import ActivateFeatureSection from './home/ActivateFeatureSection';
import MeasureFeatureSection from './home/MeasureFeatureSection';

export interface HomeSectionProps {
  userType: string;
  featureSet?: string | null;
  onFeatureSetChange?: (featureSet: string) => void;
  onMeasureClick?: () => void;
  onCustomSurveyClick?: () => void;
}

const HomeSection: FC<HomeSectionProps> = ({ 
  userType, 
  featureSet = null,
  onFeatureSetChange,
  onMeasureClick,
  onCustomSurveyClick
}) => {
  
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

  // Render feature set based on selection
  if (featureSet) {
    switch(featureSet) {
      case "insights":
        return <InsightsFeatureSection />;
        
      case "planner":
        return <PlannerFeatureSection />;
        
      case "activate":
        return <ActivateFeatureSection />;
        
      case "measure":
        return (
          <MeasureFeatureSection 
            onMeasureClick={onMeasureClick}
            onCustomSurveyClick={onCustomSurveyClick}
          />
        );
        
      default:
        return null;
    }
  }

  // Render main home screen with all modules
  return (
    <div className="space-y-8 animate-fade-in">
      <ModuleGrid onModuleClick={handleCardClick} />
      <AboutSection />
    </div>
  );
};

export default HomeSection;
