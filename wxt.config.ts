import { defineConfig } from "wxt";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  srcDir: "src",
  modules: ["@wxt-dev/module-react"],
  manifest: {
    name: "enki",
    version: "1.0.0",
    permissions: [],
  },
  vite: () => ({
    plugins: [tsconfigPaths({ projects: ["./tsconfig.app.json"] })],
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          // Suppress "Duplicated imports" warnings
          if (warning.message.includes("Duplicated imports")) {
            return;
          }
          defaultHandler(warning);
        },
      },
    },
  }),
});
