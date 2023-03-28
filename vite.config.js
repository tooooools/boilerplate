import path from 'path'
import { defineConfig } from 'vite'

// If a backend is needed, see https://vitejs.dev/guide/backend-integration.html

export default defineConfig(({ mode }) => ({
  root: path.join(__dirname, 'src'),
  publicDir: path.join(__dirname, 'public'),
  envDir: path.join(__dirname),
  build: { outDir: path.join(__dirname, 'build') },

  define: {
    __VERSION__: JSON.stringify(process.env.npm_package_version)
  },

  plugins: [
    { // Replace index.jsx by test/test.jsx as entry in test mode
      name: 'html-inject-test',
      transformIndexHtml: html => mode === 'test' ? html.replace('/index.jsx', '/test/test.jsx') : html,
      config: () => ({
        resolve: {
          alias: { '/test': path.join(__dirname, 'test') }
        }
      })
    }
  ],

  server: {
    port: 8080,
    host: true
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '/style/_helpers' as *;
          @use '/style/_devices' as *;
          $env: ${mode};
        `
      }
    }
  },

  esbuild: {
    jsxInject: "import h from '/utils/jsx/h'",
    jsxFactory: 'h'
  }
}))
