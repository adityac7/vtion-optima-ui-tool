
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Tv, Gamepad2, Film } from "lucide-react";

export interface ActivateSectionProps {
  userType?: string;
}

const ActivateSection = ({ userType = "advertiser" }: ActivateSectionProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("");
  const [selectedAudience, setSelectedAudience] = useState<string>("");

  const platforms = [
    { id: "youtube", name: "YouTube" },
    { id: "facebook", name: "Facebook" },
    { id: "instagram", name: "Instagram" },
    { id: "spotify", name: "Spotify" },
    { id: "twitter", name: "Twitter" },
  ];

  const predefinedAudiences = [
    { 
      id: "ecommerce", 
      name: "Ecommerce Shoppers", 
      description: "Users who frequently shop online", 
      icon: <ShoppingCart className="h-5 w-5" />
    },
    { 
      id: "netflix", 
      name: "Netflix Content Consumers", 
      description: "Active Netflix subscribers and viewers", 
      icon: <Film className="h-5 w-5" />
    },
    { 
      id: "gamers", 
      name: "Gamers", 
      description: "Users interested in gaming content", 
      icon: <Gamepad2 className="h-5 w-5" />
    },
    { 
      id: "shampoo", 
      name: "Shampoo Purchasers", 
      description: "Recent purchasers of shampoo products", 
      icon: <Tv className="h-5 w-5" />
    },
  ];

  const audienceTypes = [
    { id: "custom", name: "Custom Audience" },
    { id: "lookalike", name: "Lookalike Audience" },
    { id: "interest", name: "Interest-Based" },
    { id: "demographic", name: "Demographic" },
  ];

  const handleActivate = () => {
    // Placeholder for activation logic
    console.log("Campaign activated on:", selectedPlatform);
    console.log("Selected audience:", selectedAudience);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20 col-span-2">
          <CardHeader>
            <CardTitle className="text-xl text-white">Campaign Activation</CardTitle>
            <CardDescription className="text-white/90">
              Deploy your campaign across multiple channels
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="audience" className="w-full">
              <TabsList className="bg-black/20 mb-4">
                <TabsTrigger value="audience" className="data-[state=active]:bg-vtion-purple text-white">
                  Audience
                </TabsTrigger>
                <TabsTrigger value="budget" className="data-[state=active]:bg-vtion-purple text-white">
                  Budget
                </TabsTrigger>
                <TabsTrigger value="schedule" className="data-[state=active]:bg-vtion-purple text-white">
                  Schedule
                </TabsTrigger>
              </TabsList>

              <TabsContent value="audience" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="audience-type" className="text-white">Audience Type</Label>
                  <Select>
                    <SelectTrigger className="bg-black/20 border-gray-700 text-white">
                      <SelectValue placeholder="Select audience type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-gray-700">
                      {audienceTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id} className="text-gray-200 focus:bg-vtion-purple focus:text-white">
                          {type.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-white">Predefined Audiences</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {predefinedAudiences.map((audience) => (
                      <div 
                        key={audience.id}
                        className={`p-3 border rounded-lg cursor-pointer transition-all duration-200 flex items-center space-x-3 ${
                          selectedAudience === audience.id 
                            ? "border-vtion-purple bg-vtion-purple/20" 
                            : "border-white/20 hover:border-white/40"
                        }`}
                        onClick={() => setSelectedAudience(audience.id)}
                      >
                        <div className="flex-shrink-0 text-vtion-purple">
                          {audience.icon}
                        </div>
                        <div>
                          <p className="font-medium text-white">{audience.name}</p>
                          <p className="text-white/70 text-sm">{audience.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="audience-size" className="text-white">Audience Size</Label>
                  <Input id="audience-size" placeholder="Enter audience size" className="bg-black/20 border-gray-700 text-white" />
                </div>
              </TabsContent>

              <TabsContent value="budget" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="budget-amount" className="text-white">Budget Amount</Label>
                  <Input id="budget-amount" placeholder="Enter budget amount" className="bg-black/20 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget-type" className="text-white">Budget Type</Label>
                  <Select>
                    <SelectTrigger className="bg-black/20 border-gray-700 text-white">
                      <SelectValue placeholder="Select budget type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-gray-700">
                      <SelectItem value="daily" className="text-gray-200 focus:bg-vtion-purple focus:text-white">Daily</SelectItem>
                      <SelectItem value="lifetime" className="text-gray-200 focus:bg-vtion-purple focus:text-white">Lifetime</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date" className="text-white">Start Date</Label>
                  <Input id="start-date" type="date" className="bg-black/20 border-gray-700 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date" className="text-white">End Date</Label>
                  <Input id="end-date" type="date" className="bg-black/20 border-gray-700 text-white" />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader>
            <CardTitle className="text-xl text-white">Platforms</CardTitle>
            <CardDescription className="text-white/90">
              Select platforms to activate your campaign
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platforms.map((platform) => (
                <div 
                  key={platform.id} 
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedPlatform === platform.id 
                      ? "border-vtion-purple bg-vtion-purple/20" 
                      : "border-white/20 hover:border-white/40"
                  }`}
                  onClick={() => setSelectedPlatform(platform.id)}
                >
                  <p className="font-medium text-white">{platform.name}</p>
                </div>
              ))}
              
              <Button 
                onClick={handleActivate}
                className="w-full mt-4 bg-vtion-purple hover:bg-vtion-purple/90"
              >
                Activate Campaign
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border border-white/20">
        <CardHeader>
          <CardTitle className="text-xl text-white">Campaign Status</CardTitle>
          <CardDescription className="text-white/90">
            Monitor your active campaigns across all channels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative overflow-x-auto rounded-lg border border-white/20">
            <table className="w-full text-left text-white">
              <thead className="bg-black/30 text-white text-sm">
                <tr>
                  <th className="p-4">Campaign Name</th>
                  <th className="p-4">Platform</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Budget</th>
                  <th className="p-4">Impressions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-white/20 bg-black/10">
                  <td className="p-4">Summer Promotion</td>
                  <td className="p-4">Facebook</td>
                  <td className="p-4"><span className="inline-block px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs">Active</span></td>
                  <td className="p-4">$5,000</td>
                  <td className="p-4">124,567</td>
                </tr>
                <tr className="border-t border-white/20 bg-black/10">
                  <td className="p-4">Brand Awareness</td>
                  <td className="p-4">YouTube</td>
                  <td className="p-4"><span className="inline-block px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs">Pending</span></td>
                  <td className="p-4">$3,200</td>
                  <td className="p-4">0</td>
                </tr>
                <tr className="border-t border-white/20 bg-black/10">
                  <td className="p-4">Product Launch</td>
                  <td className="p-4">Instagram</td>
                  <td className="p-4"><span className="inline-block px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">Scheduled</span></td>
                  <td className="p-4">$8,750</td>
                  <td className="p-4">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivateSection;
