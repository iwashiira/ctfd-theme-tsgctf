<template>
	<section class="About">
		<h2 class="title"><span>About</span></h2>
		<h3>Period</h3>
		<p class="period">
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20231125T1133&p1=248" target="_blank" rel="noopener noreferrer">11/25 11:33</a>
			-
			<a href="https://www.timeanddate.com/worldclock/fixedtime.html?iso=20231125T1333&p1=248" target="_blank" rel="noopener noreferrer">11/25 13:33</a>
		</p>
		<p :style="{textAlign: 'center'}">(JST)</p>
		<h3>Staffs</h3>
		<a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">
			<img src="https://old.tsg.ne.jp/images/tsg-logo.png">
		</a>
		<p>
			TSG LIVE! 11 CTF is organized by <a href="https://tsg.ne.jp/" target="_blank" rel="noopener noreferrer">TSG</a>, the official computer society of The
			University of Tokyo.
		</p>
		<p>Below is the full list of TSG members who contributed to this TSG LIVE! 11 CTF in success. So many thanks!!</p>
		<ul class="members">
			<li v-for="member in members" :key="member" class="member">
				<a :href="member.url" target="_blank" rel="noopener noreferrer">{{ member.name }}</a>
				<a href="https://en.wiktionary.org/wiki/%E3%81%8A%E8%BE%9E%E5%84%80" target="_blank" rel="noopener noreferrer">
					<img class="ojigineko" src="@/static/ojigineko-white.gif" alt="ojigineko">
				</a>
			</li>
		</ul>
	</section>
</template>

<script>
import {Timeline} from 'vue-tweet-embed';

export default {
	components: {Timeline},
	head() {
		return {
			title: 'About - TSG LIVE! 11 CTF',
		};
	},
	data() {
		return {
			members: [
				{ url: 'https://twitter.com/hakatashi', name: '@hakatashi' },
				{ url: 'https://twitter.com/iwashiira', name: '@iwashiira' },
				{ url: 'https://twitter.com/JP3BGY', name: '@JP3BGY' },
				{ url: 'https://twitter.com/moratorium08', name: '@moratorium08' },
				{ url: 'https://twitter.com/naan112358', name: '@naan112358' },
				{ url: 'https://twitter.com/sitositositoo', name: 'settyan117' },
			],
		};
	},
};
</script>

<style lang="postcss">
.About {
	h3 {
		font-size: 2rem;
		font-family: 'Fredoka One', cursive;
		font-weight: 300;
		text-align: center;
		text-transform: uppercase;
		letter-spacing: 1px;
		margin-top: 3rem;
		margin-bottom: 1rem;
		word-break: break-word;
	}

	.period {
		text-align: center;
		font-size: 3rem;
		line-height: 3rem;
	}

	p,
	ul,
	ol {
		font-family: 'Roboto';
		width: 100%;
		max-width: 50rem;
		margin: 0 auto;
		font-size: 1.4rem;
		line-height: 2rem;
	}

	ul.socials {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		padding: 0;

		li {
			flex: 0 0 20rem;
			height: 30rem;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 1rem;
			margin: 0 1rem 0.6rem;
		}
	}

	img {
		display: block;
		margin: 0 auto;
		width: 80vw;
		max-width: 30rem;
		margin-bottom: 1rem;
	}

	a {
		color: #90cbff;
	}

	:has(.twitter-timeline) {
		width: 100%;
	}

	.ojigineko {
		background: url('../static/ojigineko-white.gif');
		background-size: cover;
		display: inline-block;
		width: 1rem;
		opacity: 0;
		transition: opacity 0.2s;
		margin-bottom: 0;
		margin-left: 0.2rem;
	}

	.member {
		&:hover {
			.ojigineko {
				opacity: 0.3;
			}
		}
	}
}
</style>
