// vite.config.js
import { defineConfig } from 'vite'                     // Vite’s config helper :contentReference[oaicite:0]{index=0}
import react from '@vitejs/plugin-react'                // If you’re using React :contentReference[oaicite:1]{index=1}
import tailwindcss from '@tailwindcss/vite'             // Tailwind CSS Vite plugin :contentReference[oaicite:2]{index=2}
import autoprefixer from 'autoprefixer'                 // PostCSS Autoprefixer :contentReference[oaicite:3]{index=3}
      // Your existing Tailwind config

export default defineConfig({
  plugins: [
    react(),                                           // JSX/TSX support
    tailwindcss({
      config: {
        darkMode: ["class"],               // ← your darkMode export
        content: [
          "./index.html",
          "./src/**/*.{js,ts,jsx,tsx}",
          "*.{js,ts,jsx,tsx,mdx}",
          "app/**/*.{ts,tsx}",
          "components/**/*.{ts,tsx}"
        ],                                  // ← your content export
        theme: {                           // ← your theme export
          extend: {
            colors: { 
              border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                purple: {
                    500: '#8B5CF6',
                    600: '#7C3AED',
                    700: '#6D28D9',
                },
                yellow: {
                    400: '#FBBF24',
                    500: '#F59E0B',
                },
                borderRadius: {
                    lg: "var(--radius)",
                    md: "calc(var(--radius) - 2px)",
                    sm: "calc(var(--radius) - 4px)",
                },
             },
          }
        },
         // ← your plugins export :contentReference[oaicite:6]{index=6}
      }
    })
    
  ],
  css: {
    postcss: {                                         // PostCSS options :contentReference[oaicite:4]{index=4}
      plugins: [
        autoprefixer(),                                // Add vendor prefixes
      ],
    },
  },
})


