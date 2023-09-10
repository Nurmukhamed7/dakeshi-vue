<script setup>
import Header from '@/components/Header.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
	<div class="heroSection">
		<div class="container">
			<NavBar />
			<Header />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.heroSection {
	background: $main;

	height: 100vh; // это для scrolltrigger
}
</style>
