import react from "@vitejs/plugin-react"
import {defineConfig} from "vite"

export default defineConfig({
  plugins: [react()],
  build: {
    assetsDir: "/src/assets/images/",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // Replace with your backend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/images": {
        target: "http://localhost:5173", // Replace with your frontend server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/assets/, ""),
      },
    },
  },
})
