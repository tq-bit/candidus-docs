module.exports = {
	base: '/candidus-docs',
	title: 'Candidus Documentation',
	description:
		'This Vitepress documentation serves static Vue.js components, sample code and snippets. Each of these may or may not be used in the Radunia project.',
	lang: 'en-US',

	themeConfig: {
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
						text: 'Login & signup pages',
						link: '/customization/site/static-pages',
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
						text: 'Annoucement bar',
						link: '/plugins/annoucement-bar',
					},
					{
						text: 'Code editor colors',
						link: '/plugins/code-colors',
					},
				],
			},
			{
				text: 'Support',
				items: [
					{
						text: 'Contact us',
						link: '/contact/form',
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
			{ text: '🌍 Demo', link: 'https://blog.q-bit.me' },
		],
		socialLinks: [{ icon: 'github', link: 'https://github.com' }],
	},
};
