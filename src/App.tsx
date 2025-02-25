import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ConfigProvider } from "./ConfigContext";
import { Helmet } from "react-helmet";
import config from "./config"; // Import config

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Helmet>
        <title>{config.appTitle}</title>
        <meta name="description" content={config.appDescription} />
        <meta name="keywords" content={config.keywords} />
        <meta name="author" content={config.author} />
        <meta property="og:title" content={config.appTitle} />
        <meta property="og:description" content={config.appDescription} />
        <meta property="og:image" content={config.ogImage} />
        <meta property="og:url" content={config.ogUrl} />
      </Helmet>
      <ConfigProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ConfigProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
