import { resolve } from "path";
import { defineConfig } from "vite";

const rewriteSlashToIndexHtml = () => {
  return {
    name: "rewrite-slash-to-index-html",
    apply: "serve",
    enforce: "post",
    configureServer(server) {
      // rewrite / as index.html
      server.middlewares.use("/", (req, _, next) => {
        if (req.url === "/") {
            req.url = "/index.html";
        }
        next();
      })
    },
  };
};

export default defineConfig({
  root: "src",
  appType: "mpa",
  publicDir:"../public",
  build: {
    outDir: "../build",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
      },
      output: {
        assetFileNames: 'styles/[name]-[hash].css',
        chunkFileNames: 'scripts/[name]-[hash].js',
        entryFileNames: 'scripts/[name]-[hash].js',
    },
    },
  },

  server: {
    open: "/",
  },

  plugins: [rewriteSlashToIndexHtml()],
});
