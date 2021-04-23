/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
    '@snowpack/plugin-sass',
    [
      '@canarise/snowpack-eslint-plugin',
      {
        globs: ['src/**/*.tsx', 'src/**/*.ts'],
      },
    ],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    target: 'es2020',
    bundle: true,
    minify: true,
    splitting: true,
    treeshake: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    sourcemap: true,
  },
};
