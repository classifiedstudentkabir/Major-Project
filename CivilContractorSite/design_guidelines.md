# Design Guidelines for Krishna Enterprises Civil Contractor Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from professional service provider websites (construction/contractor industry) that prioritize trust, credibility, and clear service presentation. The design should convey reliability, professionalism, and established expertise.

## Core Design Principles
1. **Professional Credibility**: Clean, structured layouts that build trust
2. **Visual Proof**: Emphasis on project imagery and before/after showcases
3. **Clear Navigation**: Straightforward access to services and contact information
4. **Mobile-First**: Responsive design for on-site viewing by clients

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Poppins' - Headings and navigation (weights: 600, 700)
- Secondary: 'Inter' - Body text and descriptions (weights: 400, 500)

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl, font-semibold
- Service Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text/Captions: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Container spacing: px-4 md:px-8 lg:px-12
- Component gaps: gap-8 md:gap-12
- Card padding: p-6 md:p-8

**Container Strategy**:
- Max-width: max-w-7xl mx-auto
- Full-width sections with inner containers for visual impact

## Component Library

### Navigation Header
- Fixed top navigation with Krishna Enterprises logo (left)
- Horizontal menu items (Home, Services, Posts, Contact, Feedback)
- Contact number prominently displayed (right side)
- Mobile: Hamburger menu

### Hero Section (Home Page)
- Full-width hero with construction-themed background image
- Overlay with semi-transparent dark gradient (top to bottom)
- Centered content: Logo, business name, tagline "CRAFTING SPACES. FOUNDATION. BUILDING TOMORROW"
- Primary CTA button with blurred background
- Height: min-h-[70vh]

### Service Cards Grid
- 3-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- Cards include: Icon (construction-related), service title, brief description
- Services: MS Fabrication, Aluminium Works, Saloon Decoration, MS Railing, Interior Decorator, Furniture, Fabric & Painting
- Hover effect: subtle elevation change

### Posts/Gallery Section
- Masonry-style or grid layout for before/after project images
- 2-3 columns on desktop
- Image captions with project details
- Modal/lightbox for enlarged view

### Contact Section
- 2-column layout (form left, info right)
- Contact details: Address (Audet mahat dahik), Phone (+915 7780 280 802), Email (bvasari.delta@exasioprojs.com)
- Embedded Google Maps
- Contact form: Name, Email, Phone, Message fields

### Feedback Display
- Card-based layout showing recent feedback
- Customer name, comment, date
- Integrated into homepage

### Footer
- Multi-column layout: Company info, Quick links, Services, Contact
- Social media icons
- Copyright notice

## Images Strategy

**Hero Section**: Large construction/architecture hero image showing completed project or team at work
**Services Page**: Individual service-specific images for each offering
**Posts Page**: Before/after project photos (client-provided uploads)
**About Section**: Team photo or construction site imagery

Use high-quality, professional photography that showcases craftsmanship and completed projects.

## Form Elements
- Consistent input styling: border, rounded corners (rounded-lg), padding (p-3)
- Focus states with subtle border color change
- Submit buttons: Primary brand treatment with clear call-to-action
- Validation feedback messages

## Accessibility
- Semantic HTML throughout
- ARIA labels for navigation and forms
- Sufficient color contrast ratios
- Focus indicators for keyboard navigation
- Alt text for all images

## Icons
**Font Awesome** (CDN): Use solid icons for services, social media, contact info
- Construction: fa-hard-hat, fa-hammer, fa-tools
- Contact: fa-phone, fa-envelope, fa-map-marker-alt
- Social: fa-facebook, fa-instagram, fa-linkedin

## Responsive Breakpoints
- Mobile: base (< 768px)
- Tablet: md (768px+)
- Desktop: lg (1024px+)
- Large Desktop: xl (1280px+)

## Page-Specific Guidelines

**Home**: Hero + Services overview + Recent projects snippet + Testimonials + CTA
**Services**: Detailed service cards with descriptions and relevant imagery
**Posts**: Gallery grid with filtering/categories, before-after comparison sliders
**Contact**: Form + Map + Business details + Operating hours
**Feedback**: Submission form + Live display of approved feedback

This design creates a professional, trustworthy presence that effectively showcases Krishna Enterprises' civil contracting expertise while making it easy for potential clients to understand services and make contact.