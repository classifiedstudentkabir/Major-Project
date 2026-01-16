/**
 * CONTACT PAGE
 * Provides multiple ways for customers to contact Krishna Enterprises
 * Includes contact form, business details, map, and direct contact options
 * Form submissions will be stored in database (to be implemented with backend)
 */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  // TODO: Connect to backend API to store contact form data in database
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call (replace with actual API endpoint later)
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      
      // Show success message
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen" data-testid="page-contact">
      {/* PAGE HEADER */}
      <div className="bg-sidebar py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[Poppins] text-sidebar-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-sidebar-foreground/80 font-[Inter] text-base md:text-lg max-w-2xl mx-auto">
            Get in touch with us for all your civil contracting needs. We're here to help!
          </p>
        </div>
      </div>

      {/* CONTACT CONTENT - Two column layout */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT COLUMN - Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-[Poppins]">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground font-[Inter] text-sm">
                    Fill out the form below and we'll get back to you as soon as possible
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name field */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Your Name *
                      </label>
                      <Input 
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        data-testid="input-name"
                      />
                    </div>

                    {/* Email field */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        data-testid="input-email"
                      />
                    </div>

                    {/* Phone field */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        data-testid="input-phone"
                      />
                    </div>

                    {/* Subject field */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Subject *
                      </label>
                      <Input 
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        required
                        data-testid="input-subject"
                      />
                    </div>

                    {/* Message field */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Message *
                      </label>
                      <Textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={6}
                        required
                        data-testid="input-message"
                      />
                    </div>

                    {/* Submit button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-[Poppins]"
                      disabled={isSubmitting}
                      data-testid="button-submit-contact"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Sending...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN - Contact Information */}
            <div className="space-y-6">
              {/* Business Hours Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-[Poppins] flex items-center gap-2">
                    <i className="fas fa-clock text-primary"></i>
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between font-[Inter]">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between font-[Inter]">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between font-[Inter]">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-[Poppins] flex items-center gap-2">
                    <i className="fas fa-address-card text-primary"></i>
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium font-[Poppins] text-card-foreground mb-1">Address</p>
                      <p className="text-muted-foreground font-[Inter] text-sm">
                        Shop No. 7, 8, 9, Parivartan CHS, Sector - 6A, 
                        Opp. Saibaba Mandir, Kamothe, Navi mumbai
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium font-[Poppins] text-card-foreground mb-1">Phone</p>
                      <a href="tel:+9157780280802" className="text-primary font-[Inter] text-sm hover:underline">
                        Krishna: +91 9322874711
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-primary"></i>
                    </div>
                    <div>
                      <p className="font-medium font-[Poppins] text-card-foreground mb-1">Email</p>
                      <a href="mailto:bvasari.delta@exasioprojs.com" className="text-primary font-[Inter] text-sm hover:underline break-all">
                        krishnaenterprises1001@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-[Poppins] flex items-center gap-2">
                    <i className="fas fa-map text-primary"></i>
                    Shop No. 7, 8, 9, Parivartan CHS, Sector - 6A, 
                  Opp. Saibaba Mandir, Kamothe, Navi mumbai
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* Embedded Google Map - Replace with actual coordinates */}
                  <div className="w-full h-64 bg-muted rounded-md flex items-center justify-center">
                    <div className="text-center">
                      <i className="fas fa-map-marked-alt text-4xl text-muted-foreground mb-2"></i>
                      <p className="text-muted-foreground font-[Inter] text-sm">
                        Map will be embedded here
                      </p>
                      <p className="text-muted-foreground font-[Inter] text-xs mt-1">
                        (Google Maps integration)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
