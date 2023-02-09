import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },
})
