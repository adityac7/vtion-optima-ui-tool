
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckIcon, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const MeasureForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brandName: "",
    industry: "",
    surveyType: "",
    campaignName: "",
    startDate: null as Date | null,
    endDate: null as Date | null,
    targetAudience: [] as string[],
    metrics: [] as string[],
    contactName: "",
    email: "",
    phone: "",
    customQuestions: "",
    reportFormat: "PDF"
  });
  const [submitted, setSubmitted] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmDialog(true);
  };

  const confirmSubmit = () => {
    setShowConfirmDialog(false);
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      brandName: "",
      industry: "",
      surveyType: "",
      campaignName: "",
      startDate: null,
      endDate: null,
      targetAudience: [],
      metrics: [],
      contactName: "",
      email: "",
      phone: "",
      customQuestions: "",
      reportFormat: "PDF"
    });
    setStep(1);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckIcon className="w-8 h-8 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Thank You!</h2>
        <p className="text-white/80 text-center mb-6">
          Your request has been submitted. Our VTION measure specialist will soon reach out to help you further.
        </p>
        <Button onClick={resetForm} variant="outline">Submit Another Request</Button>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">OPTIMA Measure Request Form</h2>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3, 4].map((i) => (
            <div 
              key={i}
              className={`flex-1 h-2 mx-1 rounded-full ${
                i <= step ? "bg-vtion-purple" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-white/70">
          <span>Brand Info</span>
          <span>Campaign</span>
          <span>Metrics</span>
          <span>Contact</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="brandName" className="text-white">Brand Name</Label>
              <Input 
                id="brandName"
                value={formData.brandName}
                onChange={(e) => updateFormData("brandName", e.target.value)}
                placeholder="Enter your brand name"
                className="mt-1 bg-white/5 border-white/20 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="industry" className="text-white">Industry</Label>
              <Select 
                value={formData.industry} 
                onValueChange={(value) => updateFormData("industry", value)}
              >
                <SelectTrigger className="mt-1 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Automotive">Automotive</SelectItem>
                  <SelectItem value="FMCG">FMCG</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label className="text-white mb-2 block">
                What do you need?
                <span className="inline-block ml-1">
                  <Popover>
                    <PopoverTrigger asChild>
                      <HelpCircle className="w-4 h-4 text-white/60" />
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                      <div className="space-y-2">
                        <h4 className="font-medium">Survey Types</h4>
                        <p className="text-sm">
                          <strong>Brand Lift Survey (BLS):</strong> Measures the impact of your ad campaign on brand awareness and perception.
                        </p>
                        <p className="text-sm">
                          <strong>Multi-Touch Attribution (MTA):</strong> Analyzes the contribution of different marketing touchpoints to conversions.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </span>
              </Label>
              <RadioGroup 
                value={formData.surveyType} 
                onValueChange={(value) => updateFormData("surveyType", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="BLS" id="r1" className="text-vtion-purple" />
                  <Label htmlFor="r1" className="text-white">Brand Lift Survey (BLS)</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="MTA" id="r2" className="text-vtion-purple" />
                  <Label htmlFor="r2" className="text-white">Multi-Touch Attribution (MTA)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Both" id="r3" className="text-vtion-purple" />
                  <Label htmlFor="r3" className="text-white">Both BLS and MTA</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.brandName || !formData.industry || !formData.surveyType}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="campaignName" className="text-white">Campaign Name</Label>
              <Input 
                id="campaignName"
                value={formData.campaignName}
                onChange={(e) => updateFormData("campaignName", e.target.value)}
                placeholder="Enter your campaign name"
                className="mt-1 bg-white/5 border-white/20 text-white"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-white">Campaign Start Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full mt-1 justify-start text-left font-normal bg-white/5 border-white/20 text-white",
                        !formData.startDate && "text-white/50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.startDate ?? undefined}
                      onSelect={(date) => updateFormData("startDate", date)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              <div>
                <Label className="text-white">Campaign End Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full mt-1 justify-start text-left font-normal bg-white/5 border-white/20 text-white",
                        !formData.endDate && "text-white/50"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.endDate ?? undefined}
                      onSelect={(date) => updateFormData("endDate", date)}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            
            <div>
              <Label className="text-white mb-2 block">Target Audience</Label>
              <div className="grid grid-cols-2 gap-2">
                {['Age Groups', 'Gender', 'Location', 'Interests'].map((audience) => (
                  <div className="flex items-center space-x-2" key={audience}>
                    <Checkbox 
                      id={audience}
                      checked={formData.targetAudience.includes(audience)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("targetAudience", [...formData.targetAudience, audience]);
                        } else {
                          updateFormData("targetAudience", formData.targetAudience.filter(a => a !== audience));
                        }
                      }}
                    />
                    <Label htmlFor={audience} className="text-white">{audience}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBack}
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.campaignName || !formData.startDate || !formData.endDate}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <Label className="text-white mb-2 block">What do you want to measure?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[
                  'Brand Awareness', 
                  'Ad Recall', 
                  'Purchase Intent', 
                  'Conversion Rate', 
                  'ROI (Return on Investment)'
                ].map((metric) => (
                  <div className="flex items-center space-x-2" key={metric}>
                    <Checkbox 
                      id={metric}
                      checked={formData.metrics.includes(metric)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("metrics", [...formData.metrics, metric]);
                        } else {
                          updateFormData("metrics", formData.metrics.filter(m => m !== metric));
                        }
                      }}
                    />
                    <Label htmlFor={metric} className="text-white">{metric}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            {(formData.surveyType === "BLS" || formData.surveyType === "Both") && (
              <div>
                <Label htmlFor="customQuestions" className="text-white">Custom Questions for the Survey</Label>
                <Textarea 
                  id="customQuestions"
                  value={formData.customQuestions}
                  onChange={(e) => updateFormData("customQuestions", e.target.value)}
                  placeholder="Add any custom questions you'd like to include in the survey"
                  className="mt-1 bg-white/5 border-white/20 text-white h-24"
                />
              </div>
            )}
            
            <div>
              <Label htmlFor="reportFormat" className="text-white">How would you like to receive the report?</Label>
              <Select 
                value={formData.reportFormat} 
                onValueChange={(value) => updateFormData("reportFormat", value)}
              >
                <SelectTrigger className="mt-1 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Select your preferred format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PDF">PDF</SelectItem>
                  <SelectItem value="Excel">Excel</SelectItem>
                  <SelectItem value="Dashboard">Dashboard Access</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBack}
              >
                Back
              </Button>
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={formData.metrics.length === 0}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <Label htmlFor="contactName" className="text-white">Contact Name</Label>
              <Input 
                id="contactName"
                value={formData.contactName}
                onChange={(e) => updateFormData("contactName", e.target.value)}
                placeholder="Enter your full name"
                className="mt-1 bg-white/5 border-white/20 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input 
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => updateFormData("email", e.target.value)}
                placeholder="Enter your email address"
                className="mt-1 bg-white/5 border-white/20 text-white"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-white">Phone Number (Optional)</Label>
              <Input 
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => updateFormData("phone", e.target.value)}
                placeholder="Enter your phone number"
                className="mt-1 bg-white/5 border-white/20 text-white"
              />
            </div>
            
            <div className="bg-vtion-purple/10 p-4 rounded-lg border border-vtion-purple/30 mt-6">
              <h3 className="text-white font-medium mb-2">Review Your Information</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div className="text-white/70">Brand:</div>
                <div className="text-white">{formData.brandName}</div>
                
                <div className="text-white/70">Industry:</div>
                <div className="text-white">{formData.industry}</div>
                
                <div className="text-white/70">Request Type:</div>
                <div className="text-white">{formData.surveyType}</div>
                
                <div className="text-white/70">Campaign:</div>
                <div className="text-white">{formData.campaignName}</div>
              </div>
            </div>
            
            <div className="flex justify-between pt-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={handleBack}
              >
                Back
              </Button>
              <Button 
                type="submit"
                disabled={!formData.contactName || !formData.email}
              >
                Submit Request
              </Button>
            </div>
          </div>
        )}
      </form>
      
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Submission</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit your request for {formData.surveyType}?
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end space-x-2 mt-4">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>Cancel</Button>
            <Button onClick={confirmSubmit}>Confirm</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MeasureForm;
