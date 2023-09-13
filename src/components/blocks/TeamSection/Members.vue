<script setup>
const teamMembers = [
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
	{
		name: 'Имя Фамилия',
		job: 'Должность1',
		imgSrc: '/images/pazl1.svg',
	},
]
</script>

<template>
	<div class="team-wrapper">
		<div class="member" v-for="(member, index) in teamMembers" :key="index">
			<img :src="member.imgSrc" alt="member" class="member__img" />
			<h4 class="member__name">{{ member.name }}</h4>
			<h5 class="member__job">{{ member.job }}</h5>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.team-wrapper {
	max-width: 890px;
	margin: 50px auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 40px;

	h4,
	h5 {
		margin: 0;
	}
}
.member {
	max-width: 185px;
}
.member__img {
	width: 285px; // 185
	height: 154px;
	border-radius: 20px;
	background: red;
}
.member__name {
	font-family: Finlandica;
	font-size: 20px;
	font-weight: 700;
	line-height: 24px;
	text-align: left;
}
.member__job {
	font-family: PT Sans;
	font-size: 16px;
	font-weight: 400;
	line-height: 21px;
}

@media (max-width: 428px) {
	.team-wrapper {
		width: 398px;
		margin: 20px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}
}

@media (max-width: 415px) {
	.team-wrapper {
		width: 384px;
		margin: 20px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	.member {
		width: 182px;
	}
}

@media (max-width: 391px) {
	.team-wrapper {
		width: 360px;
		margin: 20px 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;

		h4,
		h5 {
			margin: 0;
		}
	}

	.member {
		width: 170px;
	}
	.member__img {
		width: 165px;
		height: 144px;
		border-radius: 20px;
	}
}
</style>
