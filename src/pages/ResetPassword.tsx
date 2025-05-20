
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/boxstock/Header";
import Footer from "@/components/boxstock/Footer";
import { Mail } from "lucide-react";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      toast.error("Vul je e-mailadres in");
      return;
    }
    
    // Mock password reset request
    setSubmitted(true);
    toast.success("Instructies verstuurd naar je e-mailadres");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <Card className="w-full max-w-lg bg-white shadow-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-[#00262F] mb-3">Wachtwoord Resetten</h1>
              <p className="text-gray-600">
                We sturen je een e-mail met instructies om je wachtwoord te resetten.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleResetRequest} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-mailadres
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10"
                      placeholder="jouw@email.nl"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#002E3B] hover:bg-[#00262F]">
                  Resetten
                </Button>
                
                <div className="text-center text-sm pt-4">
                  <span className="text-gray-600 mr-1">Wachtwoord herinnerd?</span>
                  <Link to="/login" className="text-[#E41A36] hover:underline font-medium">
                    Inloggen
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center">
                <div className="bg-green-50 text-green-800 p-6 rounded-md mb-6 border border-green-100">
                  <div className="flex justify-center mb-4">
                    <div className="rounded-full bg-green-100 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg font-medium mb-2">E-mail verzonden!</p>
                  <p>Als het e-mailadres bij ons bekend is, ontvang je binnenkort een e-mail met instructies om je wachtwoord te resetten.</p>
                </div>
                <Link to="/login">
                  <Button className="bg-[#002E3B] hover:bg-[#00262F]">
                    Terug naar Inloggen
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </>
  );
};

export default ResetPassword;
