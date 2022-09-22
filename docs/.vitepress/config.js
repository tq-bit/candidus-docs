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
					{ text: 'About the theme', link: '/intro/theme' },
					{ text: "Candidus' features", link: '/intro/features' },
					{ text: 'Page structure', link: '/intro/pages' },
				],
			},
			{
				text: 'Customization',
				items: [
					{
						text: 'Colors',
						link: '/customization/site/colors',
					},
					{
						text: 'Banner and featured posts',
						link: '/customization/site/banner-and-featured-posts',
					},
					{
						text: 'Post reading progress',
						link: '/customization/post/reading-progress',
					},

					{
						text: 'Related posts',
						link: '/customization/post/related-posts',
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
						text: 'Code editor colors',
						link: '/plugins/code-colors',
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
