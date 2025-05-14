
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/boxstock/Header";
import Footer from "@/components/boxstock/Footer";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isReseller, setIsReseller] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      toast.error("Vul alle verplichte velden in");
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error("Wachtwoorden komen niet overeen");
      return;
    }
    
    // Mock registration success
    toast.success("Account succesvol aangemaakt");
    navigate("/login");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side: Registration form */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-[#00262F] mb-3">Word lid van Boxstock</h1>
                <p className="text-gray-600">
                  Maak een account aan en start met kopen en verkopen
                </p>
              </div>

              <form onSubmit={handleRegister} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                      Voornaam <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full pl-10"
                        placeholder="John"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                      Tussenvoegsel
                    </label>
                    <Input
                      id="middleName"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                      className="w-full"
                      placeholder="van"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                      Achternaam <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-mailadres <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10"
                        placeholder="john.doe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Telefoonnummer
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full"
                      placeholder="+31 6 12345678"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Wachtwoord <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-10"
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
                  
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                      Bevestig Wachtwoord <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full pl-10 pr-10"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 bg-[#F8FAFC] p-3 rounded-md border border-gray-100">
                  <Checkbox 
                    id="isReseller" 
                    checked={isReseller} 
                    onCheckedChange={(checked) => setIsReseller(checked as boolean)}
                  />
                  <label
                    htmlFor="isReseller"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Ben je een wederverkoper?
                  </label>
                </div>

                <div className="text-xs text-gray-500 bg-[#F8FAFC] p-3 rounded-md border border-gray-100">
                  Door een account aan te maken ga je akkoord met onze 
                  <Link to="/terms" className="text-[#E41A36] hover:underline ml-1">algemene voorwaarden</Link> en 
                  <Link to="/privacy" className="text-[#E41A36] hover:underline ml-1">privacybeleid</Link>.
                </div>

                <Button type="submit" className="w-full bg-[#002E3B] hover:bg-[#00262F] text-white py-3">
                  Registreren
                </Button>

                <div className="text-center text-sm pt-4">
                  <span className="text-gray-600">Heb je al een account? </span>
                  <Link to="/login" className="text-[#E41A36] hover:underline font-medium">
                    Inloggen
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Right side: Benefits */}
          <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
            <AspectRatio ratio={4/5} className="bg-[#00262F]">
              <div className="h-full w-full p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Voordelen van een Boxstock account</h2>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-[#1EC0A3] p-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">Koop en verkoop exclusieve sneakers en streetwear</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-[#1EC0A3] p-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">Krijg toegang tot exclusieve releases en aanbiedingen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-[#1EC0A3] p-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">Bewaar je favoriete items en krijg meldingen over prijsveranderingen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-[#1EC0A3] p-1 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-200 text-lg">Bouw een reputatie op en word een vertrouwde verkoper</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-12">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/boxstock-products.png?placeholderIfAbsent=true" 
                    alt="Boxstock producten" 
                    className="rounded-md shadow-lg mx-auto"
                  />
                </div>
              </div>
            </AspectRatio>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
