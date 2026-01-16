/**
 * PROJECTS PAGE (also known as Posts page in requirements)
 * Gallery of completed projects showcasing before/after work
 * Features image uploads and project categorization
 * This page will later be connected to database for image storage
 */

import { useState } from "react";
import FeaturedProject from "@/components/FeaturedProject";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import doorImage from "@assets/generated_images/security_door_product.png";
import roofingImage from "@assets/generated_images/roofing_installation_work.png";
import materialsImage from "@assets/generated_images/quality_construction_materials.png";
import weldingImage from "@assets/generated_images/welding_construction_worker.png";
import windowImage from "@assets/generated_images/window_installation_scene.png";
import interiorImage from "@assets/generated_images/luxury_interior_design.png";

export default function Projects() {
  // State for filter category selection
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  // State for image upload preview (functionality for future backend integration)
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);

  // Project categories for filtering
  const categories = ["All", "Door Solutions", "Roofing", "Materials", "Fabrication", "Interior Design"];

  // Sample projects data
  // TODO: In production, this will be fetched from database with actual uploaded images
  const projects = [
    {
      image: doorImage,
      title: "Stainless Steel Security Door Installation",
      description: "High-quality security door with modern locking system for residential building",
      category: "Door Solutions"
    },
    {
      image: roofingImage,
      title: "Complete Roof Replacement",
      description: "Premium roofing installation with weather-resistant materials",
      category: "Roofing"
    },
    {
      image: materialsImage,
      title: "Quality Construction Materials Supply",
      description: "Supply of premium-grade steel and aluminum materials",
      category: "Materials"
    },
    {
      image: weldingImage,
      title: "MS Fabrication Work",
      description: "Professional metal welding and fabrication for structural elements",
      category: "Fabrication"
    },
    {
      image: windowImage,
      title: "Window Frame Installation",
      description: "Modern aluminum window frames with energy-efficient glass",
      category: "Interior Design"
    },
    {
      image: interiorImage,
      title: "Luxury Interior Decoration",
      description: "Complete interior decoration with custom furniture and elegant finishes",
      category: "Interior Design"
    }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  // Handle image upload (preview only - actual upload will be implemented with backend)
  // TODO: Connect to backend API for actual image upload to database
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadPreview(reader.result as string);
        console.log("Image selected for upload:", file.name);
        // TODO: Send to backend API endpoint for storage
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen" data-testid="page-projects">
      {/* PAGE HEADER */}
      <div className="bg-sidebar py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[Poppins] text-sidebar-foreground mb-4">
            Our Projects
          </h1>
          <p className="text-sidebar-foreground/80 font-[Inter] text-base md:text-lg max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects showcasing quality workmanship
          </p>
        </div>
      </div>

      {/* IMAGE UPLOAD SECTION (For Admin/Team - will be restricted in production) */}
      {/* TODO: Add authentication to restrict this to authorized users only */}
      <section className="py-8 bg-muted border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-card p-6 rounded-md border border-card-border">
            <h3 className="text-lg font-semibold font-[Poppins] text-card-foreground mb-4">
              <i className="fas fa-upload mr-2 text-primary"></i>
              Upload Project Images
            </h3>
            <p className="text-muted-foreground font-[Inter] text-sm mb-4">
              Add new project images to showcase your completed work (Admin only)
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="file" 
                accept="image/*"
                onChange={handleImageUpload}
                className="flex-1"
                data-testid="input-upload-image"
              />
              <Button data-testid="button-upload">
                <i className="fas fa-cloud-upload-alt mr-2"></i>
                Upload
              </Button>
            </div>
            
            {/* Preview uploaded image */}
            {uploadPreview && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                <img 
                  src={uploadPreview} 
                  alt="Upload preview" 
                  className="h-32 object-cover rounded-md border border-border"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="font-[Poppins]"
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Show project count */}
          <div className="mb-8">
            <p className="text-muted-foreground font-[Inter]">
              Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> projects
              {selectedCategory !== "All" && (
                <span> in <span className="font-semibold text-foreground">{selectedCategory}</span></span>
              )}
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <FeaturedProject 
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            ))}
          </div>

          {/* Empty state if no projects match filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <i className="fas fa-folder-open text-6xl text-muted-foreground/30 mb-4"></i>
              <p className="text-muted-foreground font-[Inter]">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins] text-foreground mb-4">
            Want Your Project Here?
          </h2>
          <p className="text-muted-foreground font-[Inter] text-base md:text-lg mb-8">
            Let us bring your vision to life. Contact us today to discuss your project requirements 
            and join our list of satisfied clients.
          </p>
          <a href="/contact">
            <Button size="lg" data-testid="button-start-project">
              <i className="fas fa-rocket mr-2"></i>
              Start Your Project
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
