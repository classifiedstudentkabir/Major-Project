/**
 * MAIN APP COMPONENT
 * This is the root component that sets up routing for the entire application
 * It wraps all pages with necessary providers (React Query, Tooltips, Toast notifications)
 * Uses wouter for client-side routing
 */

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Import page components
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Feedback from "@/pages/Feedback";
import NotFound from "@/pages/not-found";

// Import layout components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Router Component
 * Defines all application routes and maps them to page components
 */
function Router() {
  return (
    <Switch>
      {/* Home page - Landing page with hero, services overview, and featured projects */}
      <Route path="/" component={Home} />
      
      {/* Services page - Detailed list of all services offered */}
      <Route path="/services" component={Services} />
      
      {/* Projects page - Gallery of completed projects (also called Posts in requirements) */}
      <Route path="/projects" component={Projects} />
      
      {/* Contact page - Contact form and business information */}
      <Route path="/contact" component={Contact} />
      
      {/* Feedback page - Customer testimonials and feedback submission */}
      <Route path="/feedback" component={Feedback} />
      
      {/* 404 page - Fallback for any unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Main App Component
 * Sets up global providers and layout structure
 */
function App() {
  return (
    // React Query Provider - Manages server state and API requests
    <QueryClientProvider client={queryClient}>
      {/* Tooltip Provider - Enables tooltip functionality across the app */}
      <TooltipProvider>
        {/* Main app container with flexbox layout */}
        <div className="flex flex-col min-h-screen">
          {/* Header component - Navigation bar at top of every page */}
          <Header />
          
          {/* Main content area - Contains page-specific content */}
          <main className="flex-1">
            <Router />
          </main>
          
          {/* Footer component - Appears at bottom of every page */}
          <Footer />
        </div>
        
        {/* Toast notifications - For showing success/error messages */}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
