/**
 * FEATURED PROJECT COMPONENT
 * Displays a single featured project with image and details
 * Shows completed work to potential clients
 * Can be used in project galleries and on the homepage
 */

import { Card, CardContent } from "@/components/ui/card";

// Props interface defines what data this component needs
interface FeaturedProjectProps {
  image: string;          // URL/path to project image
  title: string;          // Project name
  description: string;    // Brief project description
  category?: string;      // Optional project category (e.g., "Residential")
}

export default function FeaturedProject({ image, title, description, category }: FeaturedProjectProps) {
  return (
    // Project card with hover effect
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      {/* Project image container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          data-testid="img-project"
        />
        
        {/* Category badge overlaid on image (if category provided) */}
        {category && (
          <div className="absolute top-3 left-3">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-md text-xs font-semibold font-[Poppins]">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Project details section */}
      <CardContent className="p-6">
        {/* Project title */}
        <h3 className="text-lg font-semibold font-[Poppins] mb-2 text-card-foreground" data-testid="text-project-title">
          {title}
        </h3>
        
        {/* Project description */}
        <p className="text-muted-foreground font-[Inter] text-sm" data-testid="text-project-description">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
