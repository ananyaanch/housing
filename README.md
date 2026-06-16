# StayFinder

An off-campus housing marketplace built specifically for UNC Chapel Hill students. StayFinder requires domain-based student verification and property ownership checks to filter out the scams and noise common in local social media groups.

*Disclaimer: StayFinder is an independent project and is not affiliated with, sponsored by, or endorsed by the University of North Carolina at Chapel Hill.*

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Database & Auth (Upcoming):** Supabase

## Design System

Built with a custom UI kit and responsive layouts.

- **Primary Action (Coral):** `#ff6047` (Hover: `#E95239`)
- **Background (Warm Off-White):** `#f0eee9`
- **Typography:** Plus Jakarta Sans (Headers), Inter (Body)
- **Layouts:** Mobile-first stacking, expanding to split-screens and sticky sidebars on desktop breakpoints.

## Development Roadmap

- [x] **Phase 1: Design System.** Set up color variables, typography, and base UI components.
- [x] **Phase 2: Static Skeleton.** Build the responsive global navigation and the dual-screen marketplace feed.
- [ ] **Phase 3: Database Architecture.** Structure PostgreSQL tables for users, listings, and messages.
- [ ] **Phase 4: Authentication.** Implement `@ad.unc.edu` / `@live.unc.edu` domain restrictions and age verification.
- [ ] **Phase 5: Messaging.** Build the split-pane chat interface and connect to Supabase real-time listeners.

## Local Setup

To run this project locally:

1. Clone the repository:
   ```bash
   git clone [https://github.com/yourusername/unc-housing.git](https://github.com/yourusername/unc-housing.git)
   cd unc-housing
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
Open http://localhost:3000 in your browser to test/view the project

   