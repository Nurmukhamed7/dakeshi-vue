<template>
	<h2>Кейсы</h2>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

h2 {
	margin: 178px 0 69px;
	color: $black;
	font-family: $font-header;
	font-size: 91px;
	font-weight: 700;
}

@media (max-width: 1200px) {
	h2 {
		margin: 119px 0 69px;
		font-size: 90px;
	}
}

@media (max-width: 1024px) {
	h2 {
		margin: 114px 0 51px;
		font-size: 66.89px;
	}
}

@media (max-width: 1000px) {
}

@media (max-width: 768px) {
	h2 {
		margin: 81px 0 65px;
		font-size: 38px;
	}
}

@media (max-width: 480px) {
	h2 {
		font-size: 28px;
	}
}

@media (max-width: 320px) {
}
</style>
