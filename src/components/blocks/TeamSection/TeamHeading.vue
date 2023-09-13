<template>
	<div class="heading">
		<h2>ЛИЦА</h2>
		<p>нашей команды, те, кто воплощает задумку в реальность</p>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/styles/layout/layout';
.heading {
	margin-top: 78px;
	display: flex;
	flex-direction: column;
	align-items: center;
}

h2 {
	color: $black;
	font-family: $font-header;
	font-size: 91px;
	font-weight: 700;
}

p {
	color: #000;
	font-size: 1rem;
	font-style: italic;
}

@media (max-width: 1200px) {
	h2 {
		font-size: 90px;
	}
}

@media (max-width: 1024px) {
	.heading {
		margin-top: 78px;
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	h2 {
		font-size: 66.89px;
	}
}

@media (max-width: 1000px) {
}

@media (max-width: 768px) {
	h2 {
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
