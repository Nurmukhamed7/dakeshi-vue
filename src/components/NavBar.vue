<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let openMenu = ref(false)

const menuOpen = () => {
	openMenu.value = !openMenu.value
}

const links = [
	{
		name: 'DAKESHI INC',
		link: '/',
	},
	{
		name: 'ДИЗАЙН <br/> И МАРКЕТИНГ',
		link: '/design-and-marketing',
	},
	{
		name: 'АКАДЕМИЯ',
		link: '/academy',
	},
	{
		name: 'АНАЛИТИКА',
		link: '/analytic',
	},
]
</script>

<template>
	<div class="navbar">
		<nav id="nav" class="nav" :class="[openMenu ? 'open' : '']">
			<div class="nav-button" @click="menuOpen()">
				<i v-if="!openMenu" class="pi pi-bars" style="font-size: 2rem" />
				<i v-if="openMenu" class="pi pi-times" style="font-size: 2rem" />
			</div>

			<ul class="nav-list">
				<li class="nav-item" v-for="(link, index) in links" :key="index">
					<RouterLink :to="link.link" v-html="link.name"></RouterLink>
				</li>
			</ul>
		</nav>
		<div class="contacts">
			<router-link to="#" class="contact">СВЯЗАТЬСЯ С НАМИ</router-link>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 10;
	margin-bottom: 50px;
	padding-top: 30px;
}

.nav {
}

.nav-button {
	display: none;
	cursor: pointer;
}

.nav-list {
	display: flex;
	align-items: center;
	gap: 105px;

	font-family: Finlandica;
	font-size: 20px;
	font-weight: 700;
	line-height: normal;
}

.nav-item {
}

.nav-item:nth-child(1) {
	color: $orange;
	position: relative;
}

.nav-item:nth-child(1)::after {
	content: url('/images/BRUSH STROKE.svg');
	position: absolute;
	bottom: -15px;
	left: 0;
}

.nav-link {
	&:hover {
		color: red;
	}
}

.nav-link.active {
	color: $orange;
}

.contacts {
	background: $blue;
	padding: 7px 21px;
	border-radius: 2px;

	a {
		font-family: Finlandica;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
	}
}

.contact {
	&:hover {
		color: white;
	}
}

@media (max-width: 1200px) {
}

@media (max-width: 1000px) {
	.header-nav {
		padding: 25px 0;
	}

	.nav-button {
		display: block;
	}
	.nav-list {
		display: none;
		margin: 0;
		align-items: end;
		text-align: right;
	}

	.nav.open .nav-list {
		position: fixed;
		top: 90px;
		bottom: 0;
		left: 0;
		right: 0;
		background: $main;

		z-index: 2;

		padding: 28px 38px;
		display: flex;
		flex-direction: column;
		row-gap: 24px;
	}
}
</style>
