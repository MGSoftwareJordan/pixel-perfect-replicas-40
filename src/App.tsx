
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PreOwnedProduct from "./pages/PreOwnedProduct";
import PreOwnedListings from "./pages/PreOwnedListings";
import ProfilePage from "./pages/ProfilePage";
import Sneakers from "./pages/Sneakers";
import Accessories from "./pages/Accessories";
import Clothing from "./pages/Clothing";
import Bags from "./pages/Bags";
import Brands from "./pages/Brands";
import PreOwned from "./pages/PreOwned";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Account from "./pages/Account";
import OfferDetailView from "./components/account/OfferDetailView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/product" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/pre-owned" element={<PreOwned />} />
          <Route path="/pre-owned/product/:productId" element={<PreOwnedListings />} />
          <Route path="/pre-owned/:id" element={<PreOwnedProduct />} />
          <Route path="/profile/:sellerId" element={<ProfilePage />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          
          {/* Account pages */}
          <Route path="/account" element={<Account />} />
          <Route path="/account/:section" element={<Account />} />
          <Route path="/account/offers/:id" element={<Account />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
