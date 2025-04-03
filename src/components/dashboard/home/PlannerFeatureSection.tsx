
import FeatureCard from "./FeatureCard";
import { plannerFeatures } from "./data/featureData";

const PlannerFeatureSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-white">OPTIMA Planner Features</h2>
      <p className="text-white/90 mb-6">
        OPTIMA Planner helps optimize your media planning with data-driven insights for 
        maximizing reach and impact across digital touchpoints.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {plannerFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            link={feature.link}
            color="from-purple-500/20 to-indigo-400/20"
          />
        ))}
      </div>
    </div>
  );
};

export default PlannerFeatureSection;
