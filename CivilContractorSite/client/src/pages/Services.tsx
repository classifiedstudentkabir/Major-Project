/**
 * SERVICES PAGE
 * Comprehensive display of all services offered by Krishna Enterprises
 * Each service includes detailed description, key features, and visual representation
 */

import ServiceCard from "@/components/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import roofingImage from "@assets/generated_images/roof_tiles_construction.png";
import doorImage from "@assets/generated_images/door_installation_workers.png";
import materialsImage from "@assets/generated_images/quality_construction_materials.png";

export default function Services() {
  // All services with comprehensive details
  const allServices = [
    {
      icon: "fa-industry",
      title: "MS Fabrication",
      description: "Expert metal fabrication services including structural steel work, custom metal designs, and precision welding for industrial and commercial projects."
    },
    {
      icon: "fa-window-maximize",
      title: "Aluminium Works",
      description: "Premium aluminium fabrication for windows, doors, partitions, and structural elements with modern designs and durable finishes."
    },
    {
      icon: "fa-cut",
      title: "Saloon Decoration",
      description: "Complete salon interior design and decoration services including modern fixtures, lighting, and custom furniture solutions."
    },
    {
      icon: "fa-grip-lines",
      title: "MS Railing",
      description: "Stylish and secure MS railing installations for stairs, balconies, and terraces with contemporary and traditional designs."
    },
    {
      icon: "fa-couch",
      title: "Interior Decorator",
      description: "Professional interior decoration services transforming spaces with elegant designs, quality materials, and expert craftsmanship."
    },
    {
      icon: "fa-paint-roller",
      title: "Fabric & Painting",
      description: "Premium painting and fabric work including wall treatments, decorative finishes, and textile installations for beautiful interiors."
    },
    {
      icon: "fa-chair",
      title: "Furniture Solutions",
      description: "Custom furniture design and installation for residential and commercial spaces with quality materials and modern aesthetics."
    }
  ];

  // Specialized service highlights with images
  const specializedServices = [
    {
      image: roofingImage,
      title: "Expert Roofing Solutions",
      description: "We offer comprehensive roofing services using premium materials. From installation to repair and maintenance, our team ensures long-lasting protection for your property.",
      features: ["Premium quality materials", "Weather-resistant solutions", "Expert installation team"]
    },
    {
      image: doorImage,
      title: "Door Solutions",
      description: "Custom and repair solutions for all types of doors. We handle residential, commercial, and security door installations with precision and quality.",
      features: ["Security door installation", "Custom designs available", "Repair and maintenance"]
    },
    {
      image: materialsImage,
      title: "Quality Materials",
      description: "We utilize only the best construction materials for all our projects. Our commitment to quality ensures durability, longevity, and strength for every installation.",
      features: ["Durable & reliable materials", "Premium grade standards", "Long-lasting results"]
    }
  ];

  return (
    <div className="min-h-screen" data-testid="page-services">
      {/* PAGE HEADER */}
      <div className="bg-sidebar py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[Poppins] text-sidebar-foreground mb-4">
            Our Services
          </h1>
          <p className="text-sidebar-foreground/80 font-[Inter] text-base md:text-lg max-w-2xl mx-auto">
            Comprehensive civil contracting services delivered with expertise and dedication
          </p>
        </div>
      </div>

      {/* ALL SERVICES GRID */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-12 text-center">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED SERVICES WITH IMAGES */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-12 text-center">
            Specialized Services
          </h2>
          
          <div className="space-y-12">
            {specializedServices.map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image section */}
                  <div className={`relative h-64 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      data-testid={`img-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  </div>
                  
                  {/* Content section */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold font-[Poppins] text-card-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground font-[Inter] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Feature list */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <i className="fas fa-check-circle text-primary"></i>
                          <span className="text-card-foreground font-[Inter] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground font-[Inter] text-base md:text-lg mb-8">
            We understand that every project is unique. Contact us to discuss your specific requirements 
            and get a tailored solution that meets your needs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact">
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-[Poppins] font-semibold hover-elevate active-elevate-2" data-testid="button-get-quote">
                <i className="fas fa-envelope mr-2"></i>
                Get a Free Quote
              </button>
            </a>
            <a href="tel:+9157780280802">
              <button className="px-6 py-3 bg-secondary text-secondary-foreground rounded-md font-[Poppins] font-semibold hover-elevate active-elevate-2" data-testid="button-call-now">
                <i className="fas fa-phone mr-2"></i>
                Call Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
