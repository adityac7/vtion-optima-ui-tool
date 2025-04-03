
import FeatureCard from "./FeatureCard";
import { insightFeatures } from "./data/featureData";

const InsightsFeatureSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-white">OPTIMA Insights Features</h2>
      <p className="text-white/90 mb-6">
        OPTIMA Insights analyzes digital and e-commerce behavior for comprehensive audience identification.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {insightFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            link={feature.link}
            color="from-blue-500/20 to-cyan-400/20"
          />
        ))}
      </div>
    </div>
  );
};

export default InsightsFeatureSection;
