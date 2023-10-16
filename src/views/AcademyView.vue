<template>
	<!-- <div>This is Academy page</div> -->
	<div>
		<h2>Мы Масштабируем ваши идеи</h2>
		<p>This is Manrope</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/styles/layout/_variables';

div {
	max-width: 1440px;
	background: rebeccapurple;
	margin: 0 auto;
}

h2 {
	font-family: $font-header;
	font-weight: 900;
	font-size: 70px;
	text-transform: uppercase;
}

p {
	font-family: $font-main;
}
</style>
