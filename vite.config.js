import {defineConfig} from "vite";

export default defineConfig({
    build: {
        outDir: 'production',
        rollupOptions:{
            input:{
                index: "index.html",
                blog: "blog.html",
                contact: "other/contac.html"
            }
        }
    },
    server: {
        port: 3000
    }
});