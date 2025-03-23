
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      navigate("/user-selection");
    }, 1000);
  };

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    
    // Simulate sending password reset email
    setTimeout(() => {
      setResetLoading(false);
      setForgotPasswordOpen(false);
      toast({
        title: "Reset link sent",
        description: `Password reset instructions were sent to ${resetEmail}`,
        duration: 5000,
      });
      setResetEmail("");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-vtion-navy flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/20 to-vtion-lightPurple/20" />
      
      <div className="absolute w-96 h-96 bg-vtion-purple/30 rounded-full blur-3xl -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-vtion-lightPurple/30 rounded-full blur-3xl -bottom-20 -right-20" />

      <Card className="relative w-full max-w-md mx-4 p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center">
            <img 
              src="/lovable-uploads/f57d577c-4076-43a8-b9d5-40c7d55ef0bd.png" 
              alt="VTION Logo" 
              className="h-16 mb-2"
            />
            <span className="text-xl font-bold text-white">Connect</span>
          </div>
          
          <form onSubmit={handleLogin} className="w-full space-y-4">
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Password"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                required
              />
            </div>
            <div className="flex justify-end">
              <button 
                type="button"
                onClick={() => setForgotPasswordOpen(true)}
                className="text-white/80 text-sm hover:text-white hover:underline transition-colors"
              >
                Forgot Password?
              </button>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-vtion-purple hover:bg-vtion-purple/90 text-white font-medium py-2 rounded-lg transition-all duration-200 ease-in-out"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </div>
      </Card>

      <footer className="mt-8 text-white/60 text-sm max-w-md text-center px-4">
        Modules & Product cats' data to be populated basis subscription by Agency / Advertiser.
      </footer>

      {/* Forgot Password Dialog */}
      <Dialog open={forgotPasswordOpen} onOpenChange={setForgotPasswordOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Reset your password</DialogTitle>
            <DialogDescription>
              Enter your email address below to receive a password reset link.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handlePasswordReset}>
            <div className="flex items-center space-x-2 py-4">
              <div className="grid flex-1 gap-2">
                <Input
                  type="email"
                  placeholder="Email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
            </div>
            <DialogFooter className="sm:justify-between flex flex-col-reverse sm:flex-row gap-2">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                type="submit" 
                className="bg-vtion-purple hover:bg-vtion-purple/90"
                disabled={resetLoading}
              >
                {resetLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Send Reset Link
                  </span>
                )}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;
