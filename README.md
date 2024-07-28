<div align="center"> 
  <h1>ReVite</h1> 
</div>

<div align="center">
  <a href="https://github.com/vwh/revite/actions/workflows/format.yml">
    <img src="https://github.com/vwh/revite/actions/workflows/format.yml/badge.svg" alt="Check Format Badge"/>
  </a>
  <a href="https://github.com/vwh/revite/actions/workflows/lint.yml">
    <img src="https://github.com/vwh/revite/actions/workflows/lint.yml/badge.svg" alt="Lint Badge"/>
  </a>
</div>

<p align="center">
  <b>QuickStarter for React with Vite:</b> A streamlined template to kickstart your React projects with essential features built-in. Boost your development process with speed and efficiency.
</p>

<p align="center">
  <img src="https://github.com/user-attachments/assets/25345150-7172-4349-8fb0-cd774cfa2a48" alt="Preview">
</p>

## Project Structure

```csharp
ReVite/
├── components.json             # Configuration for Shadcn UI components
├── index.html                  # Main HTML file
├── package.json                # Project metadata and dependencies
├── prettier.config.js          # Prettier configuration
├── public/                     # Public assets
│   └── images/                 # Image assets
├── src/                        # Source files
│   ├── App.tsx                 # Main app component
│   ├── components/             # React components
│   │   └── ui/                 # UI components
│   ├── hooks/                  # Custom hooks
│   ├── index.css               # Main CSS file
│   ├── lib/                    # Utility functions
│   ├── main.tsx                # Main entry point
│   └── vite-env.d.ts           # TypeScript Vite environment definitions
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.app.json           # TypeScript app configuration
├── tsconfig.json               # TypeScript base configuration
├── tsconfig.node.json          # TypeScript Node configuration
└── vite.config.ts              # Vite configuration
```

## Getting Started

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/vwh/revite
cd revite
npm install
```

### Development Server

Start the development server:

```bash
npm run dev
```

### Build

Build the project for production:

```bash
npm run build
```

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Lint the project files:

```bash
npm run lint
```

### Formatting

Format the project files:

```bash
npm run format
```

Check the formatting:

```bash
npm run format:check
```

## Contributing

Contributions are welcome! Fork the repository, create your feature branch, commit your changes, and submit a pull request.
