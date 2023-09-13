<script setup>
import CardsSection from '@/components/blocks/CardsSection.vue'
import CaseSection from '@/components/blocks/CaseSection/CaseSection.vue'
import HeroSection from '@/components/blocks/HeroSection.vue'
import SecondSection from '@/components/blocks/SecondSection.vue'
import TeamSection from '@/components/blocks/TeamSection/TeamSection.vue'
import TickerSection from '@/components/blocks/TickerSection.vue'

import FooterSection from '@/components/blocks/FooterSection.vue'
</script>

<template>
	<HeroSection />
	<SecondSection />
	<div class="black-bg">
		<TickerSection />
		<CardsSection />
	</div>
	<CaseSection />
	<TeamSection />
	<div class="blue-bg">
		<FooterSection />
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.black-bg {
	background: $black;
	padding: 22px 0;
}

.blue-bg {
	background: $blue;
	padding-top: 40px;
}
</style>
