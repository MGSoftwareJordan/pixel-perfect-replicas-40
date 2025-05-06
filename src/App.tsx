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

// New imported pages for expanded categories
// These pages don't exist yet and would need to be created based on your requirements
// When created, uncomment these imports:
// import Interior from "./pages/Interior";
// import Beauty from "./pages/Beauty";
// import Tech from "./pages/Tech";
// import UrbanSport from "./pages/UrbanSport";

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
          
          {/* Existing category routes */}
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/clothing" element={<Clothing />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/brands" element={<Brands />} />
          
          {/* Pre-owned routes */}
          <Route path="/pre-owned" element={<PreOwned />} />
          <Route path="/pre-owned/product/:productId" element={<PreOwnedListings />} />
          <Route path="/pre-owned/:id" element={<PreOwnedProduct />} />
          <Route path="/profile/:sellerId" element={<ProfilePage />} />
          
          {/* New category routes - currently redirects to NotFound until pages are created */}
          <Route path="/interior" element={<NotFound />} />
          <Route path="/beauty" element={<NotFound />} />
          <Route path="/tech" element={<NotFound />} />
          <Route path="/urban-sport" element={<NotFound />} />
          
          {/* Subcategory routes - uncomment and replace with actual components when created */}
          {/* <Route path="/sneakers/:subcategory" element={<SneakersSubcategory />} /> */}
          {/* <Route path="/clothing/:subcategory" element={<ClothingSubcategory />} /> */}
          {/* <Route path="/accessories/:subcategory" element={<AccessoriesSubcategory />} /> */}
          {/* <Route path="/bags/:subcategory" element={<BagsSubcategory />} /> */}
          {/* <Route path="/interior/:subcategory" element={<InteriorSubcategory />} /> */}
          {/* <Route path="/beauty/:subcategory" element={<BeautySubcategory />} /> */}
          {/* <Route path="/tech/:subcategory" element={<TechSubcategory />} /> */}
          {/* <Route path="/urban-sport/:subcategory" element={<UrbanSportSubcategory />} /> */}
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
