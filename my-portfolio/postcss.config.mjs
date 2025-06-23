// postcss.config.mjs
import tailwindcss from 'tailwindcss'; // Add this import if you removed it
const config = {
  plugins: {
    tailwindcss: {}, // This is the correct plugin name for Tailwind CSS v3
    autoprefixer: {}, // Autoprefixer is already in your devDependencies, keep this line
  },
};

export default config;