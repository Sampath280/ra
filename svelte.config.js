import adapter from '@sveltejs/adapter-auto';
import azure from 'svelte-adapter-azure-swa';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: azure({
      customStaticWebAppConfig: {
        routes: [
          {
            route: '/onboarding',
            allowedRoles: ['anonymous', 'authenticated'],
            methods: ['GET', 'POST']
          }
        ]
      }
    }),
  }
};

export default config;
