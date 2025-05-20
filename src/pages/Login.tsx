
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/boxstock/Header";
import Footer from "@/components/boxstock/Footer";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      toast.error("Vul alle velden in");
      return;
    }
    
    // Mock login success
    toast.success("Succesvol ingelogd");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <Card className="w-full max-w-lg bg-white shadow-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#00262F] mb-3">Inloggen</h1>
              <p className="text-gray-600">
                Log in op je Boxstock-account om je items te beheren en te verkopen
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Wachtwoord
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-[#002E3B] hover:bg-[#00262F]">
                Inloggen
              </Button>
              
              <div className="text-center text-sm">
                <span className="text-gray-500 mr-1">Of</span>
                <Link to="/login" className="flex justify-center items-center gap-2 mt-3 border border-gray-300 rounded-md p-2 hover:bg-gray-50 transition-colors">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-5 h-5" />
                  <span className="text-gray-700">Inloggen met Google</span>
                </Link>
              </div>

              <div className="flex items-center justify-between mt-6 text-sm">
                <Link to="/reset-password" className="text-gray-600 hover:text-gray-800">
                  Wachtwoord vergeten?
                </Link>
                <Link to="/register" className="text-[#E41A36] hover:underline font-medium">
                  Registreren
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default Login;
