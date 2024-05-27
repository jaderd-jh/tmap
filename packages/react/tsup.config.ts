import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  platform: 'browser',
  sourcemap: options.watch ? 'inline' : false,
  treeshake: true,
  clean: true,
  dts: true,
  minify: !options.watch,
  splitting: false,
  // experimentalDts: true,
  external: ['react', 'react-dom'],
}))
