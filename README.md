# Twitter Filtered Feed

## Setup and Installation

To run this project locally, you'll need [Node.js](https://nodejs.org) and [pnpm](https://pnpm.io) installed on your system.

```sh
# Install pnpm if you haven't already
npm install -g pnpm

# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd solana-digest

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Tech Stack

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Development

The development server will start at `http://localhost:8080` by default. The app will automatically reload if you change any of the source files.

```sh
pnpm dev
```

## Building for Production

```sh
pnpm build
```

## Project Configuration Instructions

This project is designed to be easily configurable for different feeds, themes, and metadata. Follow the steps below to customize the application according to your needs.

### 1. Configuration File

The main configuration settings are stored in the `src/config.ts` file. You can modify the following properties:

```typescript
const config = {
  appTitle: "Your App Title", // Title of your application
  appDescription: "A brief description of your app.", // Description for SEO
  keywords: "keyword1, keyword2, keyword3", // Keywords for SEO
  author: "Your Name", // Author of the application
  ogImage: "URL to your image", // Open Graph image URL
  ogUrl: "https://yourapp.com", // Open Graph URL
  colors: {
    primary: "#14F195", // Primary color for the theme
    secondary: "#9945FF", // Secondary color for the theme
    background: "#000000", // Background color
    text: "#FFFFFF", // Text color
  },
};
```

### 2. Using the Configuration

The configuration is accessible throughout the application using the `ConfigContext`. This allows you to use the configuration values in any component.

#### Example Usage in a Component

To use the configuration in a component, import the `useConfig` hook:

```typescript
import { useConfig } from "../ConfigContext";

const MyComponent = () => {
  const config = useConfig(); // Get the config

  return (
    <div style={{ backgroundColor: config.colors.background }}>
      <h1 style={{ color: config.colors.text }}>{config.appTitle}</h1>
      <p>{config.appDescription}</p>
    </div>
  );
};
```

### 3. Updating Metadata

The metadata for the application is set in the `src/App.tsx` file using the `react-helmet` library. You can modify the metadata as follows:

```typescript
<Helmet>
  <title>{config.appTitle}</title>
  <meta name="description" content={config.appDescription} />
  <meta name="keywords" content={config.keywords} />
  <meta name="author" content={config.author} />
  <meta property="og:title" content={config.appTitle} />
  <meta property="og:description" content={config.appDescription} />
  <meta property="og:image" content={config.ogImage} />
  <meta property="og:url" content={config.ogUrl} />
</Helmet>
```

### 4. Theming

You can easily change the colors used in the application by modifying the `colors` object in the `src/config.ts` file. This will allow you to create different themes for your application.

## Conclusion

By following these instructions, you can easily customize the application to fit your project's needs. Feel free to modify the configuration file to suit your requirements.
