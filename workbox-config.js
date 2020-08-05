module.exports = {
  globDirectory: 'dist',
  globPatterns: [
    '**/*.{html,js,css,ico}',
  ],
  swDest: 'dist/sw.js',
  clientsClaim: true,
  skipWaiting: true,
};
