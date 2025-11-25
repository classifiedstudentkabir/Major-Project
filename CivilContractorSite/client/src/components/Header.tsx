/**
 * HEADER COMPONENT
 * This is the main navigation header that appears at the top of every page
 * It includes the Krishna Enterprises logo, navigation menu, and contact number
 * The header is fixed at the top and remains visible while scrolling
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/generated_images/krishna_enterprises_logo.png";

export default function Header() {
  // Track the current page location using wouter's useLocation hook
  const [location] = useLocation();
  
  // State to control mobile menu visibility (hamburger menu for small screens)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define navigation menu items - each has a label and path
  const navItems = [
    { label: "HOME", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CONTACT", path: "/contact" },
    { label: "FEEDBACK", path: "/feedback" },
  ];

  return (
    // Main header container with dark navy background
    // bg-sidebar creates the dark navy color from our design
    // border-b adds a subtle bottom border for definition
    <header className="bg-sidebar border-b border-sidebar-border sticky top-0 z-50" data-testid="header-main">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Flexbox container for header content - logo on left, nav in middle, contact on right */}
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* LOGO SECTION - Left side */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate px-2 py-1 rounded-md cursor-pointer">
              {/* Company Logo Image */}
              <img 
                src={logoImage} 
                alt="Krishna Enterprises Logo" 
                className="h-10 w-10 object-contain"
                data-testid="img-logo"
              />
              {/* Company Name and Tagline */}
              <div className="flex flex-col">
                <span className="text-sidebar-foreground font-bold text-lg font-[Poppins] leading-tight">
                  Krishna Enterprises
                </span>
                <span className="text-sidebar-foreground/70 text-xs font-[Inter]">
                  Civil Contractor
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION MENU - Hidden on mobile, visible on md (tablet) and larger screens */}
          <nav className="hidden md:flex items-center gap-1" data-testid="nav-desktop">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.label.toLowerCase()}`}>
                {/* Navigation button - changes appearance when on current page */}
                <Button
                  variant={location === item.path ? "default" : "ghost"}
                  size="sm"
                  className="text-sidebar-foreground font-[Poppins] font-medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          {/* CONTACT NUMBER - Right side, hidden on very small screens */}
          <div className="hidden sm:flex items-center gap-2 text-sidebar-foreground" data-testid="text-contact-number">
            {/* Phone icon */}
            <i className="fas fa-phone text-primary"></i>
            {/* Phone number text */}
            <span className="font-[Inter] text-sm font-medium">+915 7780 280 802</span>
          </div>

          {/* MOBILE MENU BUTTON - Only visible on small screens */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-sidebar-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {/* Hamburger menu icon */}
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </Button>
        </div>

        {/* MOBILE NAVIGATION MENU - Dropdown menu for small screens */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sidebar-border" data-testid="nav-mobile">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                >
                  <Button
                    variant={location === item.path ? "default" : "ghost"}
                    className="w-full justify-start text-sidebar-foreground font-[Poppins]"
                  >
                    {item.label}
                  </Button>
                </Link>
              ))}
              {/* Contact number in mobile menu */}
              <div className="flex items-center gap-2 px-4 py-2 text-sidebar-foreground sm:hidden">
                <i className="fas fa-phone text-primary"></i>
                <span className="font-[Inter] text-sm">+91 9322874711</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
