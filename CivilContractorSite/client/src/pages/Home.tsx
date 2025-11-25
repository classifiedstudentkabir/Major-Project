/**
 * HOME PAGE
 * This is the main landing page that visitors see first
 * It includes: Hero section, Welcome message, Services overview, 
 * Featured projects, Why choose us section, and recent feedback
 */

import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import FeaturedProject from "@/components/FeaturedProject";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import doorImage from "@assets/generated_images/security_door_product.png";
import roofingImage from "@assets/generated_images/roofing_installation_work.png";
import materialsImage from "@assets/generated_images/quality_construction_materials.png";

export default function Home() {
  // Define our main services - these will be displayed as cards
  // TODO: In future, fetch this data from backend API
  const services = [
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
    }
  ];

  // Featured projects to showcase our work
  // TODO: In future, fetch this data from backend/database
  const featuredProjects = [
    {
      image: doorImage,
      title: "Stainless Steel Security Door",
      description: "Modern security door installation with advanced locking mechanisms for enhanced safety.",
      category: "Door Solutions"
    },
    {
      image: roofingImage,
      title: "Expert Roofing Solutions",
      description: "Complete roof installation and repair services for residential and commercial buildings.",
      category: "Roofing"
    },
    {
      image: materialsImage,
      title: "Quality Materials Supply",
      description: "Premium construction materials including steel, aluminum, and finishing materials.",
      category: "Materials"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* HERO SECTION - Main visual impact area */}
      <Hero />

      {/* WELCOME SECTION - Introduction to Krishna Enterprises */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-welcome">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-4">
              WELCOME TO KRISHNA ENTERPRISES
            </h2>
            <p className="text-muted-foreground font-[Inter] text-base md:text-lg leading-relaxed mb-6">
              We are a leading civil contractor specializing in comprehensive construction solutions. 
              With years of experience and a dedicated team of professionals, we deliver excellence 
              in every project we undertake.
            </p>
            <p className="text-muted-foreground font-[Inter] text-base leading-relaxed">
              From MS fabrication to complete interior solutions, we provide end-to-end services 
              that ensure quality, durability, and customer satisfaction. Our commitment to using 
              premium materials and modern techniques sets us apart in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Display all service offerings */}
      <section className="py-16 md:py-24 bg-muted" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground font-[Inter] text-base md:text-lg max-w-2xl mx-auto">
              Comprehensive construction and fabrication services tailored to meet your specific needs
            </p>
          </div>

          {/* Services grid - 3 columns on large screens, responsive on smaller screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>

          {/* View All Services button */}
          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" data-testid="button-view-all-services">
                <i className="fas fa-arrow-right mr-2"></i>
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-16 md:py-24 bg-background" data-testid="section-featured-projects">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-muted-foreground font-[Inter] text-base md:text-lg max-w-2xl mx-auto">
              Showcasing our expertise through successfully completed projects
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <FeaturedProject 
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            ))}
          </div>

          {/* View All Projects button */}
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" variant="outline" data-testid="button-view-all-projects">
                <i className="fas fa-images mr-2"></i>
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION - Highlight competitive advantages */}
      <section className="py-16 md:py-24 bg-muted" data-testid="section-why-choose-us">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-8">
                WHY CHOOSE US?
              </h2>
              
              {/* List of advantages with icons */}
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold font-[Poppins] text-foreground mb-1">Experienced Team</h3>
                    <p className="text-muted-foreground font-[Inter] text-sm">
                      Skilled professionals with years of expertise in civil contracting
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold font-[Poppins] text-foreground mb-1">Quality Craftsmanship</h3>
                    <p className="text-muted-foreground font-[Inter] text-sm">
                      Commitment to excellence in every project with attention to detail
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="fas fa-check text-primary text-sm"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold font-[Poppins] text-foreground mb-1">Client-Centric Approach</h3>
                    <p className="text-muted-foreground font-[Inter] text-sm">
                      Personalized service focused on understanding and meeting client needs
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right column - Contact info and CTA */}
            <div className="bg-card p-8 rounded-md border border-card-border">
              <h3 className="text-2xl font-bold font-[Poppins] text-card-foreground mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground font-[Inter] mb-6">
                Contact us today for a free consultation and quote. We're here to bring your vision to life.
              </p>
              
              <Link href="/contact">
                <Button size="lg" className="w-full mb-4" data-testid="button-contact-us">
                  <i className="fas fa-phone mr-2"></i>
                  Contact Us Now
                </Button>
              </Link>
              
              <div className="text-center text-muted-foreground font-[Inter] text-sm">
                or call us at <span className="font-semibold text-foreground">+91 9322874711</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
