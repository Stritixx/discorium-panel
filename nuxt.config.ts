import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [
			tailwindcss(),
		],
	},
	app: {
		head: {
			htmlAttrs: {
				lang: 'en'
			},

			meta: [
				{
					name: 'description',
					content: 'Discorium is a premium service provider for Discord, offering instant delivery of high-quality services to enhance your Discord experience. Explore our range of services and elevate your server today.'
				},
				{
					name: 'author',
					content: 'Stritixx'
				},
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1.0'
				},
				{
					name: 'robots',
					content: 'index, follow'
				},
				{
					property: 'og:title',
					content: 'discorium - Premium Services for Discord'
				},
				{
					property: 'og:description',
					content: 'Discorium is a premium service provider for Discord, offering instant delivery of high-quality services to enhance your Discord experience. Explore our range of services and elevate your server today.'
				},
				{
					property: 'og:type',
					content: 'website'
				},
				{
					property: 'og:url',
					content: 'https://members.discorium.cc'
				},
				{
					property: 'og:image',
					content: 'https://members.discorium.cc/images/logo.png'
				},
				{
					property: 'og:site_name',
					content: 'discorium'
				},
				{
					property: 'og:image:width',
					content: '256'
				},
				{
					property: 'og:image:height',
					content: '256'
				},
				{
					name: 'twitter:card',
					content: 'summary'
				},
				{
					name: 'twitter:title',
					content: 'discorium - Premium Services for Discord'
				},
				{
					name: 'twitter:description',
					content: 'Discorium is a premium service provider for Discord, offering instant delivery of high-quality services to enhance your Discord experience. Explore our range of services and elevate your server today.'
				},
				{
					name: 'twitter:image',
					content: 'https://members.discorium.cc/images/logo.png'
				},
				{
					name: 'theme-color',
					content: '#ed38fe'
				},
				{
					name: 'msapplication-TileColor',
					content: '#ed38fe'
				}
			],

			link: [
				{
					rel: 'icon',
					type: 'image/png',
					href: '/images/logo.png'
				}
			]
		}
	}
});