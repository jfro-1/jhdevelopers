import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
// import viteReact from "@vitejs/plugin-react"; @viteReact
export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css',
                'resources/js/test.jsx'
            ],
            refresh: true,
        }),
    ],
});
