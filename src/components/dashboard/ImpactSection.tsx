import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export interface ImpactSectionProps {
  userType?: string;
}

const ImpactSection = ({ userType = 'advertiser' }: ImpactSectionProps) => {
  // Data for charts
  const performanceData = [
    { month: 'Jan', impressions: 2400, conversions: 240 },
    { month: 'Feb', impressions: 1398, conversions: 210 },
    { month: 'Mar', impressions: 9800, conversions: 320 },
    { month: 'Apr', impressions: 3908, conversions: 280 },
    { month: 'May', impressions: 4800, conversions: 290 },
    { month: 'Jun', impressions: 3800, conversions: 270 },
  ];

  const channelData = [
    { channel: 'Social', value: 40 },
    { channel: 'Search', value: 30 },
    { channel: 'Display', value: 20 },
    { channel: 'CTV', value: 10 },
    { channel: 'Browser', value: 15 },
  ];

  // Data for detailed analysis tab
  const detailedAnalysisData = [
    { campaign: 'Alpha', roi: 3.2, cost: 1200, revenue: 3840 },
    { campaign: 'Beta', roi: 2.8, cost: 1500, revenue: 4200 },
    { campaign: 'Gamma', roi: 4.5, cost: 800, revenue: 3600 },
    { campaign: 'Delta', roi: 1.9, cost: 2000, revenue: 3800 },
    { campaign: 'Epsilon', roi: 3.7, cost: 1100, revenue: 4070 },
  ];

  // Data for campaign comparison
  const campaignComparisonData = [
    { name: 'Jan', Campaign1: 4000, Campaign2: 2400, Campaign3: 1800 },
    { name: 'Feb', Campaign1: 3000, Campaign2: 1398, Campaign3: 2800 },
    { name: 'Mar', Campaign1: 2000, Campaign2: 9800, Campaign3: 2200 },
    { name: 'Apr', Campaign1: 2780, Campaign2: 3908, Campaign3: 2000 },
    { name: 'May', Campaign1: 1890, Campaign2: 4800, Campaign3: 2500 },
    { name: 'Jun', Campaign1: 2390, Campaign2: 3800, Campaign3: 2100 },
  ];

  const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c'];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader>
            <CardTitle className="text-xl text-white">Campaign Performance</CardTitle>
            <CardDescription className="text-white/90">
              Track impressions and conversions over time
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                <YAxis stroke="rgba(255,255,255,0.7)" />
                <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                <Legend wrapperStyle={{ color: 'white' }} />
                <Line type="monotone" dataKey="impressions" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="conversions" stroke="#ffc658" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader>
            <CardTitle className="text-xl text-white">Channel Distribution</CardTitle>
            <CardDescription className="text-white/90">
              View performance by marketing channel
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ channel, percent }) => `${channel}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {channelData.map((entry, index) => (
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
          <CardTitle className="text-xl text-white">ROI Analysis</CardTitle>
          <CardDescription className="text-white/90">
            Measure your return on investment across campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="bg-black/20 mb-4">
              <TabsTrigger value="overview" className="data-[state=active]:bg-vtion-purple text-white">
                Overview
              </TabsTrigger>
              <TabsTrigger value="detailed" className="data-[state=active]:bg-vtion-purple text-white">
                Detailed Analysis
              </TabsTrigger>
              <TabsTrigger value="comparison" className="data-[state=active]:bg-vtion-purple text-white">
                Campaign Comparison
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.7)" />
                  <YAxis stroke="rgba(255,255,255,0.7)" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                  <Legend wrapperStyle={{ color: 'white' }} />
                  <Bar dataKey="impressions" name="Impressions" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="detailed">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={detailedAnalysisData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="campaign" stroke="rgba(255,255,255,0.7)" />
                  <YAxis stroke="rgba(255,255,255,0.7)" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                  <Legend wrapperStyle={{ color: 'white' }} />
                  <Bar dataKey="roi" name="ROI" fill="#8884d8" />
                  <Bar dataKey="cost" name="Cost ($)" fill="#82ca9d" />
                  <Bar dataKey="revenue" name="Revenue ($)" fill="#ffc658" />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>

            <TabsContent value="comparison">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={campaignComparisonData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.7)" />
                  <YAxis stroke="rgba(255,255,255,0.7)" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid rgba(255,255,255,0.2)' }} />
                  <Legend wrapperStyle={{ color: 'white' }} />
                  <Line type="monotone" dataKey="Campaign1" stroke="#8884d8" />
                  <Line type="monotone" dataKey="Campaign2" stroke="#82ca9d" />
                  <Line type="monotone" dataKey="Campaign3" stroke="#ffc658" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-white">Total Impressions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">1.2M</div>
            <p className="text-green-400 flex items-center mt-2">
              <span>↑ 12.5%</span>
              <span className="text-white/70 text-sm ml-2">vs. last period</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-white">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">3.2%</div>
            <p className="text-red-400 flex items-center mt-2">
              <span>↓ 0.8%</span>
              <span className="text-white/70 text-sm ml-2">vs. last period</span>
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-md border border-white/20">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl text-white">Average CPM</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-white">$4.50</div>
            <p className="text-green-400 flex items-center mt-2">
              <span>↑ 5.2%</span>
              <span className="text-white/70 text-sm ml-2">efficiency improvement</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImpactSection;
