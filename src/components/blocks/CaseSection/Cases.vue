<script setup>
import { onMounted, ref } from 'vue'

const backTexts = ref([
	{ title: 'Easy Life' },
	{ title: 'Alanya International' },
	{ title: 'Favorite Motors' },
	{ title: 'Case 4' },
])

const elementClasses = ref([
	'easyLife',
	'alanyaInternational',
	'favoriteMotors',
	'rectangle5',
])

onMounted(() => {
	console.log(document.querySelector('.backText_1'))
	console.log(document.querySelector('.easyLife'))
})

const showMeText = (index, event) => {
	console.log(document.querySelector('.easyLife'))
	console.log(document.querySelector('.backText_1'))
	const backText = document.querySelector(`.backText_${index + 1}`)
	if (event.type === 'mouseover') {
		backText.style.opacity = '1'
	} else if (event.type === 'mouseout') {
		backText.style.opacity = '0'
	}
}
</script>

<template>
	<div class="wrapper">
		<div class="arrow">
			<img src="/public/images/arrow-left.svg" alt="" />
		</div>
		<div class="cards">
			<div
				v-for="(backText, index) in backTexts"
				:key="index"
				:class="`backText_${index + 1}`"
			>
				<h4>{{ backText.title }}</h4>
				<div class="look">
					<img
						class="curvedArrow"
						src="/public/images/curvedArrow.svg"
						alt=""
					/>
					<p>Посмотреть</p>
					<img class="eyes" src="/public/images/eyes.svg" alt="" />
				</div>
			</div>

			<div
				v-for="(className, index) in elementClasses"
				:key="index"
				:class="className"
				@mouseover="showMeText(index, $event)"
				@mouseout="showMeText(index, $event)"
			></div>
		</div>
		<div class="arrow">
			<img src="/public/images/arrow-right.svg" alt="" />
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.wrapper {
	width: 1198px;
	height: 447px;
	display: flex;
	align-items: center;
}
.cards {
	width: 1061px;
	height: 447px;
	display: flex;
	align-items: flex-end;
	gap: 16px;
	float: left;
	margin: 0 auto;
	position: relative;

	h4 {
		margin: 0;
		color: #242222;
		font-family: Finlandica;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-transform: uppercase;
	}

	p {
		color: #242222;
		font-family: PT Sans;
		font-size: 1rem;
		font-style: italic;
		font-weight: 400;
		line-height: normal;
	}
}
.look {
	display: flex;
	gap: 8px;
	margin-left: 8px;
}

.backText_1,
.backText_2,
.backText_3,
.backText_4 {
	position: absolute;
	top: 0;
	opacity: 0;
	transition: opacity 0.3s ease;
}

.backText_1 {
	left: 0px;
}

.backText_2 {
	left: 247px;
}

.backText_3 {
	left: 495px;
}

.backText_4 {
	left: 740px;
}

.easyLife,
.alanyaInternational,
.favoriteMotors,
.rectangle5 {
	width: 253px;
	height: 447px;
	bottom: 0;
	background: #f04d37;
	border-radius: 20px;
}

.easyLife:hover,
.alanyaInternational:hover,
.favoriteMotors:hover,
.rectangle5:hover {
	width: 356px;
	height: 351px;
	transition: transform 0.3s ease;
}
</style>
