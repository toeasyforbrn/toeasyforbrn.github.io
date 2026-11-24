import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // base './' para que el build funcione en cualquier carpeta o hosting
  base: './',
  css: {
    preprocessorOptions: {
      // Bootstrap todavía usa @import de Sass: se ocultan esos avisos
      scss: { quietDeps: true, silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'] },
    },
  },
  build: {
    // Navegadores modernos: así el minificador conserva backdrop-filter sin prefijo (el desenfoque)
    cssTarget: ['chrome111', 'edge111', 'firefox114', 'safari16.4'],
  },
})
