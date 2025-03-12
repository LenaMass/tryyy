
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import QuizPage from "./pages/QuizPage";
import AISolutionsPage from "./pages/AISolutionsPage";
import PricingPage from "./pages/PricingPage";
import SelfGuidedSetupPage from "./pages/SelfGuidedSetupPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/self-guided-setup" element={<SelfGuidedSetupPage />} />
            <Route path="/ai-solutions" element={<AISolutionsPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/start-quiz" element={<QuizPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
