import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import nodePath from "path";
import findPackageRoot from "find-package-json";

const packageInfo = findPackageRoot(__dirname).next();
export const packagePath = packageInfo.filename;
export const packageDir = nodePath.dirname(packagePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "#app/": `${nodePath.resolve(packageDir, "src")}/`
    }
  }
})
