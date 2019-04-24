import proxy from 'http-proxy-middleware';
import pkg from './package';

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
		link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {color: '#fff'},

	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/axios',
		'@nuxtjs/bulma',
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
					handler: proxy({
						target: 'http://localhost:8000',
					}),
				},
			  ]
			: []),
	],
};
