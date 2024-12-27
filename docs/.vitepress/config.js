/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
	base: '/candidus-docs',
	title: 'Candidus Documentation',
	titleTemplate: 'Documentation for the Candidus Ghost Theme',
	description:
		'This Vitepress documentation serves static Vue.js components, sample code and snippets. Each of these may or may not be used in the Radunia project.',
	lang: 'en-US',
	lastUpdated: true,
	appearance: true,
	themeConfig: {
		search: {
			provider: 'local',
		},
		sidebar: [
			{
				text: 'Introduction',
				items: [
					{ text: 'Getting started', link: '/intro/getting-started' },
					{ text: 'Feature overview', link: '/intro/features' },
					{ text: 'Page structure', link: '/intro/pages' },
					{ text: 'About the theme', link: '/intro/theme' },
				],
			},
			{
				text: 'Theme features & customization',
				items: [
					{
						text: 'Introduction',
						link: '/customization/',
					},
					{
						text: 'Colors',
						link: '/customization/site/colors',
					},
					{
						text: 'Banner & featured posts',
						link: '/customization/site/banner-and-featured-posts',
					},
					{
						text: 'Call to action',
						link: '/customization/site/call-to-action',
					},
					{
						text: 'Reading progress bar',
						link: '/customization/post/reading-progress',
					},
					{
						text: 'Related posts',
						link: '/customization/post/related-posts',
					},
					{
						text: 'Bookmarks',
						link: '/customization/post/bookmarks',
					},
					{
						text: 'Table of contents',
						link: '/customization/post/table-of-contents',
					},
				],
			},
			{
				text: 'Plugins',
				items: [
					{
						text: 'Social Icons',
						link: '/plugins/social-icons',
					},
					{
						text: 'Syntax highlighting',
						link: '/plugins/syntax-highlighting',
					},
				],
			},
			{
				text: 'Support',
				items: [
					{
						text: 'FAQ',
						link: '/contact/faq',
					},
					{
						text: 'Report an issue',
						link: '/contact/issue',
					},
					{
						text: 'Request a translation',
						link: '/contact/translation',
					},
				],
			},
		],
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Demo', link: 'https://candidus.q-bit.me' },
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com/tq-bit/candidus' }],
	},
};

export default config;
