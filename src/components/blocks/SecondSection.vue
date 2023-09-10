<script setup>
const texts = [
	{
		text: 'Мы - команда талантливых и <br /> креативных профессионалов, <br /> объединенных общей <br /> страстью к созданию <br /> уникальных и <br /> инновационных продуктов',
	},
	{
		text: 'Мы гордимся своей <br /> способностью превратить <br /> сложные задачи в <br /> интуитивно понятные и <br /> эффективные решения.',
	},
	{
		text: 'Наша команда готова <br /> выполнить полный цикл <br /> разработки и дизайна от <br /> самого простого до самого <br /> сложного',
	},
]
</script>

<template>
	<div class="wrapper">
		<div class="main-section">
			<img src="/images/Illustration_sec2.png" alt="Illustration_sec2" />
			<h2>
				DAKESHI INC - это <br />
				студия, <br />
				сфокусированная на <br />
				диджитал продуктах.
			</h2>
		</div>
		<div class="sections">
			<div
				v-for="(text, index) in texts"
				:key="index"
				:class="'section-' + (index + 1)"
			>
				<img src="/images/smile.svg" alt="smile" />

				<div v-html="text.text"></div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.wrapper {
	background: $orange;

	display: flex;
	flex-wrap: nowrap;
	cursor: url('/images/cursor.svg'), auto;
	position: relative;
	z-index: 10;
	overflow-x: auto;
}

.wrapper::-webkit-scrollbar {
	width: 0;
}

.main-section {
	width: 95vw;
	height: 100vh;
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: space-around;

	img {
		padding-left: 100px;
	}

	h2 {
		padding-right: 100px;

		color: #ffffec;
		font-family: Finlandica;
		font-size: 4rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
}

.sections {
	display: flex;
	align-items: center;

	color: #ffffec;
	font-family: PT Sans;
	font-size: 2.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
}

.section-1,
.section-2,
.section-3 {
	width: 40vw;
}

.section-2 {
	padding-bottom: 50px;
}
.section-3 {
	padding-bottom: 50px;
}

@media (max-width: 1200px) {
	.main-section {
		img {
			padding-left: 0;
			width: 300px;
		}

		h2 {
			font-size: 3rem;
		}
	}

	.sections {
		font-size: 2rem;
	}

	.section-1,
	.section-2,
	.section-3 {
		width: 50vw;
	}
}

@media only screen and (max-width: 992px) {
}

@media only screen and (max-width: 768px) {
	.wrapper {
		flex-direction: column;
	}
	.main-section {
		// чтобы не прокручивался
		position: sticky;
		left: 0;
		top: 0;

		width: 95vw;
		height: 80vh;
		display: flex;
		flex-shrink: 0;
		align-items: center;
		justify-content: space-around;

		img {
			padding-left: 0;
			width: 300px;
		}

		h2 {
			padding-right: 0;

			font-size: 2.5rem;
		}
	}

	.sections {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200vw;

		color: white;
		font-family: PT Sans;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		padding-left: 20px;
	}

	.section-1,
	.section-2,
	.section-3 {
		width: 768px;
	}
}

@media only screen and (max-width: 480px) {
	.main-section {
		width: 95vw;
		height: 40vh;

		img {
			width: 100px;
		}

		h2 {
			font-size: 1.5rem;
		}
	}

	.sections {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 200vw;

		color: white;
		font-family: PT Sans;
		font-size: 1rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		padding-left: 20px;
	}

	.section-1,
	.section-2,
	.section-3 {
	}

	.section-1 {
	}

	.section-2 {
		padding-bottom: 22px;
	}

	.section-3 {
		padding-bottom: 22px;
	}
}

@media only screen and (max-width: 320px) {
}
</style>
