<script setup>
import CardsSection from '@/components/blocks/CardsSection.vue'
import CaseSection from '@/components/blocks/CaseSection/CaseSection.vue'
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
	<CaseSection />
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.black-bg {
	background: $black;
	padding: 22px 0;
}
</style>
