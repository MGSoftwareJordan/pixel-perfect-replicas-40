
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/attic/Header";
import Footer from "@/components/attic/Footer";
import { Mail } from "lucide-react";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleResetRequest = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    // Mock password reset request
    setSubmitted(true);
    toast.success("Instructions sent to your email address");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-attic-gray to-white">
        <Card className="w-full max-w-lg bg-white shadow-sm">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-attic-black mb-3">Reset Password</h1>
              <p className="text-attic-dark-gray">
                We'll send you an email with instructions to reset your password.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleResetRequest} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-attic-teal hover:bg-opacity-90 text-white">
                  RESET PASSWORD
                </Button>
                
                <div className="text-center text-sm pt-4">
                  <span className="text-gray-600 mr-1">Remembered your password?</span>
                  <Link to="/login" className="text-attic-pink hover:underline font-medium">
                    Login
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
                  <p className="text-lg font-medium mb-2">Email sent!</p>
                  <p>If the email address is registered with us, you will shortly receive an email with instructions to reset your password.</p>
                </div>
                <Link to="/login">
                  <Button className="bg-attic-teal hover:bg-opacity-90 text-white">
                    Back to Login
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
