/**
 * HERO COMPONENT
 * This is the main hero section that appears at the top of the homepage
 * It features a large image gallery with the company tagline and call-to-action button
 * The hero creates visual impact and communicates the company's core message
 */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import weldingImage from "@assets/generated_images/welding_construction_worker.png";
import windowImage from "@assets/generated_images/window_installation_scene.png";
import interiorImage from "@assets/generated_images/luxury_interior_design.png";

export default function Hero() {
  return (
    // Main hero container with dark background to match design
    // min-h-[70vh] ensures the hero takes up most of the viewport
    <section className="relative bg-sidebar overflow-hidden" data-testid="section-hero">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        
        {/* HERO IMAGE GRID - Three professional construction images displayed horizontally */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Image 1: Welding worker */}
          <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
            <img 
              src={weldingImage} 
              alt="Professional welding work" 
              className="w-full h-full object-cover"
              data-testid="img-hero-welding"
            />
          </div>
          
          {/* Image 2: Window installation */}
          <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
            <img 
              src={windowImage} 
              alt="Window installation services" 
              className="w-full h-full object-cover"
              data-testid="img-hero-window"
            />
          </div>
          
          {/* Image 3: Interior design */}
          <div className="relative h-48 md:h-64 rounded-md overflow-hidden">
            <img 
              src={interiorImage} 
              alt="Interior decoration work" 
              className="w-full h-full object-cover"
              data-testid="img-hero-interior"
            />
          </div>
        </div>

        {/* HERO TEXT CONTENT - Company tagline and description */}
        <div className="text-center mt-8">
          {/* Main tagline - large, bold text that captures attention */}
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-sidebar-foreground font-[Poppins] mb-4"
            data-testid="text-hero-tagline"
          >
            CRAFTING SPACES. FOUNDATION. BUILDING TOMORROW
          </h1>
          
          {/* Supporting description text */}
          <p className="text-sidebar-foreground/80 text-base md:text-lg font-[Inter] mb-8 max-w-2xl mx-auto">
            Expert civil contractor services with over years of experience in construction, 
            fabrication, and interior solutions. Quality workmanship for residential and commercial projects.
          </p>

          {/* Call-to-Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Primary CTA - Get Quote */}
            <Link href="/contact">
              <Button 
                size="lg" 
                className="font-[Poppins] font-semibold"
                data-testid="button-get-quote"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get a Quote
              </Button>
            </Link>
            
            {/* Secondary CTA - View Services */}
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline"
                className="font-[Poppins] font-semibold bg-background/10 backdrop-blur-sm text-sidebar-foreground border-sidebar-foreground/30 hover:bg-background/20"
                data-testid="button-view-services"
              >
                <i className="fas fa-tools mr-2"></i>
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative arrow pointing down - indicates more content below */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <i className="fas fa-chevron-down text-sidebar-foreground/50 text-2xl"></i>
      </div>
    </section>
  );
}
