
import FeatureCard from "./FeatureCard";
import { measureFeatures } from "./data/featureData";

interface MeasureFeatureSectionProps {
  onMeasureClick?: () => void;
  onCustomSurveyClick?: () => void;
}

const MeasureFeatureSection = ({ 
  onMeasureClick, 
  onCustomSurveyClick 
}: MeasureFeatureSectionProps) => {
  
  const handleMeasureFeatureClick = (feature: string) => {
    if (feature === "Full Funnel Measurement" && onMeasureClick) {
      onMeasureClick();
    } else if (feature === "Custom Surveys" && onCustomSurveyClick) {
      onCustomSurveyClick();
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-white">OPTIMA Measure Features</h2>
      <p className="text-white/90 mb-6">
        OPTIMA Measure provides comprehensive analytics to evaluate campaign performance and ROI.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {measureFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            actionText="Open Form →"
            color="from-green-500/20 to-teal-400/20"
            onClick={() => handleMeasureFeatureClick(feature.title)}
          />
        ))}
      </div>
    </div>
  );
};

export default MeasureFeatureSection;
