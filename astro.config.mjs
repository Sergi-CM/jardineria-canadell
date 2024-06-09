import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        sanity({
            projectId: 's68ig26a',
            dataset: 'production',
            useCdn: true,
        }),
        react(),
    ],
});
