import { resolve } from "path";
import { defineConfig } from "vite";

const rewriteSlashToIndexHtml = () => {
  return {
    name: "rewrite-slash-to-index-html",
    apply: "serve",
    enforce: "post",
    configureServer(server) {
      // rewrite "/" as index.html
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
  appType: "mpa", /*multi page app */
  publicDir:"../public",
  build: {
    outDir: "../build",
    emptyOutDir: true, /*Clear Dir or build folder before build*/
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"), /* First undex page Entry point */
        // about:resolve(__dirname, "src/about/index.html"),/* about page Entry Point */
      },
      output: {
        /* For Reading CSS File and any can Reacd Any Media like image or video as well */
        assetFileNames: 'styles/[name]-[hash].css', /* ican also be arrow function return is necessary */
        /* For Reading JS File and */
        chunkFileNames: 'scripts/[name]-[hash].js',  /* ican also be arrow function return is necessary */
        /* For Reading JS File you provide in rollupoption */
        entryFileNames: 'scripts/[name]-[hash].js',  /* ican also be arrow function return is necessary */
    },
    },
  },

  server: {
    open: "/", /* Open App In browser as Server started */
  },

  plugins: [rewriteSlashToIndexHtml()],
});
