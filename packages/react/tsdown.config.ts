import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
  },
  dts: {
    sourcemap: true,
  },
  minify: true,
  publint: true,
  platform: 'browser',
  clean: ['dist'],
  external: ['react', 'react-dom'],
})
