# BAVETTA — Food Landing Page

A production-ready food landing page inspired by BAVET (Belgian spaghetti restaurant style), built with React (Vite), Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
bavet-landing/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useDarkMode.js
    ├── data/
    │   └── menu.js
    └── components/
        ├── Navbar.jsx          # Sticky nav, dark mode toggle, mobile drawer
        ├── Hero.jsx            # Parallax hero, floating emojis, CTA
        ├── ScrollStory.jsx     # Scroll-triggered stagger story cards
        ├── MenuSection.jsx     # Filtered menu grid with AnimatePresence
        ├── MenuCard.jsx        # Individual menu card component
        ├── MenuSlider.jsx      # Horizontal draggable carousel with dots
        ├── Location.jsx        # Google Maps embed + location cards
        ├── SocialMedia.jsx     # Animated social icons + newsletter
        └── Footer.jsx          # Clean minimal footer
```

---

## ✨ Features

| Feature | Implementation |
|---|---|
| Sticky Navbar | `position: fixed` + scroll listener |
| Dark Mode | `useDarkMode` hook + Tailwind `dark:` classes |
| Parallax Hero | `useScroll` + `useTransform` from Framer Motion |
| Floating Emojis | `motion` with spring `y` keyframes |
| Scroll Story | `whileInView` + stagger `variants` |
| Menu Filter | `AnimatePresence` + `layoutId` pill indicator |
| Draggable Slider | Native `overflow-x: scroll` + snap + dot indicators |
| Map Embed | Google Maps iframe with dark filter |
| Social Icons | `whileHover` rotate + scale micro-interactions |

---

## 🎨 Design System

### Colors
| Token | Hex | Usage |
|---|---|---|
| `cream` | `#F5ECD7` | Primary text |
| `charcoal` | `#1A1713` | Background |
| `charcoal-light` | `#2A2520` | Card backgrounds |
| `ember` | `#C8441B` | Brand accent |
| `ember-light` | `#E8623D` | Hover states |
| `gold` | `#D4A843` | Secondary accent |

### Typography
- **Display**: Bebas Neue (headings, logo)
- **Serif**: Playfair Display italic (subheadings, accents)
- **Body**: DM Sans (body text, labels)

### Animation Principles
- Spring physics: `stiffness: 80–300`, `damping: 15–25`
- `whileInView` for scroll reveals
- `AnimatePresence` for enter/exit transitions
- `layoutId` for shared element transitions (filter pills)
- Stagger delays on grid items: `delay: index * 0.04`

---

## 📦 Dependencies

```json
{
  "framer-motion": "^11.0.0",
  "lucide-react": "^0.400.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1"
}
```

---

## 🗺️ Google Maps

The map embed in `Location.jsx` uses a real Brussels iframe. To use your own location:

1. Go to [Google Maps](https://maps.google.com)
2. Search your location
3. Click **Share → Embed a map**
4. Copy the `src` URL from the `<iframe>` tag
5. Replace the `src` in `Location.jsx`

---

## 🌙 Dark / Light Mode

Dark mode is **on by default**. Toggle via the moon/sun icon in the navbar.

The `useDarkMode` hook adds/removes `.dark` / `.light` classes on `<html>` and directly sets `document.body` background/color for instant paint with no flash.
