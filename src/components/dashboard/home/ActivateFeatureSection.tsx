
import FeatureCard from "./FeatureCard";
import { activateFeatures } from "./data/featureData";

const ActivateFeatureSection = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-white">OPTIMA Activate Features</h2>
      <p className="text-white/90 mb-6">
        OPTIMA Activate enables seamless audience activation across multiple platforms and channels.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {activateFeatures.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            link={feature.link}
            color="from-pink-500/20 to-rose-400/20"
          />
        ))}
      </div>
    </div>
  );
};

export default ActivateFeatureSection;
