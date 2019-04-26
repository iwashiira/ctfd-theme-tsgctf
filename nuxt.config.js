import proxyMiddleware from 'http-proxy-middleware';
import pkg from './package';

const proxy = proxyMiddleware({
	target: 'http://localhost:8000',
});

export default {
	mode: 'spa',

	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description},
		],
		link: [
			{rel: 'icon', type: 'image/png', href: '/favicon.png'},
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Fredoka+One|Roboto:100'},
		],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {color: '#fff'},

	css: [],

	plugins: [
		'~/plugins/axios',
	],

	modules: [
		'@nuxtjs/axios',
		'nuxt-client-init-module',
	],

	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},

	/*
	 ** Build configuration
	 */
	build: {
		postcss: {
			plugins: {
				precss: {},
			},
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
	},

	router: {
		base: process.env.NODE_ENV === 'development' ? '/' : '/themes/tsgctf/static/',
	},

	serverMiddleware: [
		...(process.env.NODE_ENV === 'development'
			? [
				{
					path: '/api',
					handler: proxy,
				},
				{
					path: '/login',
					handler: proxy,
				},
				{
					path: '/logout',
					handler: proxy,
				},
				{
					path: '/register',
					handler: proxy,
				},
			  ]
			: []),
	],
};
