/**
 * FEEDBACK PAGE
 * Allows customers to submit feedback/testimonials
 * Displays all submitted feedback in chronological order
 * Feedback is stored in database and displayed on homepage
 * TODO: Connect to backend API for database storage and retrieval
 */

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Interface for feedback data structure
interface FeedbackItem {
  id: number;
  name: string;
  email: string;
  comment: string;
  date: string;
  rating?: number;
}

export default function Feedback() {
  const { toast } = useToast();
  
  // Form state for new feedback submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: 5
  });

  // Loading state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sample feedback data
  // TODO: Replace with actual data fetched from database via API
  const [feedbackList, setFeedbackList] = useState<FeedbackItem[]>([
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh@example.com",
      comment: "Excellent work on our office renovation! The team was professional, punctual, and delivered beyond our expectations. Highly recommended!",
      date: "2024-01-15",
      rating: 5
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya@example.com",
      comment: "Krishna Enterprises did an amazing job with our home interior. The quality of materials and craftsmanship is top-notch. Very satisfied!",
      date: "2024-01-10",
      rating: 5
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit@example.com",
      comment: "Great service for MS fabrication work. They completed the project on time and within budget. Will definitely work with them again.",
      date: "2024-01-05",
      rating: 4
    }
  ]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle rating selection
  const handleRatingChange = (rating: number) => {
    setFormData({
      ...formData,
      rating
    });
  };

  // Handle feedback form submission
  // TODO: Connect to backend API endpoint to store in database
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create new feedback object
    const newFeedback: FeedbackItem = {
      id: feedbackList.length + 1,
      name: formData.name,
      email: formData.email,
      comment: formData.comment,
      date: new Date().toISOString().split('T')[0],
      rating: formData.rating
    };

    // Simulate API call (replace with actual API endpoint later)
    setTimeout(() => {
      console.log("Feedback submitted:", newFeedback);
      
      // Add to feedback list
      setFeedbackList([newFeedback, ...feedbackList]);
      
      // Show success message
      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your valuable feedback.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        comment: "",
        rating: 5
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  // Get initials from name for avatar
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen" data-testid="page-feedback">
      {/* PAGE HEADER */}
      <div className="bg-sidebar py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-[Poppins] text-sidebar-foreground mb-4">
            Customer Feedback
          </h1>
          <p className="text-sidebar-foreground/80 font-[Inter] text-base md:text-lg max-w-2xl mx-auto">
            We value your feedback! Share your experience with Krishna Enterprises
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN - Feedback Form (1/3 width) */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-[Poppins]">Share Your Feedback</CardTitle>
                  <p className="text-muted-foreground font-[Inter] text-sm">
                    Let us know about your experience
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
                        data-testid="input-feedback-name"
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
                        data-testid="input-feedback-email"
                      />
                    </div>

                    {/* Rating selection */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingChange(star)}
                            className="text-2xl focus:outline-none"
                            data-testid={`button-rating-${star}`}
                          >
                            <i className={`fas fa-star ${star <= formData.rating ? 'text-yellow-500' : 'text-muted-foreground/30'}`}></i>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Comment field */}
                    <div>
                      <label className="block text-sm font-medium font-[Poppins] text-card-foreground mb-2">
                        Your Feedback *
                      </label>
                      <Textarea 
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        placeholder="Share your experience with us..."
                        rows={5}
                        required
                        data-testid="input-feedback-comment"
                      />
                    </div>

                    {/* Submit button */}
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full font-[Poppins]"
                      disabled={isSubmitting}
                      data-testid="button-submit-feedback"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-check mr-2"></i>
                          Submit Feedback
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN - Feedback Display (2/3 width) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold font-[Poppins] text-foreground mb-8">
                What Our Clients Say
              </h2>
              
              {/* Feedback list */}
              <div className="space-y-6">
                {feedbackList.map((feedback) => (
                  <Card key={feedback.id} data-testid={`card-feedback-${feedback.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        {/* Avatar */}
                        <Avatar className="w-12 h-12 flex-shrink-0">
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {getInitials(feedback.name)}
                          </AvatarFallback>
                        </Avatar>

                        {/* Feedback content */}
                        <div className="flex-1">
                          {/* Name and date */}
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="font-semibold font-[Poppins] text-card-foreground" data-testid="text-feedback-name">
                                {feedback.name}
                              </h3>
                              <p className="text-muted-foreground font-[Inter] text-xs">
                                {new Date(feedback.date).toLocaleDateString('en-US', { 
                                  year: 'numeric', 
                                  month: 'long', 
                                  day: 'numeric' 
                                })}
                              </p>
                            </div>
                            
                            {/* Rating stars */}
                            {feedback.rating && (
                              <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <i 
                                    key={i}
                                    className={`fas fa-star text-sm ${i < feedback.rating! ? 'text-yellow-500' : 'text-muted-foreground/30'}`}
                                  ></i>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Comment */}
                          <p className="text-card-foreground font-[Inter] leading-relaxed" data-testid="text-feedback-comment">
                            {feedback.comment}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
