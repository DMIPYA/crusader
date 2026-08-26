# Development Guidelines — CRUSADER

## Code Style

### TypeScript
- Use strict mode
- Explicit types for props and function returns
- Avoid `any` — use `unknown` if needed
- Interface over type for objects

### Components
- Functional components only
- Props interface at the top
- Destructure props in parameters
- Use `React.FC` only when needed (children typing)
- Keep components focused and single-purpose

### Styling
- CSS-in-JS with `<style jsx>` for component styles
- Use CSS variables from `globals.css` for all values
- No inline styles except for dynamic values
- Mobile-first media queries
- BEM-like class naming when needed

### File Structure
```
ComponentName.tsx
- imports
- type definitions
- component function
- styles (style jsx)
- exports
```

## Design System Usage

### Always Use Design Tokens
```css
/* ✅ Good */
padding: var(--space-4);
color: var(--color-text-primary);
font-size: var(--text-lg);

/* ❌ Bad */
padding: 32px;
color: #1c1917;
font-size: 1.25rem;
```

### Typography Hierarchy
```
h1: --text-5xl (Hero titles)
h2: --text-4xl (Section titles)
h3: --text-3xl (Subsection titles)
h4: --text-2xl (Card titles)
p:  --text-base (Body text)
```

### Spacing Scale
```
1 = 8px   (tight gaps)
2 = 16px  (small gaps, padding)
3 = 24px  (medium gaps)
4 = 32px  (large gaps, section padding)
6 = 48px  (section spacing)
8 = 64px  (large section spacing)
12 = 96px (huge section spacing)
```

### Color Semantic Usage
- `--color-text-primary`: Main text, headings
- `--color-text-secondary`: Descriptions, labels
- `--color-text-tertiary`: Hints, placeholders
- `--color-border`: Subtle borders
- `--color-border-strong`: Emphasized borders
- `--color-bg`: Page background
- `--color-bg-elevated`: Cards, modals

## Component Patterns

### Button Usage
```tsx
import Button from '@/components/Button';

<Button variant="primary" size="md">
  Add to Cart
</Button>

<Button variant="secondary" size="sm">
  Learn More
</Button>
```

### Container Usage
```tsx
import Container from '@/components/Container';

<Container size="lg">
  {/* Content with max-width and gutter */}
</Container>
```

### Link Pattern
```tsx
import Link from 'next/link';

<Link href="/collection" className="link">
  View Collection
</Link>
```

## Responsive Design

### Breakpoints
```css
/* Mobile: default (no media query) */
/* Tablet: 768px */
@media (max-width: 768px) { }

/* Desktop: 1024px */
@media (max-width: 1024px) { }
```

### Mobile-First Approach
1. Write styles for mobile first
2. Add media queries for tablet/desktop overrides
3. Test on mobile viewport first

### Touch Targets
- Minimum 44x44px for tappable elements
- Adequate spacing between interactive elements
- Larger font sizes on mobile when needed

## Accessibility

### Required Practices
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- ARIA labels for icon buttons
- Keyboard navigation support
- Focus states for all interactive elements

### Focus States
```css
*:focus-visible {
  outline: 2px solid var(--color-stone-900);
  outline-offset: 2px;
}
```

### Example
```tsx
<button
  aria-label="Toggle menu"
  aria-expanded={menuOpen}
>
  {/* Icon */}
</button>
```

## Performance

### Image Optimization
```tsx
import Image from 'next/image';

<Image
  src="/products/jacket.jpg"
  alt="Modular Field Jacket"
  width={800}
  height={1067}
  priority // for above-the-fold images
/>
```

### Code Splitting
- Use dynamic imports for heavy components
- Lazy load below-the-fold content
- Keep bundle size minimal

### Best Practices
- Minimize client-side JavaScript
- Use static generation when possible
- Optimize fonts (already done with Geist)
- Compress images (WebP format preferred)

## Adding New Pages

1. Create page file in `app/[route]/page.tsx`
2. Follow existing page structure:
   - Import necessary components
   - Use Container for layout
   - Apply design system tokens
   - Add responsive styles
3. Update Header navigation if needed
4. Update Footer links if needed
5. Test mobile and desktop views

## Adding New Components

1. Create component file in `components/ComponentName.tsx`
2. Define TypeScript interface for props
3. Implement component logic
4. Add styles using `<style jsx>`
5. Export component
6. Document usage in comments if complex

## Git Workflow

### Commit Messages
```
feat: Add product detail page
fix: Correct mobile menu z-index
style: Update button hover states
docs: Add development guidelines
```

### Branch Naming
```
feature/product-detail-page
fix/mobile-menu-overflow
style/button-refinements
```

## Testing Checklist

Before committing:
- [ ] Mobile view works (375px, 768px)
- [ ] Desktop view works (1024px, 1440px)
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] No console errors
- [ ] TypeScript compiles
- [ ] Lint passes (`npm run lint`)

## Prohibited

### ❌ Do Not Use
- Inline styles (except dynamic values)
- Hard-coded colors (use tokens)
- Hard-coded spacing (use tokens)
- Magic numbers (use named constants)
- External UI libraries (build custom)
- Unnecessary dependencies
- Generic stock photos
- Lorem ipsum in production

### ❌ Avoid
- Over-engineering simple features
- Premature optimization
- Excessive nesting (max 3-4 levels)
- God components (split if >200 lines)

## When in Doubt

1. Check existing components for patterns
2. Refer to design system tokens
3. Keep it simple and restraint
4. Mobile-first thinking
5. Accessibility first

---

**Philosophy:** Build with restraint. Every line of code should earn its place. Every design decision should serve function. Quality over quantity.
