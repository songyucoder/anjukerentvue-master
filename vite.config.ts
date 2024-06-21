import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
const root = process.cwd()
function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
})
