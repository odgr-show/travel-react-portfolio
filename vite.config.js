import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

const root = "src";
// https://vitejs.dev/config/
export default defineConfig({
    root,
    base: "/",
    publicDir: "../public",
    plugins: [react()],
    build: {
        outDir: "../dist",
        rollupOptions: {
            input: {
                // htmlを追加する場合にはこちらに追記
                index: resolve(root, "index.html"),
            },
        },
    },
    server: {
        host: true,
    },
});
