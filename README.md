# CRUSADER — Architectural Modular Streetwear

Independent Russian architectural modular streetwear brand storefront.

## Brand Direction

- Monumental, restrained, tactile and urban
- Architectural silhouettes and modular construction
- Premium natural fabrics combined with restrained utility hardware
- Target audience: designers, architects, IT specialists and creative professionals aged 22–38
- No aggressive graphic prints
- No generic cyberpunk, gothic or tactical clichés

## Design Principles

- Strong editorial art direction
- Clear commerce UX
- Typography and spacing as primary visual tools
- Product construction and fabric texture must be visible
- Every animation supports hierarchy or product understanding
- Mobile experience is as important as desktop

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 + CSS Variables
- **Fonts:** Geist Sans + Geist Mono

## Project Structure

```
web/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage (Hero + Featured + Statement)
│   ├── globals.css         # Design system (tokens, base styles)
│   ├── collection/
│   │   └── page.tsx        # Collection page with filters
│   ├── about/
│   │   └── page.tsx        # About page
│   └── contact/
│       └── page.tsx        # Contact page with form
├── components/
│   ├── Header.tsx          # Navigation header (desktop + mobile)
│   └── Footer.tsx          # Site footer
└── public/                 # Static assets (images, etc.)
```

## Design System

### Typography Scale (1.25 ratio)
- Display font: Geist Mono (headings, labels, UI)
- Body font: Geist (paragraphs, descriptions)
- Scale: xs (0.64rem) → 5xl (3.815rem)

### Color Palette (Monochrome)
- Stone 50–950 scale
- Semantic tokens: `--color-bg`, `--color-text-primary`, etc.

### Spacing Scale (8px base)
- 1 = 8px, 2 = 16px, 3 = 24px, 4 = 32px, etc.

### Layout
- Max content width: 1440px
- Gutter: 32px (desktop), 16px (mobile)
- Header height: 80px (desktop), 64px (mobile)

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for production
```bash
npm run build
npm start
```

## Features

- ✅ Responsive layout (mobile-first)
- ✅ Accessible interactions (keyboard nav, focus states)
- ✅ No unnecessary dependencies
- ✅ CSS Variables for all design tokens
- ✅ TypeScript throughout
- ✅ Component-based architecture

## Pages

- **/** — Homepage with hero, featured products, brand statement
- **/collection** — Product listing with category filters
- **/about** — Brand philosophy, materials, production info
- **/contact** — Contact form + business details

## Next Steps

1. Add real product images
2. Implement product detail pages
3. Add shopping cart functionality
4. Connect contact form to backend
5. Add image optimization
6. Set up CMS for product management
7. Implement search functionality
8. Add animation refinements
9. Performance optimization
10. SEO metadata

## Notes

- All visual decisions are in CSS variables/design tokens
- No generic UI kits — everything is custom
- Focus on showing product construction and textures
- Keep animations purposeful (hierarchy, understanding)
- Typography and spacing are the primary visual tools

---

Built with restraint. Built to last.
