
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      navigate("/user-selection");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-vtion-darkPurple flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-vtion-purple/20 to-vtion-lightPurple/20" />
      
      <div className="absolute w-96 h-96 bg-vtion-purple/30 rounded-full blur-3xl -top-20 -left-20" />
      <div className="absolute w-96 h-96 bg-vtion-lightPurple/30 rounded-full blur-3xl -bottom-20 -right-20" />

      <Card className="relative w-full max-w-md mx-4 p-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center space-y-6">
          <img 
            src="/lovable-uploads/bc89a4f0-9aa4-4729-b125-9258b8ae1d13.png" 
            alt="VTION Logo" 
            className="h-16 mb-6"
          />
          
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
    </div>
  );
};

export default Login;
