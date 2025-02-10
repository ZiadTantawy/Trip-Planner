// filepath: /c:/Users/gchehata/Desktop/Repos/Trip-Planner/Client/tailwind.config.ts
import { Config } from 'tailwindcss';
import {heroui} from '@heroui/react';

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};

export default config;