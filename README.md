# EduPro — React + TypeScript

A responsive education/e-learning homepage rebuilt from the supplied HTML concept.

## Stack
- React 18
- TypeScript (strict mode)
- Vite
- Lucide React icons
- Plain CSS with responsive breakpoints (no Tailwind CDN or inline HTML script dependencies)

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Structure

```text
src/
  components/
    Benefits.tsx
    CourseCard.tsx
    CoursesSection.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
  data/
    courses.ts
  App.tsx
  main.tsx
  styles.css
```

## Notes
- The mobile navigation opens and closes with an accessible menu button.
- The hero search filters the course cards.
- The newsletter form validates an email and displays a local confirmation. Connect it to an API/provider before production use.
- Course content and pricing are demo data.
- Images are loaded from Unsplash URLs; replace them with owned/licensed assets before production.
- Login, registration, course-detail and footer destinations are placeholders until routes/backend are connected.
