<script setup>
import CardsSection from '@/components/blocks/CardsSection.vue'
import HeroSection from '@/components/blocks/HeroSection.vue'
import SecondSection from '@/components/blocks/SecondSection.vue'
import TickerSection from '@/components/blocks/TickerSection.vue'
</script>

<template>
	<HeroSection />
	<SecondSection />
	<div class="black-bg">
		<TickerSection />
		<CardsSection />
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.black-bg {
	background: $black;
}
</style>
