<script setup>
import MarqueeText from 'vue-marquee-text-component'

const topWords = [
	{
		name: 'ПРИЛОЖЕНИЯ',
	},
	{
		name: 'САЙТЫ',
	},
	{
		name: 'АВТОМАТИЗАЦИЯ',
	},
	{
		name: 'CRM',
	},
]

const bottomWords = [
	{
		name: 'ГРАФИЧЕСКИЙ ДИЗАЙН',
	},
	{
		name: 'АЙДЕНТИКА',
	},
	{
		name: 'ЛОГОТИПЫ',
	},
	{
		name: 'MOTION',
	},
	{
		name: 'СОЦ СЕТИ',
	},
	{
		name: 'ПРЕЗЕНТАЦИИ',
	},
]

const topWordsText = topWords.map(word => word.name).join(' ')
const bottomWordsText = bottomWords.map(word => word.name).join(' ')
</script>

<template>
	<div class="tickers">
		<div class="top__ticker">
			<marquee-text :repeat="5">
				{{ topWordsText }}
				<img src="/public/images/ticker-smile.svg" alt="" />
			</marquee-text>
		</div>
		<div class="bottom__ticker">
			<marquee-text :reverse="true" :repeat="5">
				{{ bottomWordsText }}
				<img src="/public/images/ticker-smile.svg" alt="" />
			</marquee-text>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.tickers {
	background: $black;
	display: flex;
	flex-direction: column;

	gap: 20px;
	color: #2be2f0;
	font-family: Finlandica;
	font-size: 4rem;

	padding: 141px 0 99px 0;
}

.top__ticker,
.bottom__ticker {
	display: flex;

	img {
		padding-right: 10px;
		padding-top: 5px;
	}
}

@media (max-width: 1200px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 1000px) {
}

@media (max-width: 768px) {
}

@media (max-width: 480px) {
	.tickers {
		font-size: 2rem;

		padding: 40px 0 40px 0;
	}

	.top__ticker,
	.bottom__ticker {
		display: flex;

		img {
			width: 28px;
			padding-right: 5px;
			padding-top: 7px;
		}
	}
}
</style>
