/**
 * DATABASE STORAGE INTERFACE
 * This file defines all database operations for the application
 * Uses Drizzle ORM to interact with PostgreSQL database
 */

import { db } from "./db";
import { desc, eq } from "drizzle-orm";
import { 
  feedback, 
  contactMessages, 
  projects,
  type Feedback,
  type InsertFeedback,
  type ContactMessage,
  type InsertContactMessage,
  type Project,
  type InsertProject
} from "@shared/schema";

/**
 * STORAGE INTERFACE
 * Defines all CRUD operations available for database tables
 */
export interface IStorage {
  // FEEDBACK OPERATIONS
  createFeedback(data: InsertFeedback): Promise<Feedback>;
  getAllFeedback(): Promise<Feedback[]>;
  getRecentFeedback(limit: number): Promise<Feedback[]>;
  
  // CONTACT MESSAGE OPERATIONS
  createContactMessage(data: InsertContactMessage): Promise<ContactMessage>;
  getAllContactMessages(): Promise<ContactMessage[]>;
  
  // PROJECT OPERATIONS
  createProject(data: InsertProject): Promise<Project>;
  getAllProjects(): Promise<Project[]>;
  getProjectsByCategory(category: string): Promise<Project[]>;
  deleteProject(id: string): Promise<void>;
}

/**
 * DATABASE STORAGE IMPLEMENTATION
 * Implements IStorage interface using Drizzle ORM
 */
export class DbStorage implements IStorage {
  
  // ============================================
  // FEEDBACK METHODS
  // ============================================
  
  /**
   * Create a new feedback entry in the database
   * @param data - Feedback data (name, email, comment, rating)
   * @returns Created feedback record with ID and timestamp
   */
  async createFeedback(data: InsertFeedback): Promise<Feedback> {
    const [newFeedback] = await db.insert(feedback).values(data).returning();
    return newFeedback;
  }

  /**
   * Get all feedback entries ordered by date (newest first)
   * @returns Array of all feedback records
   */
  async getAllFeedback(): Promise<Feedback[]> {
    return await db.select().from(feedback).orderBy(desc(feedback.date));
  }

  /**
   * Get recent feedback entries (for displaying on homepage)
   * @param limit - Number of recent entries to retrieve
   * @returns Array of recent feedback records
   */
  async getRecentFeedback(limit: number): Promise<Feedback[]> {
    return await db.select().from(feedback).orderBy(desc(feedback.date)).limit(limit);
  }

  // ============================================
  // CONTACT MESSAGE METHODS
  // ============================================
  
  /**
   * Create a new contact message from the contact form
   * @param data - Contact form data (name, email, phone, subject, message)
   * @returns Created contact message record
   */
  async createContactMessage(data: InsertContactMessage): Promise<ContactMessage> {
    const [newMessage] = await db.insert(contactMessages).values(data).returning();
    return newMessage;
  }

  /**
   * Get all contact messages ordered by date (newest first)
   * @returns Array of all contact message records
   */
  async getAllContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.date));
  }

  // ============================================
  // PROJECT METHODS
  // ============================================
  
  /**
   * Create a new project post with image
   * @param data - Project data (title, description, category, imageUrl)
   * @returns Created project record
   */
  async createProject(data: InsertProject): Promise<Project> {
    const [newProject] = await db.insert(projects).values(data).returning();
    return newProject;
  }

  /**
   * Get all projects ordered by date (newest first)
   * @returns Array of all project records
   */
  async getAllProjects(): Promise<Project[]> {
    return await db.select().from(projects).orderBy(desc(projects.date));
  }

  /**
   * Get projects filtered by category
   * @param category - Category to filter by
   * @returns Array of projects in the specified category
   */
  async getProjectsByCategory(category: string): Promise<Project[]> {
    return await db.select().from(projects)
      .where(eq(projects.category, category))
      .orderBy(desc(projects.date));
  }

  /**
   * Delete a project by ID
   * @param id - Project ID to delete
   */
  async deleteProject(id: string): Promise<void> {
    await db.delete(projects).where(eq(projects.id, id));
  }
}

// Export singleton instance of storage
export const storage = new DbStorage();
