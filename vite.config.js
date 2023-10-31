import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/recipes",
  plugins: [react()],
})
