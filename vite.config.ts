import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Slidev 52.x treats <img src="/images/..."> in Markdown as ES module imports.
// Without this alias, /images/... resolves to the filesystem root and fails
// the slide-import-guard's server.fs.allow check. Mapping to public/images/
// gives it an in-project path the guard accepts.
export default defineConfig({
  resolve: {
    alias: {
      '/images': resolve(__dirname, 'public/images'),
    },
  },
})
