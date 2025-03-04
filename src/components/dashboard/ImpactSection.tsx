
import { useState } from 'react';
import { Bar, Line, BarChart as RechartBarChart, LineChart as RechartLineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, Smartphone, ShoppingCart, BarChart, Laptop, Tv } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

// Dummy data for charts
const appUsageData = [
  { name: 'Week 1', 'Pre-Campaign': 1000, 'Post-Campaign': 1300 },
  { name: 'Week 2', 'Pre-Campaign': 1200, 'Post-Campaign': 1600 },
  { name: 'Week 3', 'Pre-Campaign': 1100, 'Post-Campaign': 1900 },
  { name: 'Week 4', 'Pre-Campaign': 1300, 'Post-Campaign': 2200 },
];

const appDownloadsData = [
  { name: 'Week 1', 'Pre-Campaign': 300, 'Post-Campaign': 600 },
  { name: 'Week 2', 'Pre-Campaign': 400, 'Post-Campaign': 800 },
  { name: 'Week 3', 'Pre-Campaign': 350, 'Post-Campaign': 950 },
  { name: 'Week 4', 'Pre-Campaign': 450, 'Post-Campaign': 1100 },
];

const cartAdditionsData = [
  { name: 'Week 1', 'Pre-Campaign': 80, 'Post-Campaign': 120 },
  { name: 'Week 2', 'Pre-Campaign': 90, 'Post-Campaign': 170 },
  { name: 'Week 3', 'Pre-Campaign': 85, 'Post-Campaign': 190 },
  { name: 'Week 4', 'Pre-Campaign': 95, 'Post-Campaign': 220 },
];

const mtaAnalyticsData = [
  { name: 'Display', value: 30 },
  { name: 'Social', value: 25 },
  { name: 'Search', value: 20 },
  { name: 'Video', value: 15 },
  { name: 'Browser', value: 10 },
  { name: 'Connected TV', value: 12 },
];

const ImpactSection = () => {
  const [appType, setAppType] = useState("all");
  const [downloadType, setDownloadType] = useState("all");
  const [productCategory, setProductCategory] = useState("all");

  // App types for dropdown
  const appTypes = ["All Apps", "Social Media", "E-commerce", "Entertainment", "Utility"];
  
  // Product categories for dropdown
  const productCategories = ["All Categories", "Shampoo", "Health Food Drinks", "Mobile Phones", "Electronics", "Clothing"];

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold">Impact Analysis</h2>
      <p className="text-white/70 mb-6">
        Measure the real-world impact of your campaigns with these comprehensive analytics tools.
      </p>

      <Tabs defaultValue="app-usage" className="w-full">
        <TabsList className="bg-white/10 backdrop-blur-md border border-white/20 p-1 mb-6">
          <TabsTrigger value="app-usage" className="data-[state=active]:bg-vtion-purple text-white">
            <Smartphone className="mr-2 h-4 w-4" />
            App Usage
          </TabsTrigger>
          <TabsTrigger value="app-downloads" className="data-[state=active]:bg-vtion-purple text-white">
            <Activity className="mr-2 h-4 w-4" />
            App Downloads
          </TabsTrigger>
          <TabsTrigger value="cart-additions" className="data-[state=active]:bg-vtion-purple text-white">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Cart Additions
          </TabsTrigger>
          <TabsTrigger value="mta-analytics" className="data-[state=active]:bg-vtion-purple text-white">
            <BarChart className="mr-2 h-4 w-4" />
            MTA Analytics
          </TabsTrigger>
        </TabsList>

        <TabsContent value="app-usage" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="flex items-center">
                  <Smartphone className="mr-2 h-5 w-5 text-vtion-purple" />
                  App Usage - Pre vs Post Campaign
                </CardTitle>
                <div className="w-full sm:w-auto max-w-xs">
                  <Label htmlFor="app-type" className="text-sm text-white/80 mb-1 block">Filter by App Type</Label>
                  <Select value={appType} onValueChange={setAppType}>
                    <SelectTrigger id="app-type" className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="All Apps" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 border-white/30">
                      {appTypes.map((type, index) => (
                        <SelectItem key={index} value={type.toLowerCase().replace(' ', '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={appUsageData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                    <Legend />
                    <Bar dataKey="Pre-Campaign" fill="#8884d8" />
                    <Bar dataKey="Post-Campaign" fill="#82ca9d" />
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  The data shows a significant increase in app usage following the campaign, with Week 4 
                  showing the highest impact (+69% compared to pre-campaign levels).
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="app-downloads" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="flex items-center">
                  <Activity className="mr-2 h-5 w-5 text-vtion-purple" />
                  App Downloads - Pre vs Post Campaign
                </CardTitle>
                <div className="w-full sm:w-auto max-w-xs">
                  <Label htmlFor="download-type" className="text-sm text-white/80 mb-1 block">Filter by App Type</Label>
                  <Select value={downloadType} onValueChange={setDownloadType}>
                    <SelectTrigger id="download-type" className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="All Apps" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 border-white/30">
                      {appTypes.map((type, index) => (
                        <SelectItem key={index} value={type.toLowerCase().replace(' ', '-')}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartLineChart
                    data={appDownloadsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                    <Legend />
                    <Line type="monotone" dataKey="Pre-Campaign" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Post-Campaign" stroke="#82ca9d" />
                  </RechartLineChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  App downloads increased by an average of 144% post-campaign, with the most significant 
                  growth observed in Week 4 (+144% increase).
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cart-additions" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5 text-vtion-purple" />
                  Cart Additions - Pre vs Post Campaign
                </CardTitle>
                <div className="w-full sm:w-auto max-w-xs">
                  <Label htmlFor="product-category" className="text-sm text-white/80 mb-1 block">Filter by Product Category</Label>
                  <Select value={productCategory} onValueChange={setProductCategory}>
                    <SelectTrigger id="product-category" className="bg-white/10 border-white/30 text-white">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/90 border-white/30">
                      {productCategories.map((category, index) => (
                        <SelectItem key={index} value={category.toLowerCase().replace(' ', '-')}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={cartAdditionsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#555' }} />
                    <Legend />
                    <Bar dataKey="Pre-Campaign" fill="#8884d8" />
                    <Bar dataKey="Post-Campaign" fill="#82ca9d" />
                  </RechartBarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h4 className="font-medium mb-2">Analysis</h4>
                <p className="text-white/80">
                  Cart additions saw substantial growth after the campaign launch, with a peak 
                  increase of 132% by Week 4 compared to pre-campaign metrics.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mta-analytics" className="mt-0">
          <Card className="bg-white/10 backdrop-blur-md border border-white/20">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-vtion-purple" />
                Multi-Touch Attribution Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartBarChart
                    data={mtaAnalyticsData}
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
                  Display and Social channels show the highest contribution to conversions at 30% and 25% 
                  respectively. Browser and Connected TV (CTV) channels contributed 10% and 12% respectively.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ImpactSection;
