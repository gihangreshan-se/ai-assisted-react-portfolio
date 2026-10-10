# Antigravity Agent-Assisted React Portfolio

A modern, interactive developer portfolio built with React, Vite, Tailwind CSS, and reusable UI components. The portfolio presents professional experience, education, projects, volunteering, certificates, contact information, and an interactive resume view in a polished single-page experience.

## Live Demo

[View the live portfolio](https://antigravity-agent-assisted-react-portfolio-pk8u12bb6-gihan3.vercel.app/)

## Overview

This project is a responsive portfolio website designed to showcase a software engineer's technical background and professional work. It combines a dark, futuristic visual style with smooth navigation, animated ambient particles, theme controls, responsive layouts, and interactive content sections.

The application is built as a component-driven React frontend and can be deployed easily to platforms such as Vercel or any static hosting provider that supports Vite builds.

## Features

- Responsive single-page portfolio layout
- Hero section with clear introduction and calls to action
- About section for professional summary and skills
- Education and career information
- Project showcase section
- Volunteering and community contributions
- Certificates and professional achievements
- Contact section for communication and social links
- Interactive resume modal with view and print support
- Light, dark, and midnight theme modes
- Animated particle background and ambient visual effects
- Toast notifications for user feedback
- Smooth scrolling between sections
- Accessible semantic page structure
- Reusable React components
- Production-ready Vite build setup

## Tech Stack

### Core Technologies

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- JavaScript with ES modules
- HTML5
- CSS3

### Styling and UI

- [Tailwind CSS](https://tailwindcss.com/) 4
- `@tailwindcss/vite` integration
- [Lucide React](https://lucide.dev/) for icons
- Google Fonts: Plus Jakarta Sans and JetBrains Mono

### Additional Libraries

- [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) for celebratory visual effects
- [Oxlint](https://oxc.rs/docs/guide/usage/linter) for linting

## Project Structure

```text
.
├── public/                 # Static public assets
├── src/
│   ├── components/         # Reusable portfolio UI components
│   ├── context/            # Theme and application context providers
│   ├── App.jsx             # Main application composition
│   ├── main.jsx            # React application entry point
│   └── ...                 # Styles and supporting modules
├── .gitignore
├── .oxlintrc.json          # Oxlint configuration
├── index.html              # HTML entry document
├── package.json             # Scripts and dependencies
├── package-lock.json        # Locked dependency versions
└── vite.config.js           # Vite and Tailwind configuration
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 18 or newer
- npm 9 or newer, or a compatible package manager
- Git

You can verify your installed versions with:

```bash
node --version
npm --version
git --version
```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gihangreshan-se/antigravity-agent-assisted-react-portfolio.git
   ```

2. Move into the project directory:

   ```bash
   cd antigravity-agent-assisted-react-portfolio
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal. Vite commonly serves the application at:

   ```text
   http://localhost:5173
   ```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server with hot module replacement. |
| `npm run build` | Creates an optimized production build in the `dist/` directory. |
| `npm run preview` | Serves the production build locally for verification. |
| `npm run lint` | Runs Oxlint against the project. |

## Production Build

To create a production build:

```bash
npm run build
```

To preview the generated build locally:

```bash
npm run preview
```

The generated files will be placed in the `dist/` directory and can be deployed to any static hosting service.

## Deployment

### Deploying to Vercel

1. Import the repository into [Vercel](https://vercel.com/).
2. Select the project framework as **Vite**, if Vercel does not detect it automatically.
3. Use the following build settings:

   ```text
   Install command: npm install
   Build command: npm run build
   Output directory: dist
   ```

4. Deploy the project.

Every new push to the configured branch can be deployed automatically by Vercel.

### Other Hosting Providers

This project can also be deployed to Netlify, GitHub Pages, Cloudflare Pages, Firebase Hosting, or any static server. Use `npm run build` and publish the contents of the `dist/` directory.

## Customization

To adapt this portfolio for your own use:

1. Update the personal name, role, and introduction in the hero and HTML metadata.
2. Replace the sample project information with your own projects.
3. Update education, volunteering, certificate, and contact details.
4. Add your own resume content to the resume modal.
5. Replace social media and external profile links.
6. Add or replace images and icons in the `public/` directory.
7. Adjust colors, typography, animations, and responsive styles as needed.
8. Update the page title and description in `index.html` for SEO.

## Code Quality

Before opening a pull request or deploying changes, run:

```bash
npm run lint
npm run build
```

These commands help identify lint issues and confirm that the application can be built successfully for production.

## Browser Support

The portfolio is intended for modern browsers with support for:

- ES modules
- CSS transitions and animations
- Modern JavaScript APIs
- Responsive layout features

For the best experience, use an up-to-date version of Chrome, Edge, Firefox, or Safari.

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/improve-portfolio
   ```

3. Make your changes.
4. Run the lint and build checks:

   ```bash
   npm run lint
   npm run build
   ```

5. Commit your changes:

   ```bash
   git commit -m "Improve portfolio experience"
   ```

6. Push the branch and open a pull request.

## License

No license file is currently included in this repository. Unless a license is added, the source code should be treated as **all rights reserved**. Please contact the repository owner before redistributing or reusing the project commercially.

## Author

Created by [gihangreshan-se](https://github.com/gihangreshan-se).

- GitHub: [@gihangreshan-se](https://github.com/gihangreshan-se)
- Repository: [antigravity-agent-assisted-react-portfolio](https://github.com/gihangreshan-se/antigravity-agent-assisted-react-portfolio)
- Live Demo: [Open portfolio](https://antigravity-agent-assisted-react-portfolio-pk8u12bb6-gihan3.vercel.app/)

## Acknowledgements

- React and Vite for the frontend foundation
- Tailwind CSS for utility-first styling
- Lucide for the icon system
- Vercel for deployment and hosting
- The open-source community for the tools and libraries used in this project
