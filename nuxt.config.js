import axios from 'axios';
import {createProxyMiddleware} from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
	target: 'http://localhost:8000',
});

const isStatic = process.env.NUXT_ENV_STATIC === 'true';

const staticBase = (process.env.NODE_ENV === 'development' || isStatic) ? '' : '/themes/tsgctf/static';

export default {
	ssr: isStatic,

	target: 'static',

	head: {
		title: 'Sig XXX Pwn XXX',
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{
				name: 'description',
				hid: 'description',
				content: 'Sig XXX Pwn XXX is an on-line CTF organized by TSG, the official computer society of The University of Tokyo',
			},
			{name: 'apple-mobile-web-app-title', content: 'Sig XXX Pwn XXX'},
			{name: 'og:title', content: 'Sig XXX Pwn XXX'},
			{name: 'og:site_name', content: 'Sig XXX Pwn XXX'},
			{name: 'og:description', content: 'Sig XXX Pwn XXX is an on-line CTF organized by TSG, the official computer society of The University of Tokyo'},
			{name: 'og:type', content: 'website'},
			{name: 'og:url', content: 'https://ctf.iwashiira.com'},
			{name: 'og:image', content: `${staticBase}/ogimage.jpg`},
			{name: 'twitter:card', content: 'summary'},
			{name: 'twitter:site', content: '@tsg_ut'},
			{name: 'twitter:title', content: 'Sig XXX Pwn XXX'},
			{
				name: 'twitter:description',
				content: 'Sig XXX Pwn XXX is an on-line CTF organized by TSG, the official computer society of The University of Tokyo',
			},
			{name: 'twitter:image', content: `${staticBase}/ogimage.jpg`},
			{name: 'twitter:image:alt', content: 'Sig XXX Pwn XXX'},
		],
		link: [{rel: 'icon', type: 'image/png', href: `${staticBase}/favicon.png`}],
	},

	loading: {color: '#fff'},

	css: [],

	plugins: ['~/plugins/axios', '~/plugins/vue-timeago', '~/plugins/inject-is-static'],

	modules: [
		...(isStatic ? [] : [
			'nuxt-client-init-module',
		]),
		'@nuxtjs/axios',
		'@nuxtjs/markdownit',
		'@nuxtjs/pwa',
		...(isStatic ? [] : [
			'@nuxtjs/onesignal',
		]),
	],

	generate: {
		fallback: '404.html',
		routes: async () => {
			if (!isStatic) {
				return [];
			}
			const teams = [];
			let page = 1;
			while (true) {
				const {data} = await axios.get('https://ctf.iwashiira.com/api/v1/teams', {params: {page}});
				teams.push(...data.data);
				if (data.meta.pagination.next === null) {
					break;
				}
				page++;
			}
			return teams.map(({id}) => `/teams/${id}`);
		},
		concurrency: 5,
	},

	axios: {
		baseURL: 'https://ctf.iwashiira.com/',
		browserBaseURL: '/',
	},

	oneSignal: {
		init: {
			appId: '6acee8f3-7842-4a55-91f6-b63ac21a667d', // public token
			allowLocalhostAsSecureOrigin: true,
		},
	},

	markdownit: {
		injected: true,
	},

	build: {
		postcss: {
			plugins: {
				precss: {},
				'postcss-import-url': {},
			},
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
		publicPath: `${staticBase}/_nuxt/`,
	},

	router: {},

	serverMiddleware: [
		...(process.env.NODE_ENV === 'development'
			? [
				{
					path: '/oauth',
					handler: proxy,
				},
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
				{
					path: '/teams/join',
					handler: proxy,
				},
				{
					path: '/teams/new',
					handler: proxy,
				},
			  ]
			: []),
	],

	env: {
		session: process.env.SESSION || '',
	},

	pwa: {
		icon: {
			source: 'static/favicon.png',
		},
		manifest: {
			name: 'Sig XXX Pwn XXX',
			short_name: 'Sig XXX Pwn XXX',
			start_url: 'https://ctf.iwashiira.com/?standalone=true',
			theme_color: '#47e543',
			lang: 'en',
		},
	},
};
