<script setup></script>

<template>
	<header>
		<!-- <div class="container mobile"></div> -->
		<nav class="menu">
			<div class="menu-container">
				<div class="menu-header">
					<router-link to="/">
						<img src="/images/logo.svg" alt="" />
					</router-link>
					<!-- <button>XBTN</button> -->
				</div>
				<div class="menu-content">
					<div class="desktop">
						<div class="items">
							<div class="item">
								<router-link class="link" :to="{ name: 'home' }"
									>DAKESHI INC</router-link
								>
							</div>
							<div class="item">
								<router-link class="link" :to="{ name: 'DesignAndMarketing' }"
									>ДИЗАЙН И МАРКЕТИНГ</router-link
								>
							</div>
							<div class="item">
								<router-link class="link" :to="{ name: 'Academy' }"
									>АКАДЕМИЯ</router-link
								>
							</div>
							<div class="item">
								<router-link class="link" :to="{ name: 'Analytic' }"
									>АНАЛИТИКА</router-link
								>
							</div>
						</div>
					</div>
					<!-- <div class="mobile">mobile</div> -->
					<div class="contact">
						<button>Связаться с нами</button>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
@import '@/styles/layout/layout';

header {
	// background: red;
}

.menu-container {
	max-width: 1470px;
	margin: 0 auto;
	padding: 20px 15px;
	display: flex;
	justify-content: space-between;
	background-color: $orange;
}

.menu-content {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 0%;
}

.desktop {
	margin: 0 auto;
}

.items {
	display: flex;
	gap: 64px;
}

.item {
	display: flex;
	justify-content: center;
	align-items: center;
}

.link {
	font-family: $font-header;
	font-weight: 700;

	&:hover {
		color: red;
	}
}
</style>
