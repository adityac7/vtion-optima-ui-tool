
import { Bar, Pie, Line, BarChart as RechartBarChart, LineChart as RechartLineChart, PieChart as RechartPieChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart, PieChart, TrendingUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Dummy data for charts
const blsData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 6000 },
  { name: 'May', value: 7000 },
  { name: 'Jun', value: 8000 },
];

const reachData = [
  { name: '18-24', male: 2000, female: 2400 },
  { name: '25-34', male: 4000, female: 3800 },
  { name: '35-44', male: 3000, female: 3200 },
  { name: '45-54', male: 1500, female: 1800 },
  { name: '55+', male: 1000, female: 1200 },
];

const otrData = [
  { name: 'Target Audience', value: 70 },
  { name: 'Non-Target', value: 30 },
];

const COLORS = ['#9b87f5', '#D6BCFA'];

const frequencyData = [
  { name: '1x', value: 35 },
  { name: '2x', value: 25 },
  { name: '3x', value: 15 },
  { name: '4x', value: 10 },
  { name: '5x+', value: 15 },
];

const ExposureSection = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Exposure Metrics</h2>
      <p className="text-white/70 mb-6">
        Track how your campaigns are reaching and engaging with your audience.
      </p>

      <Tabs defaultValue="bls" className="w-full">
        <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 p-1 mb-6">
          <TabsTrigger value="bls" className="data-[state=active]:bg-vtion-purple text-white">
            <Activity className="mr-2 h-4 w-4" />
            BLS
          </TabsTrigger>
          <TabsTrigger value="reach" className="data-[state=active]:bg-vtion-purple text-white">
            <TrendingUp className="mr-2 h-4 w-4" />
            Reach
          </TabsTrigger>
          <TabsTrigger value="otr" className="data-[state=active]:bg-vtion-purple text-white">
            <PieChart className="mr-2 h-4 w-4" />
            On-Target Reach
          </TabsTrigger>
          <TabsTrigger value="frequency" className="data-[state=active]:bg-vtion-purple text-white">
            <BarChart className="mr-2 h-4 w-4" />
            Frequency
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bls" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-vtion-purple" />
                Brand Lift Score (BLS) - Monthly Trend
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartLineChart
                    data={blsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#9b87f5" activeDot={{ r: 8 }} />
                  </RechartLineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  Brand Lift Score shows a steady increase over the six-month period, with a 
                  particularly strong performance in May and June, indicating growing brand awareness.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reach" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-vtion-purple" />
                Reach by Demographic
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={reachData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                    <Legend />
                    <Bar dataKey="male" fill="#9b87f5" />
                    <Bar dataKey="female" fill="#D6BCFA" />
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  The 25-34 age group shows the highest reach across both genders, with slightly higher reach 
                  among females in most age segments. The campaign effectively reached the primary target 
                  demographic of young adults.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="otr" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-vtion-purple" />
                On-Target Reach (OTR)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full flex items-center justify-center">
                <ResponsiveContainer width="70%" height="100%">
                  <RechartPieChart>
                    <Pie
                      data={otrData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {otrData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                  </RechartPieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  70% of campaign impressions reached the intended target audience, indicating good targeting 
                  efficiency. There's opportunity to further optimize targeting to improve the current 
                  OTR metric.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="frequency" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-vtion-purple" />
                Frequency Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={frequencyData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                    <Legend />
                    <Bar dataKey="value" fill="#9b87f5" />
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  35% of the audience was exposed to the campaign just once, while 25% saw it twice. 
                  There's a good distribution across frequency levels, with 15% of users seeing the ad 
                  5 or more times, which may indicate potential for frequency capping optimization.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ExposureSection;
