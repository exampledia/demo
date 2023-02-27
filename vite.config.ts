import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const dashJSCDNPath = `https://cdn.dashjs.org/latest/dash.all.${mode === 'development' ? 'debug' : 'min'}.js`
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            dashJSCDNPath,
          },
        },
      }),
    ],
  };
})
