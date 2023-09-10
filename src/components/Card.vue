<script setup>
const cardsData = [
	{
		imagePath: '/images/pazl1.svg',
		title: 'ПРИЛОЖЕНИЯ',
		text1:
			'Процесс состоит из разработки и создания продукта с учетом его внешнего вида, функциональности, пользовательского опыта и других аспектов, чтобы обеспечить удовлетворение потребностей пользователей и достижение бизнес-целей.',
		text2:
			'Наша команда разработчиков и дизайнеров разработает приложения любого масштаба.',
		cardNumber: '01',
	},
	{
		imagePath: '/images/computerandpeople.svg',
		title: 'САЙТЫ',
		text1:
			'Мы разрабатываем сайты для разных бизнес нужд: лендинги, каталоги, интернет магазины, имиджевые сайты и так далее.',
		text2:
			'Наши специалисты имеют большой опыт создания сайтов для таких индустрий как недвижимость, авто, розница, красота и мода и многие другие.',
		cardNumber: '02',
	},
	{
		imagePath: '/images/computerandkeys.svg',
		title: 'АВТОМАТИЗАЦИЯ',
		text1:
			'Автоматизация процессов помогает организациям повысить эффективность своих операций, снизить затраты и улучшить качество продукции или услуг.',
		text2:
			'Наша команда разработчиков и дизайнеров разработает приложения любого масштаба.',
		cardNumber: '03',
	},
	{
		imagePath: '/images/thumb.svg',
		title: 'CRM',
		text1:
			'Процесс состоит из разработки и создания продукта с учетом его внешнего вида, функциональности, пользовательского опыта и других аспектов, чтобы обеспечить удовлетворение потребностей пользователей и достижение бизнес-целей.',
		text2:
			'Наша команда разработчиков и дизайнеров разработает приложения любого масштаба.',
		cardNumber: '04',
	},
]
</script>

<template>
	<div class="card" v-for="(card, index) in cardsData" :key="index">
		<div class="card__row">
			<div class="card__gradient1"></div>
			<div class="card__gradient2"></div>
			<div class="card__img">
				<img :src="card.imagePath" alt="" />
			</div>
			<div class="card__content">
				<h4>{{ card.title }}</h4>
				<p>
					{{ card.text1 }}
				</p>
				<p>
					{{ card.text2 }}
				</p>
			</div>
			<div class="card__number">{{ card.cardNumber }}</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.card {
	position: relative;

	max-width: 1142px;
	height: 555px;
	margin: 22px auto;
	border: 3px solid $main;
	border-radius: 12px;

	display: flex;
	justify-content: center;
	align-items: center;

	color: white;
}
.card__row {
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 100px;
}
.card__gradient1 {
	width: 248px;
	height: 200px;
	left: 160px;
	top: 100px;
	position: absolute;
	background: linear-gradient(217deg, #f04d37 30%, rgba(48, 58, 255, 0.45) 90%);
	filter: blur(70px);
}
.card__gradient2 {
	width: 248px;
	height: 200px;
	left: 50px;
	top: 250px;
	position: absolute;
	background: linear-gradient(
		217deg,
		rgba(43, 226, 240, 0.36) 30%,
		rgba(48, 58, 255, 0.45) 20%
	);
	filter: blur(30px);
}
.card__img {
	position: relative;
}
.card__content {
	z-index: 1;
	display: flex;
	flex-direction: column;
	gap: 18px;
	h4 {
		color: #ffffec;
		font-family: Finlandica;
		font-size: 3rem;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		margin: 0;
	}

	p {
		width: 590px;
		color: #ffffec;
		font-family: PT Sans;
		font-size: 1.25rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
}
.card__number {
	right: 30px;
	bottom: 20px;
	position: absolute;
	font-size: 20px;
	font-family: Finlandica;
	font-weight: 700;
}

@media (max-width: 1200px) {
}

@media (max-width: 1024px) {
}

@media (max-width: 1000px) {
}
@media (max-width: 768px) {
}
@media (max-width: 480px) {
}
@media (max-width: 480px) {
}
</style>
