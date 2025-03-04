
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Building2, Target, Newspaper, Search } from "lucide-react";

const UserSelection = () => {
  const navigate = useNavigate();

  const userTypes = [
    {
      id: "advertiser",
      title: "Advertiser",
      icon: Building2,
      description: "For brands and businesses",
    },
    {
      id: "agency",
      title: "Agency",
      icon: Target,
      description: "For marketing agencies",
    },
    {
      id: "publisher",
      title: "Publisher",
      icon: Newspaper,
      description: "For content publishers",
    },
    {
      id: "data-partner",
      title: "Data Partner",
      icon: Search,
      description: "For data providers",
    },
  ];

  const handleSelect = (type: string) => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-vtion-darkPurple flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/20 to-vtion-lightPurple/20" />
      
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold text-white text-center mb-12">Select Your Role</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card
                key={type.id}
                className="group relative overflow-hidden p-6 cursor-pointer transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-lg border border-white/20"
                onClick={() => handleSelect(type.id)}
              >
                <div className="relative z-10 flex flex-col items-center text-white">
                  <Icon className="w-12 h-12 mb-4 text-vtion-purple" />
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-white/70 text-center">{type.description}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserSelection;
