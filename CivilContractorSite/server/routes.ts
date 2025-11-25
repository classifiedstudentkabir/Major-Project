/**
 * API ROUTES
 * This file defines all backend API endpoints for the application
 * All routes are prefixed with /api
 */

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertFeedbackSchema, 
  insertContactMessageSchema, 
  insertProjectSchema 
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // ============================================
  // FEEDBACK API ROUTES
  // ============================================
  
  /**
   * POST /api/feedback
   * Submit new customer feedback
   * Body: { name, email, comment, rating }
   */
  app.post("/api/feedback", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertFeedbackSchema.parse(req.body);
      
      // Save feedback to database
      const newFeedback = await storage.createFeedback(validatedData);
      
      // Return created feedback
      res.status(201).json(newFeedback);
    } catch (error) {
      console.error("Error creating feedback:", error);
      res.status(400).json({ error: "Invalid feedback data" });
    }
  });

  /**
   * GET /api/feedback
   * Get all feedback entries (newest first)
   */
  app.get("/api/feedback", async (req, res) => {
    try {
      const feedbackList = await storage.getAllFeedback();
      res.json(feedbackList);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      res.status(500).json({ error: "Failed to fetch feedback" });
    }
  });

  /**
   * GET /api/feedback/recent
   * Get recent feedback for homepage display
   * Query param: limit (default: 3)
   */
  app.get("/api/feedback/recent", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 3;
      const recentFeedback = await storage.getRecentFeedback(limit);
      res.json(recentFeedback);
    } catch (error) {
      console.error("Error fetching recent feedback:", error);
      res.status(500).json({ error: "Failed to fetch recent feedback" });
    }
  });

  // ============================================
  // CONTACT MESSAGE API ROUTES
  // ============================================
  
  /**
   * POST /api/contact
   * Submit contact form message
   * Body: { name, email, phone, subject, message }
   */
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Save contact message to database
      const newMessage = await storage.createContactMessage(validatedData);
      
      // Return created message
      res.status(201).json(newMessage);
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(400).json({ error: "Invalid contact form data" });
    }
  });

  /**
   * GET /api/contact
   * Get all contact messages (admin use - can be protected later)
   */
  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getAllContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ error: "Failed to fetch contact messages" });
    }
  });

  // ============================================
  // PROJECT API ROUTES
  // ============================================
  
  /**
   * POST /api/projects
   * Create new project post
   * Body: { title, description, category, imageUrl }
   */
  app.post("/api/projects", async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertProjectSchema.parse(req.body);
      
      // Save project to database
      const newProject = await storage.createProject(validatedData);
      
      // Return created project
      res.status(201).json(newProject);
    } catch (error) {
      console.error("Error creating project:", error);
      res.status(400).json({ error: "Invalid project data" });
    }
  });

  /**
   * GET /api/projects
   * Get all projects or filter by category
   * Query param: category (optional)
   */
  app.get("/api/projects", async (req, res) => {
    try {
      const category = req.query.category as string;
      
      let projectsList;
      if (category) {
        projectsList = await storage.getProjectsByCategory(category);
      } else {
        projectsList = await storage.getAllProjects();
      }
      
      res.json(projectsList);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  /**
   * DELETE /api/projects/:id
   * Delete a project by ID
   */
  app.delete("/api/projects/:id", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.deleteProject(id);
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting project:", error);
      res.status(500).json({ error: "Failed to delete project" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
