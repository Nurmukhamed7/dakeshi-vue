<template>
	<section class="block-2">
		<div class="block-2__title">
			DAKESHI INC - это&nbsp;студия,&nbsp;сфокусированная на&nbsp;диджитал
			продуктах.
		</div>
		<div class="block-2__content">
			<div class="block-2__content-left">
				<img src="/images/homepage-secondblock-men.jpg" alt="men" />
			</div>
			<div class="block-2__content-right">
				<ul class="block-2__list">
					<li class="block-2__list-item">
						<span class="block-2__list-item-span">1</span>
						<p class="block-2__list-item-text">
							Мы гордимся своей способностью превратить сложные задачи в
							интуитивно понятные и эффективные решения.
						</p>
					</li>
					<li class="block-2__list-item">
						<span class="block-2__list-item-span">2</span>
						<p class="block-2__list-item-text">
							Мы - команда талантливых и креативных профессионалов, объединенных
							общей страстью к созданию уникальных и инновационных продуктов.
						</p>
					</li>
					<li class="block-2__list-item">
						<span class="block-2__list-item-span">3</span>
						<p class="block-2__list-item-text">
							Наша команда готова выполнить полный цикл разработки и дизайна от
							самого простого до самого сложного.
						</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.block-2 {
	background-color: $orange;
	// color: #fff;
	margin-top: -58px;
	padding: 98px 24px 64px;

	display: flex;
	flex-direction: column;
	align-items: center;
}

@media (min-width: 768px) {
	.block-2 {
		border-radius: 12px;
		margin: 0;
		padding: 101px 40px;
	}
}

@media (min-width: 1024px) {
	.block-2 {
		padding: 104px 64px;
	}
}

@media (min-width: 1200px) {
	.block-2 {
		padding: 0px 0px;
		padding-top: 50px;

		flex-direction: row;
		justify-content: space-between;

		//
		display: flex;
		flex-direction: column;
	}
}

.block-2__title {
	text-transform: uppercase;
	font-family: $font-header;
	font-weight: 900;
	color: $main;
}
@media (min-width: 768px) {
	.block-2__title {
		font-size: 28px;
	}
}

@media (min-width: 1024px) {
	.block-2__title {
		font-size: 40px;
	}
}

@media (min-width: 1200px) {
	.block-2__title {
		font-size: 55px;
		margin-bottom: 50px;
	}
}

.block-2__content {
	display: flex;
	justify-content: center;
	flex: 1;
}
.block-2__content-left {
	flex: 1;
}

.block-2__content-right {
	padding: 70px 45px;
	flex: 1;
}

.block-2__list {
	// background-color: $active-menu;
	display: flex;
	flex-direction: column;
	gap: 52px;
}
.block-2__list-item {
	color: white;
}

.block-2__list-item-span {
	font-family: $font-header;
	font-weight: 900;
	font-size: 30px;
}

.block-2__list-item-text {
	font-size: 26px;
}
</style>
