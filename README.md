# 🚀 Animated Pricing App

#### A modern, performant front-end app built with **Preact**, **Vite**, and **TypeScript**, showcasing animated pricing cards, local font handling, GSAP transitions, and reusable UI components.

## UI Preview

![UI Preview](./public/ui.webp)

## UX Demo

<video src="https://outlier-hackathon-eight.vercel.app/ux.mp4" controls width="600"></video>

---

## 🗂 Project Structure

```

├── public/ # Static assets (fonts, robots.txt, etc.)
├── src/ # Source code
│ ├── UI/ # Reusable UI elements (buttons, cards, etc.)
│ ├── components/ # Feature-based components (Header, Spinner, etc.)
│ ├── assets/ # Static SVGs and images
│ ├── constants/ # Static config & pricing data
│ ├── utils/ # Utility helpers (e.g., dynamic font loader)
│ ├── styles/ # CSS modules and global styles
│ └── main.tsx # App entry point
├── index.html # Base HTML file
├── vite.config.ts # Vite config
├── tsconfig\*.json # TypeScript configs
└── README.md # This file

```

---

## 🛠 Tech Stack

- ⚡️ [Vite](https://vitejs.dev/) — blazing-fast dev server
- ⚛️ [Preact](https://preactjs.com/) — lightweight React alternative
- 🧠 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [Tailwind-compatible CSS](https://tailwindcss.com/) + custom styles
- 💨 [GSAP](https://gsap.com/) — smooth animations (timeline + ScrollSmoother)
- 🔤 Local font loading with `FontFace` API
- 🌀 Lazy-loaded components and font assets
- 🧩 Clean component structure (UI & features separated)

---

## 🧪 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🔤 Font Handling

Fonts are stored in `/public/fonts/` and loaded dynamically via:

```ts
import { loadFont } from "./utils/loadFonts";
```

See `utils/loadFonts.ts` for implementation.

---

## 🧠 GSAP Animation

- Elements with the `.appear-onload` class animate in using a GSAP `stagger` sequence.
- Controlled via `AnimateOnLoad.tsx` inside a global `GSAPTimelineProvider`.

---

## ⚙️ SEO & Meta

- SEO-friendly `<meta>` tags inside `index.html`
- Includes `robots.txt` and basic Open Graph/Twitter cards

---

## 🚫 .gitignore

- Ignores `node_modules`, build artifacts, local `.env`, etc.

---

## 🙋‍♂️ Author

Built by [Basantraj Shakti](https://www.linkedin.com/in/basantrajshakti/) • Based on Preact + Vite modern app structure.

---
