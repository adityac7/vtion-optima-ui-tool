
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export interface ExposureSectionProps {
  userType?: string;
}

const ExposureSection = ({ userType = 'advertiser' }: ExposureSectionProps) => {
  // Sample data
  const mediaExposureData = [
    { platform: 'TV', impressions: 3800, index: 105 },
    { platform: 'Digital', impressions: 4200, index: 122 },
    { platform: 'OOH', impressions: 1500, index: 95 },
    { platform: 'Radio', impressions: 2300, index: 88 },
    { platform: 'Print', impressions: 1800, index: 75 },
  ];

  const demographicData = [
    { name: '18-24', value: 20 },
    { name: '25-34', value: 35 },
    { name: '35-44', value: 25 },
    { name: '45-54', value: 15 },
    { name: '55+', value: 5 },
  ];

  const frequencyData = [
    { frequency: '1', users: 5000 },
    { frequency: '2', users: 4200 },
    { frequency: '3', users: 3800 },
    { frequency: '4', users: 3200 },
    { frequency: '5', users: 2700 },
    { frequency: '6+', users: 6500 },
  ];

  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-white">Media Exposure Analytics</h2>
        
        <div className="flex space-x-4">
          <div className="w-40">
            <Label htmlFor="time-period" className="text-white mb-1 block">Time Period</Label>
            <Select>
              <SelectTrigger id="time-period" className="bg-black/20 border-gray-700 text-white">
                <SelectValue placeholder="Last 30 days" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-gray-700">
                <SelectItem value="7days" className="text-gray-200 focus:bg-vtion-purple focus:text-white">Last 7 days</SelectItem>
                <SelectItem value="30days" className="text-gray-200 focus:bg-vtion-purple focus:text-white">Last 30 days</SelectItem>
                <SelectItem value="90days" className="text-gray-200 focus:bg-vtion-purple focus:text-white">Last 90 days</SelectItem>
                <SelectItem value="year" className="text-gray-200 focus:bg-vtion-purple focus:text-white">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="w-40">
            <Label htmlFor="geography" className="text-white mb-1 block">Geography</Label>
            <Select>
              <SelectTrigger id="geography" className="bg-black/20 border-gray-700 text-white">
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-gray-700">
                <SelectItem value="all" className="text-gray-200 focus:bg-vtion-purple focus:text-white">All Regions</SelectItem>
                <SelectItem value="north" className="text-gray-200 focus:bg-vtion-purple focus:text-white">North</SelectItem>
                <SelectItem value="south" className="text-gray-200 focus:bg-vtion-purple focus:text-white">South</SelectItem>
                <SelectItem value="east" className="text-gray-200 focus:bg-vtion-purple focus:text-white">East</SelectItem>
                <SelectItem value="west" className="text-gray-200 focus:bg-vtion-purple focus:text-white">West</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-white">Total Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">13.6M</div>
            <p className="text-green-400 flex items-center mt-2">
              <span>↑ 8.3%</span>
              <span className="text-white/70 text-sm ml-2">vs. last period</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-white">Reach</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">5.2M</div>
            <p className="text-green-400 flex items-center mt-2">
              <span>↑ 3.7%</span>
              <span className="text-white/70 text-sm ml-2">vs. last period</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-white">Frequency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">2.6</div>
            <p className="text-red-400 flex items-center mt-2">
              <span>↓ 0.3</span>
              <span className="text-white/70 text-sm ml-2">vs. last period</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader>
            <CardTitle className="text-xl text-white">Media Exposure by Platform</CardTitle>
            <CardDescription className="text-white/90">
              Distribution of impressions across different media platforms
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mediaExposureData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="platform" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                <Legend wrapperStyle={{ color: 'white' }} />
                <Bar dataKey="impressions" name="Impressions (000s)" fill="#8884d8" />
                <Bar dataKey="index" name="Index" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader>
            <CardTitle className="text-xl text-white">Audience Demographics</CardTitle>
            <CardDescription className="text-white/90">
              Age distribution of exposed audience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white/10 backdrop-blur-md border border-white/20">
        <CardHeader>
          <CardTitle className="text-xl text-white">Exposure Analysis</CardTitle>
          <CardDescription className="text-white/90">
            Detailed insights into media exposure patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frequency" className="w-full">
            <TabsList className="bg-black/20 mb-4">
              <TabsTrigger value="frequency" className="data-[state=active]:bg-vtion-purple text-white">
                Frequency Distribution
              </TabsTrigger>
              <TabsTrigger value="daypart" className="data-[state=active]:bg-vtion-purple text-white">
                Daypart Analysis
              </TabsTrigger>
              <TabsTrigger value="trend" className="data-[state=active]:bg-vtion-purple text-white">
                Exposure Trends
              </TabsTrigger>
            </TabsList>

            <TabsContent value="frequency">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={frequencyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="frequency" stroke="rgba(255,255,255,0.7)" />
                  <YAxis stroke="rgba(255,255,255,0.7)" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                  <Legend wrapperStyle={{ color: 'white' }} />
                  <Bar dataKey="users" name="Users" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="daypart">
              <div className="text-white">Daypart analysis content</div>
            </TabsContent>

            <TabsContent value="trend">
              <div className="text-white">Exposure trends content</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExposureSection;
