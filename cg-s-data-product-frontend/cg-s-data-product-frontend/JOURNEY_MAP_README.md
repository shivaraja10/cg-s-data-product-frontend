# Customer Journey Map UI - Adobe Design Level

A responsive React front-end application showcasing a modern customer journey map with a purple-first color palette. This component demonstrates best practices for responsive design, interactive UI patterns, and professional Adobe-level aesthetics.

## 🎯 Features

### Core Components
- **JourneyMap** - Main container with responsive layout (diagonal on desktop, timeline on mobile)
- **Step** - Individual journey step with hover/tap information icon
- **InfoCard** - Context card that appears on demand for step details
- **GetStarted** - Oval call-to-action button with navigation
- **GetStartedPage** - Destination page after clicking Get Started

### Design Highlights
- **Purple-First Palette** - Professional gradient colors (#9333EA to #D8B4FE)
- **Responsive Layout** - Desktop, tablet, and mobile optimized
- **Interactive Elements** - Smooth hover effects, animations, and transitions
- **Info Icons** - Numbered circles (1, 2, 3) with info buttons for detailed content
- **Timeline on Mobile** - Vertical stacked layout with connecting line on small screens
- **Curved Path** - Diagonal dashed connector on desktop view

## 📱 Responsive Breakpoints

| Device | Breakpoint | Layout |
|--------|-----------|--------|
| Desktop | 1024px+ | Diagonal path with 3 steps + Get Started button |
| Tablet | 768px - 1024px | Adjusted spacing, responsive SVG |
| Mobile | < 768px | Vertical timeline with left-side connector |
| Small Mobile | < 480px | Compact version with reduced font sizes |

## 🏗️ Project Structure

```
src/
├── components/
│   ├── JourneyMap/
│   │   ├── JourneyMap.js       # Main container component
│   │   └── JourneyMap.css      # Responsive layout & SVG path
│   ├── Step/
│   │   ├── Step.js              # Individual step with info icon
│   │   └── Step.css             # Step styling & circles
│   ├── InfoCard/
│   │   ├── InfoCard.js          # Info tooltip component
│   │   └── InfoCard.css         # Card styling & animations
│   └── GetStarted/
│       ├── GetStarted.js        # CTA button component
│       └── GetStarted.css       # Button styling
├── pages/
│   ├── GetStartedPage.js        # Destination page
│   └── GetStartedPage.css       # Page styling
├── App.js                        # Main app with routing
├── App.css                       # Global app styles
├── index.js                      # React entry point
└── index.css                     # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd home_ui

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `build` folder.

## 🎨 Color Palette

The design uses a purple-first color system inspired by Adobe's design standards:

```css
--primary-purple: #9333EA      /* Main purple */
--purple-light: #A855F7        /* Light variant */
--purple-lighter: #D8B4FE      /* Lighter variant */
--purple-dark: #6B21A8         /* Dark variant */
--neutral-dark: #1F2937        /* Text */
--neutral-light: #F3F4F6       /* Backgrounds */
```

## 🔄 User Interactions

### Desktop Experience
1. View three numbered steps (1, 2, 3) arranged diagonally
2. Hover over step circles for visual feedback (lift up, scale)
3. Click info icon (ⓘ) to see detailed information card
4. Scroll down to find the "Get Started" oval button
5. Click "Get Started" to navigate to the journey page

### Mobile Experience
1. View steps in a vertical timeline with connecting line
2. Tap step circles for visual feedback
3. Tap info icon to reveal information card
4. Scroll down to "Get Started" button
5. Tap to navigate to the journey page

### Info Card Behavior
- Appears on click/tap (not on hover on mobile)
- Shows at the top of the step on desktop
- Shows at bottom-right on mobile (fixed position)
- Close button (✕) to dismiss or click outside

## 📊 Journey Steps

1. **Discovery Phase** - Explore and understand business requirements
2. **Prototype Evaluation** - Design and test interactive prototypes
3. **Data Ingestion** - Integrate data sources and pipelines
4. **Get Started** - Call-to-action button

## 🎬 Animations & Transitions

- **Fade-In-Up** - Steps appear with staggered animation on page load
- **Slide-Down** - Info card slides down smoothly
- **Hover Effects** - Circles lift and scale on interaction
- **Button Ripple** - "Get Started" button has hover shine effect

## 🔧 Technologies Used

- **React 19.2** - UI library
- **React Router DOM 6.20** - Client-side routing
- **CSS3** - Flexbox, Grid, CSS Gradients, Media Queries
- **SVG** - Curved path visualization on desktop

## 📋 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigable (using Tab and Enter)
- Color contrast meets WCAG standards
- Touch-friendly on mobile (larger click targets)

## 🚧 Future Enhancements

- Add data persistence for user journey progress
- Implement dynamic content from API
- Add analytics tracking
- Animation preference support (prefers-reduced-motion)
- Multilingual support
- Dark mode variant

## 📝 Notes

- The purple gradient is applied consistently across all interactive elements
- Desktop SVG path is optimized for different viewport widths
- Mobile timeline uses CSS pseudo-element for the vertical line
- All components follow React hooks patterns (functional components)
- CSS is organized with BEM methodology for maintainability

## 👨‍💻 Development

To modify the journey steps, edit the `steps` array in `JourneyMap.js`:

```javascript
const steps = [
  {
    number: 1,
    title: 'Your Title',
    description: 'Your description here',
  },
  // ... more steps
];
```

## 📄 License

This project is part of the DPAI home_ui application.

---

**Created with ❤️ at Adobe design standards level**
