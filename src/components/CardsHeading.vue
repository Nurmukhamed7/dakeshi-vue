<script setup>
const props = defineProps({
	label: {
		type: String,
		default: 'Тут Header',
	},
})
</script>

<template>
	<div class="heading">
		<h2>{{ label }}</h2>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.heading {
	background: $black;

	display: flex;
	justify-content: center;
	align-items: center;

	h2 {
		color: white;
		font-family: $font-header;
		font-size: 80px;
		font-weight: 700;
	}
}

@media (max-width: 1200px) {
}

@media (max-width: 1024px) {
	.heading {
		h2 {
			font-size: 68px;
		}
	}
}

@media (max-width: 1000px) {
	.heading {
		h2 {
			font-size: 58px;
		}
	}
}

@media (max-width: 768px) {
	.heading {
		h2 {
			font-size: 38px;
		}
	}
}

@media (max-width: 480px) {
	.heading {
		h2 {
			font-size: 28px;
		}
	}
}
</style>
