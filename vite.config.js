// vite.config.js

const src = 'src';
const dist = '../dist';

export default {
    root: `${src}`,
    build: {
      outDir: `${dist}` // Specify the output directory (relative to project root).
    }
  }
  