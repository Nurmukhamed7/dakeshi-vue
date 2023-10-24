<template>
	<section class="block-1">
		<div class="block-1__title">МЫ МАСШТАБИРУЕМ ВАШИ&nbsp;ИДЕИ</div>
		<div class="block-1__media">
			<img class="block-1__media-image" src="/images/bulb.svg" alt="bulb" />
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.block-1 {
	// background-color: #2a81dd;
	// color: #fff;
	color: $black;
	margin-top: -58px;
	padding: 98px 24px 64px;

	display: flex;
	flex-direction: column;
	align-items: center;
}

@media (min-width: 768px) {
	.block-1 {
		border-radius: 12px;
		margin: 0;
		padding: 101px 40px;
	}
}

@media (min-width: 1024px) {
	.block-1 {
		padding: 104px 64px;
	}
}

@media (min-width: 1200px) {
	.block-1 {
		padding: 0px 0px;
		padding-top: 50px;

		flex-direction: row;
		justify-content: space-between;
	}
}

.block-1__title {
	font-family: $font-header;
	font-size: 24px;
	font-weight: 900;
	line-height: 1.4;
	margin-bottom: 16px;
	text-align: center;
}

@media (min-width: 768px) {
	.block-1__title {
		text-align: center;
		font-size: 40px;
		margin-bottom: 84px;
	}
}

@media (min-width: 1024px) {
	.block-1__title {
		font-size: 40px;
		max-width: 700px;
	}
}
@media (min-width: 1200px) {
	.block-1__title {
		text-align: start;
		font-size: 70px;
	}
}

.block-1__media-image {
	height: 350px;
}
@media (min-width: 768px) {
	.block-1__media-image {
		height: 400px;
		width: auto;
	}
}
@media (min-width: 1024px) {
	.block-1__media-image {
		height: 460px;
		width: auto;
	}
}
@media (min-width: 1200px) {
	.block-1__media-image {
		height: auto;
	}
}
</style>
