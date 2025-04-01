
import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, CheckIcon } from "lucide-react";
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const CustomSurveyForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    brandName: "",
    industry: "",
    surveyType: "",
    audienceSize: "",
    targetDemographic: [] as string[],
    surveyObjective: "",
    surveyQuestions: "",
    deliveryFormat: "Dashboard",
    contactName: "",
    email: "",
    phone: "",
    deadline: null as Date | null
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
      audienceSize: "",
      targetDemographic: [],
      surveyObjective: "",
      surveyQuestions: "",
      deliveryFormat: "Dashboard",
      contactName: "",
      email: "",
      phone: "",
      deadline: null
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
          Your custom survey request has been submitted. A VTION survey specialist will contact you shortly to discuss the details.
        </p>
        <Button onClick={resetForm} variant="outline">Submit Another Request</Button>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6">Custom Survey Request Form</h2>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className={`flex-1 h-2 mx-1 rounded-full ${
                i <= step ? "bg-vtion-purple" : "bg-white/20"
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs text-white/70">
          <span>Survey Info</span>
          <span>Survey Details</span>
          <span>Contact Info</span>
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
              <Label className="text-white mb-2 block">Survey Type</Label>
              <RadioGroup 
                value={formData.surveyType} 
                onValueChange={(value) => updateFormData("surveyType", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="Brand Health" id="r1" className="text-vtion-purple" />
                  <Label htmlFor="r1" className="text-white">Brand Health Survey</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="Product Feedback" id="r2" className="text-vtion-purple" />
                  <Label htmlFor="r2" className="text-white">Product Feedback Survey</Label>
                </div>
                <div className="flex items-center space-x-2 mb-2">
                  <RadioGroupItem value="Customer Satisfaction" id="r3" className="text-vtion-purple" />
                  <Label htmlFor="r3" className="text-white">Customer Satisfaction Survey</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Custom" id="r4" className="text-vtion-purple" />
                  <Label htmlFor="r4" className="text-white">Custom Survey Type</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div>
              <Label htmlFor="audienceSize" className="text-white">Target Audience Size</Label>
              <Select 
                value={formData.audienceSize} 
                onValueChange={(value) => updateFormData("audienceSize", value)}
              >
                <SelectTrigger className="mt-1 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Select audience size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small (100-500 respondents)</SelectItem>
                  <SelectItem value="medium">Medium (500-1000 respondents)</SelectItem>
                  <SelectItem value="large">Large (1000-2000 respondents)</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex justify-end pt-4">
              <Button 
                type="button" 
                onClick={handleNext}
                disabled={!formData.brandName || !formData.industry || !formData.surveyType || !formData.audienceSize}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <Label className="text-white mb-2 block">Target Demographics</Label>
              <div className="grid grid-cols-2 gap-2">
                {['Age Groups', 'Gender', 'Income Level', 'Location', 'Education', 'Occupation'].map((demographic) => (
                  <div className="flex items-center space-x-2" key={demographic}>
                    <Checkbox 
                      id={demographic}
                      checked={formData.targetDemographic.includes(demographic)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          updateFormData("targetDemographic", [...formData.targetDemographic, demographic]);
                        } else {
                          updateFormData("targetDemographic", formData.targetDemographic.filter(d => d !== demographic));
                        }
                      }}
                    />
                    <Label htmlFor={demographic} className="text-white">{demographic}</Label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <Label htmlFor="surveyObjective" className="text-white">Survey Objective</Label>
              <Textarea 
                id="surveyObjective"
                value={formData.surveyObjective}
                onChange={(e) => updateFormData("surveyObjective", e.target.value)}
                placeholder="Describe the main objective of your survey"
                className="mt-1 bg-white/5 border-white/20 text-white h-24"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="surveyQuestions" className="text-white">Survey Questions</Label>
              <Textarea 
                id="surveyQuestions"
                value={formData.surveyQuestions}
                onChange={(e) => updateFormData("surveyQuestions", e.target.value)}
                placeholder="List the key questions you want to include in your survey"
                className="mt-1 bg-white/5 border-white/20 text-white h-24"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="deliveryFormat" className="text-white">Preferred Delivery Format</Label>
              <Select 
                value={formData.deliveryFormat} 
                onValueChange={(value) => updateFormData("deliveryFormat", value)}
              >
                <SelectTrigger className="mt-1 bg-white/5 border-white/20 text-white">
                  <SelectValue placeholder="Select delivery format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dashboard">Interactive Dashboard</SelectItem>
                  <SelectItem value="PDF">PDF Report</SelectItem>
                  <SelectItem value="Excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="Presentation">PowerPoint Presentation</SelectItem>
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
                disabled={!formData.surveyObjective || !formData.surveyQuestions || formData.targetDemographic.length === 0}
              >
                Next
              </Button>
            </div>
          </div>
        )}
        
        {step === 3 && (
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
            
            <div>
              <Label className="text-white">Desired Completion Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full mt-1 justify-start text-left font-normal bg-white/5 border-white/20 text-white",
                      !formData.deadline && "text-white/50"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.deadline ? format(formData.deadline, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={formData.deadline ?? undefined}
                    onSelect={(date) => updateFormData("deadline", date)}
                    initialFocus
                    className="p-3 pointer-events-auto"
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="bg-vtion-purple/10 p-4 rounded-lg border border-vtion-purple/30 mt-6">
              <h3 className="text-white font-medium mb-2">Review Your Survey Request</h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div className="text-white/70">Brand:</div>
                <div className="text-white">{formData.brandName}</div>
                
                <div className="text-white/70">Industry:</div>
                <div className="text-white">{formData.industry}</div>
                
                <div className="text-white/70">Survey Type:</div>
                <div className="text-white">{formData.surveyType}</div>
                
                <div className="text-white/70">Audience Size:</div>
                <div className="text-white">{formData.audienceSize}</div>
                
                <div className="text-white/70">Delivery Format:</div>
                <div className="text-white">{formData.deliveryFormat}</div>
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
                disabled={!formData.contactName || !formData.email || !formData.deadline}
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
              Are you sure you want to submit your custom survey request?
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

export default CustomSurveyForm;
