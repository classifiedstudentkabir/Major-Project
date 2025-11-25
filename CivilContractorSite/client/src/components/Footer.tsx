/**
 * FOOTER COMPONENT
 * The website footer appears at the bottom of every page
 * Contains company information, quick links, services, and contact details
 * Provides social media links and copyright information
 */

import { Link } from "wouter";

export default function Footer() {
  return (
    // Main footer container with dark background
    <footer className="bg-sidebar border-t border-sidebar-border mt-auto" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        
        {/* FOOTER CONTENT GRID - 4 columns on desktop, stacks on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* COLUMN 1: Company Information */}
          <div>
            <h3 className="text-sidebar-foreground font-bold text-lg font-[Poppins] mb-4">
              Krishna Enterprises
            </h3>
            <p className="text-sidebar-foreground/70 font-[Inter] text-sm mb-4">
              Professional civil contractor services delivering quality construction 
              solutions for residential and commercial projects.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-9 h-9 rounded-md bg-sidebar-accent flex items-center justify-center hover-elevate transition-all"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <i className="fab fa-facebook-f text-sidebar-foreground"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-md bg-sidebar-accent flex items-center justify-center hover-elevate transition-all"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <i className="fab fa-twitter text-sidebar-foreground"></i>
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-md bg-sidebar-accent flex items-center justify-center hover-elevate transition-all"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <i className="fab fa-instagram text-sidebar-foreground"></i>
              </a>
              
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div>
            <h3 className="text-sidebar-foreground font-bold text-lg font-[Poppins] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-sidebar-foreground/70 hover:text-sidebar-foreground font-[Inter] text-sm transition-colors cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services" data-testid="link-footer-services">
                  <span className="text-sidebar-foreground/70 hover:text-sidebar-foreground font-[Inter] text-sm transition-colors cursor-pointer">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects" data-testid="link-footer-projects">
                  <span className="text-sidebar-foreground/70 hover:text-sidebar-foreground font-[Inter] text-sm transition-colors cursor-pointer">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact" data-testid="link-footer-contact">
                  <span className="text-sidebar-foreground/70 hover:text-sidebar-foreground font-[Inter] text-sm transition-colors cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Our Services */}
          <div>
            <h3 className="text-sidebar-foreground font-bold text-lg font-[Poppins] mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li className="text-sidebar-foreground/70 font-[Inter] text-sm">MS Fabrication</li>
              <li className="text-sidebar-foreground/70 font-[Inter] text-sm">Aluminium Works</li>
              <li className="text-sidebar-foreground/70 font-[Inter] text-sm">MS Railing</li>
              <li className="text-sidebar-foreground/70 font-[Inter] text-sm">Interior Decorator</li>
              <li className="text-sidebar-foreground/70 font-[Inter] text-sm">Fabric & Painting</li>
            </ul>
          </div>

          {/* COLUMN 4: Contact Information */}
          <div>
            <h3 className="text-sidebar-foreground font-bold text-lg font-[Poppins] mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              {/* Address */}
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <span className="text-sidebar-foreground/70 font-[Inter] text-sm">
                  Shop No. 7, 8, 9, Parivartan CHS, Sector - 6A, 
                  Opp. Saibaba Mandir, Kamothe, Navi mumbai
                </span>
              </li>
              {/* Phone */}
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary"></i>
                <span className="text-sidebar-foreground/70 font-[Inter] text-sm">
                  Krishna: +91 9322874711
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-primary"></i>
                <span className="text-sidebar-foreground/70 font-[Inter] text-sm">
                  Harish: +91 8898470483
                </span>
              </li>
              {/* Email */}
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-primary"></i>
                <span className="text-sidebar-foreground/70 font-[Inter] text-sm break-all">
                  krishnaenterprises1001@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT SECTION - Bottom of footer */}
        <div className="border-t border-sidebar-border pt-8 text-center">
          <p className="text-sidebar-foreground/60 font-[Inter] text-sm">
            © {new Date().getFullYear()} Krishna Enterprises. All rights reserved. 
            Crafting quality construction solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
