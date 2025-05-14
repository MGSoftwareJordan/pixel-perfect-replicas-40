
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

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
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
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
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
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
              <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                Als het e-mailadres bij ons bekend is, ontvang je binnenkort een e-mail met instructies om je wachtwoord te resetten.
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
  );
};

export default ResetPassword;
