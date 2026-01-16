/**
 * SERVICE CARD COMPONENT
 * This reusable component displays individual service offerings
 * Each card shows an icon, service name, and description
 * Used throughout the website to showcase different services
 */

import { Card, CardContent } from "@/components/ui/card";

// Define the props (properties) that this component accepts
interface ServiceCardProps {
  icon: string;           // Font Awesome icon class (e.g., "fa-hammer")
  title: string;          // Service name (e.g., "MS Fabrication")
  description: string;    // Short description of the service
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    // Card container with hover effect for interactivity
    // hover-elevate adds a subtle lift effect when user hovers
    <Card className="hover-elevate transition-all duration-300" data-testid={`card-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <CardContent className="p-6">
        {/* Icon container with primary color background */}
        <div className="w-16 h-16 rounded-md bg-primary/10 flex items-center justify-center mb-4">
          <i className={`fas ${icon} text-3xl text-primary`}></i>
        </div>
        
        {/* Service title */}
        <h3 className="text-xl font-semibold font-[Poppins] mb-2 text-card-foreground" data-testid="text-service-title">
          {title}
        </h3>
        
        {/* Service description */}
        <p className="text-muted-foreground font-[Inter] text-sm leading-relaxed" data-testid="text-service-description">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
