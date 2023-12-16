import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.agnios.org',
	// site: 'https://agnios.github.io',
	// base: '/documentation',
	integrations: [
		starlight({
			title: 'AgniOS',
			logo: {
				src: './public/favicon.svg',
			},
			social: {
				github: 'https://github.com/agnios/',
			},
			sidebar: [
				{
					label: 'Overview',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About AgniOS', link: '/about/about/' },
						{ label: 'Frequently Asked Questions', link: '/about/faq/' },
					],
				},
				{
					label: 'Installation Steps',
					autogenerate: { directory: 'reference' },
					// items: [
					// 	// Each item here is one entry in the navigation menu.
					// 	{ label: 'About AgniOS', link: '/about/about/' },
					// 	{ label: 'Frequently Asked Questions', link: '/about/faq/' },
					// ],
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
