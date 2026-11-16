# Om Shrikhande | Full-Stack Software Engineer & System Architect

<div align="center">

![License](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.3.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.3.8-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.35-black?style=for-the-badge&logo=framer)

<p align="center">
  <strong>An advanced, executive engineering portfolio engineered with bespoke human craft, 3D animated waving avatar, dynamic seasonal atmosphere systems, humanized text typing cadences, and enterprise SEO optimization.</strong>
</p>

[Live Portfolio](https://omshrikhande.dev) • [Featured Projects](#-featured-projects) • [Key Features](#-key-features) • [Installation](#-getting-started) • [Contact](#-contact--connect)

</div>

---

## 🌟 Overview & Design Philosophy

This portfolio reflects modern, executive-level engineering standards. Moving away from clichéd "AI template" aesthetics (oversaturated cyan/magenta neons and glitch artifacts), the visual design utilizes:

- **Executive Obsidian Palette**: Deep, layered obsidian slate (`#080d1a`, `#0d1527`) paired with crisp platinum typography, subtle metallic borders, and natural ambient backdrops.
- **Dynamic Seasonal Atmosphere Engine**: Intelligent seasonal particles that adapt based on the calendar month using industry-standard libraries (`react-snowfall` for winter snowflakes, 3D tumbling foliage for autumn, sakura petals for spring, and luminescent fireflies for summer).
- **Interactive 3D Waving Digital Avatar**: Free-sized, transparent 3D avatar featuring an active hand-waving animation, interactive 3D perspective mouse tilt, and a floating welcoming speech bubble.
- **Humanized Typing & Loading Dynamics**: Natural typing rhythm with variable character cadence, punctuation hesitation, and role rotation.
- **High-Impact SEO Architecture**: Complete Open Graph, Twitter Cards, Schema.org JSON-LD (`Person`, `WebSite`, `ProfilePage`), valid `sitemap.xml`, and `robots.txt` ensuring maximum search indexability.
- **Developer Terminal Emulator**: Interactive CLI emulator with custom commands (`help`, `season`, `skills`, `projects`, `resume`, `contact`, `achievements`).

---

## 🚀 Key Features

### ❄️ 1. Dynamic Seasonal Atmosphere Engine
Built on top of lightweight particle libraries (`react-snowfall`), dynamically rendering natural atmospheric particles based on the current season or user preference:

| Season | Time Period | Particle Effect | Visual Theme |
| :--- | :--- | :--- | :--- |
| **Winter** | Dec – Feb *(Current)* | Realistic crystalline snowflakes (`react-snowfall`) | Ice Blue & Pure Platinum |
| **Autumn** | Sep – Nov | Maple, oak, and birch leaves with 3D tumble physics | Golden Amber & Warm Russet |
| **Spring** | Mar – May | Gentle cherry blossom (sakura) petals | Emerald Mint & Soft Rose |
| **Summer** | Jun – Aug | Luminescent fireflies with organic pulsation | Deep Sky Azure & Sun Gold |

- **Instant Season Switcher**: Located in the navigation bar, allowing visitors to test any seasonal atmosphere with one click.
- **Performance Focused**: Zero CPU churn, GPU-accelerated canvas rendering with full support for `prefers-reduced-motion`.

### 👋 2. Transparent 3D Waving Digital Avatar
- High-resolution, transparent, free-sized avatar with continuous friendly hand-waving animation.
- Real-time 3D cursor tracking and perspective parallax using Framer Motion springs (`useSpring`, `useMotionValue`).
- Welcoming floating speech bubble and ambient seasonal glow halo.

### 💼 3. Featured Production Repositories & Systems
Highlighting Om's extensive open-source engineering footprint across 52+ GitHub repositories:
- **Baba Beri App** (`BabaBeri`): Full-stack community marketplace and e-commerce platform.
- **Capita Prime HMS & Gym Management** (`gym-management-system`): Enterprise facility management with automated billing, subscriptions, scheduling, and attendance tracking.
- **Zdron & Headless-MT5 Trading Bots** (`zdron`, `headless-MT5`, `frx-corelation`): Algorithmic trading automation, headless MetaTrader 5 execution engine, and Forex currency correlation analysis.
- **ProxStream & LiveKit VPS** (`livekit--Vps-Deployment`): Low-latency real-time video streaming architecture and automated WebRTC media server VPS orchestration.
- **Eva Dropping** (`eva-droping`): Zero-cloud encrypted local wireless file transfer over local Wi-Fi between PC and mobile.
- **Kalasnikavo** (`kalasnikavo`): Dual Biometric Recognition System combining facial landmark recognition and fingerprint verification with OpenCV.
- **E-Learning Application** (`Elearning-website-php`): Web-based educational course and student testing portal.
- **Viscous** (`viscous` & `viscous_frontend`): Real-time public transit and school bus tracking with live GPS telemetry.
- **Auto Reel Scroller** (`Auto-reel-Scroller`): Android accessibility automation utility for hands-free scrolling in Kotlin.

### 🔍 4. Enterprise Search Engine Optimization (SEO)
- **Semantic HTML5 & Accessibility**: Full ARIA landmark attributes, strict heading hierarchy (`h1`-`h3`), and screen-reader accessibility.
- **Structured Data (JSON-LD)**: Rich snippet schema for Google Knowledge Graph integration (`Person`, `WebSite`, `ProfilePage`).
- **Social Graph Sharing**: Dedicated 1200x630 OpenGraph card (`/images/om-og-card.jpg`) for high-conversion previews on LinkedIn, Twitter, and Slack.
- **Crawling Files**: Production `robots.txt` and `sitemap.xml` generated in `/public`.

### 💻 5. Interactive Developer Terminal
- Full-featured keyboard-driven terminal emulator on `/terminal`.
- Supports command history (`Up`/`Down` arrows), auto-scroll, command execution, and live season switching:
  - `help`: Command catalogue
  - `season <winter|autumn|spring|summer>`: Trigger real-time visual environment changes
  - `skills`: Inspect core technical capabilities
  - `projects`: List production repositories
  - `resume`: Instant CV download trigger

---

## 🛠️ Tech Stack

- **Framework**: React 19.3.1 + TypeScript 5.3
- **Bundler & Tooling**: Vite 7.3.8 + Rollup manual chunk optimization
- **Styling**: Tailwind CSS + Custom PostCSS Architecture
- **Atmosphere & Physics**: `react-snowfall` + Framer Motion 12.35
- **3D Graphics & Canvas**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **Smooth Scrolling**: Lenis
- **Icons**: Lucide React + DevIcons CDN

---

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   ├── om-waving.gif             # Transparent animated waving digital avatar
│   │   ├── om-waving-avatar-opt.png  # High-res transparent 3D avatar
│   │   ├── om-avatar.png             # Circular high-res executive avatar
│   │   ├── om-portrait.jpg           # Editorial studio portrait
│   │   ├── om-formal.jpg             # Corporate headshot
│   │   └── om-og-card.jpg            # 1200x630 OpenGraph SEO preview
│   ├── CV curicullum vite.pdf        # Curriculum Vitae
│   ├── robots.txt                    # Search engine crawler permissions
│   ├── sitemap.xml                   # XML sitemap for Google/Bing indexing
│   └── site.webmanifest              # Web App Manifest
├── src/
│   ├── components/
│   │   ├── WelcomingAvatar.tsx       # 3D perspective waving avatar with speech bubble
│   │   ├── HumanizedTyping.tsx       # Natural humanized typing cadence
│   │   ├── SeasonalAtmosphere.tsx    # Dynamic season particle engine (react-snowfall)
│   │   ├── SeasonSwitcher.tsx        # Interactive season selector
│   │   ├── Navigation.tsx            # Responsive navbar with avatar & switcher
│   │   ├── Footer.tsx                # Refined footer & social links
│   │   ├── LoadingScreen.tsx         # Executive entry animation
│   │   ├── CustomCursor.tsx          # Precision pointer for desktop
│   │   ├── TechSphere.tsx            # Interactive technology ecosystem grid
│   │   └── MagneticButton.tsx        # Spring-physics magnetic buttons
│   ├── context/
│   │   └── SeasonContext.tsx         # Seasonal state management & auto-detect
│   ├── pages/
│   │   ├── Home.tsx                  # Flagship landing page
│   │   ├── About.tsx                 # Balanced bio, stats, milestones & repositories
│   │   ├── Projects.tsx              # Filterable repository catalog with 14+ projects
│   │   ├── Contact.tsx               # Direct channels & structured contact form
│   │   ├── Terminal.tsx              # Interactive CLI emulator
│   │   └── NotFound.tsx              # 404 error boundary
│   ├── index.css                     # Executive styling & glassmorphic tokens
│   └── App.tsx                       # Root provider & animated routing
├── index.html                        # SEO metadata, Open Graph, & JSON-LD
├── tailwind.config.js                # Custom executive palette & animations
└── package.json
```

---

## 💻 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/OmShrikhande/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Build production bundle:
   ```bash
   npm run build
   ```

5. Preview production build locally:
   ```bash
   npm run preview
   ```

---

## 📬 Contact & Connect

- **Name**: Om Shrikhande
- **Role**: Full-Stack Software Engineer & System Architect
- **Email**: [omshrikhande@gmail.com](mailto:omshrikhande@gmail.com)
- **LinkedIn**: [linkedin.com/in/om-shrikhande-37108926a](https://linkedin.com/in/om-shrikhande-37108926a)
- **GitHub**: [github.com/OmShrikhande](https://github.com/OmShrikhande)
- **Location**: Nagpur, Maharashtra, India

---

<div align="center">
  <sub>© 2026 Om Shrikhande. Built with precision and care.</sub>
</div>
