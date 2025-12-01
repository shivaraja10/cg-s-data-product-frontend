# Journey Map Component - Developer Guide

## Quick Start

```bash
npm start
```

Then open `http://localhost:3000` in your browser.

## Component API

### JourneyMap
Main container component. No props required.

```jsx
import JourneyMap from './components/JourneyMap/JourneyMap';

<JourneyMap />
```

**Features:**
- Automatically renders 3 journey steps + Get Started button
- Responsive SVG curved path on desktop
- Vertical timeline on mobile

### Step
Individual journey step component.

```jsx
<Step 
  number={1}
  title="Discovery Phase"
  description="Explore and understand the business requirements..."
  isGetStarted={false}
/>
```

**Props:**
- `number` (number): Step number displayed in circle
- `title` (string): Step title
- `description` (string): Detailed description shown in info card
- `isGetStarted` (boolean, optional): Set to true for the CTA button style

### InfoCard
Information tooltip that appears on demand.

```jsx
<InfoCard 
  title="Step Title"
  description="Detailed description..."
  onClose={() => setShowInfo(false)}
/>
```

**Props:**
- `title` (string): Card title
- `description` (string): Card content
- `onClose` (function): Callback when close button is clicked

### GetStarted
Oval call-to-action button.

```jsx
import GetStarted from './components/GetStarted/GetStarted';

<GetStarted />
```

**Features:**
- Automatic navigation using react-router-dom
- No props required
- Routes to `/get-started-page`

### GetStartedPage
Landing page shown after clicking "Get Started".

```jsx
import GetStartedPage from './pages/GetStartedPage';

<Route path="/get-started-page" element={<GetStartedPage />} />
```

**Features:**
- Back navigation button
- Hero section
- 3 feature cards matching journey steps
- Contact CTA section

## Styling

All components use CSS custom properties (CSS variables) for consistency:

```css
:root {
  --primary-purple: #9333EA;
  --purple-light: #A855F7;
  --purple-lighter: #D8B4FE;
  --purple-dark: #6B21A8;
  --neutral-dark: #1F2937;
  --neutral-light: #F3F4F6;
}
```

### Responsive Breakpoints

**Desktop** (1024px+)
- 3-column layout with diagonal SVG path
- Large circles and text
- Standard spacing

**Tablet** (768px - 1024px)
- Adjusted spacing
- Responsive SVG
- Maintained layout structure

**Mobile** (< 768px)
- Single column vertical timeline
- Left-side connector line
- Fixed position info cards

**Small Mobile** (< 480px)
- Compact sizing
- Reduced padding/margins
- Touch-friendly targets

## Common Tasks

### Add a New Journey Step

1. Edit `src/components/JourneyMap/JourneyMap.js`
2. Add object to `steps` array:

```javascript
const steps = [
  // ... existing steps
  {
    number: 4,
    title: 'New Step',
    description: 'Step description...',
  },
];
```

3. No styling changes needed - responsive CSS handles automatically

### Modify Colors

Edit CSS files directly or update `Step.css` root variables:

```css
:root {
  --primary-purple: #YOUR_COLOR;
  /* ... other colors */
}
```

All components will automatically use the new colors.

### Customize Typography

Edit individual `.css` files:

```css
.step__title {
  font-size: 1.2rem;      /* Increase size */
  font-weight: 700;       /* Make bolder */
  letter-spacing: 0.5px;  /* Add spacing */
}
```

### Change Info Card Position

In `InfoCard.css`:

```css
.info-card {
  top: 120px;             /* Adjust vertical position */
  left: 50%;
  transform: translateX(-50%);
  /* ... */
}
```

### Add Animations

Use CSS animations in respective `.css` files:

```css
@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.step__circle {
  animation: fadeInScale 0.3s ease;
}
```

## State Management

Components use React hooks for local state:

```javascript
const [showInfo, setShowInfo] = useState(false);
```

For global state across pages, consider:
- Redux
- Context API
- Zustand

## Routing

App uses React Router DOM v6:

```jsx
// In App.js
<Routes>
  <Route path="/" element={<JourneyMap />} />
  <Route path="/get-started-page" element={<GetStartedPage />} />
</Routes>
```

Navigate programmatically:

```javascript
const navigate = useNavigate();
navigate('/get-started-page');
```

## Performance Tips

1. **Code Splitting** - Lazy load GetStartedPage for large apps
2. **Memoization** - Use React.memo() if re-rendering becomes an issue
3. **Image Optimization** - Use WebP for any background images
4. **CSS Optimization** - Minify CSS for production builds

## Testing

Example test structure:

```javascript
// Step.test.js
import { render, screen } from '@testing-library/react';
import Step from './Step';

test('renders step with correct number', () => {
  render(<Step number={1} title="Test" description="Desc" />);
  expect(screen.getByText('1')).toBeInTheDocument();
});
```

Run tests:

```bash
npm test
```

## Troubleshooting

**Info card not showing?**
- Check browser console for errors
- Verify `showInfo` state is toggling
- Check CSS z-index conflicts

**Responsive layout issues?**
- Check media queries in CSS files
- Test in browser DevTools device mode
- Verify mobile viewport meta tag in `public/index.html`

**Routing not working?**
- Ensure react-router-dom is installed (`npm install react-router-dom`)
- Check that `<BrowserRouter>` wraps `<Routes>`
- Verify route paths match exactly

**Colors look different?**
- Check for browser color management
- Verify CSS files are linked correctly
- Test on different devices/browsers

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop 'build' folder to Netlify
```

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Browser DevTools Tips

1. **Inspect responsive layout** - Use device toolbar (F12)
2. **Debug animations** - Slow down animations in Performance tab
3. **Check CSS cascade** - Use Elements/Inspector tab
4. **Monitor performance** - Use Lighthouse audit
5. **Test accessibility** - Use axe DevTools extension

## Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Adobe Design System](https://spectrum.adobe.com)

## Support

For questions or issues, check:
1. Browser console for error messages
2. Network tab for failed requests
3. Component props are correct type
4. CSS files are imported properly

---

**Happy coding! 🚀**
