<script setup></script>

<template>
	<header
		id="header"
		class="_header_15xdh_141 main_15xdh_154 _scrolled_15xdh_162"
	>
		<div class="_container_1ezss_141 _mobile_15xdh_166"></div>
		<nav class="_menu_15xdh_234">
			<div class="_menu-container_15xdh_265">
				<div class="_menu-header_15xdh_284">
					<router-link to="/">
						<img src="/images/logo.svg" alt="" />
					</router-link>
					<!-- <button>XBTN</button> -->
				</div>
				<div class="_menu-content_15xdh_320">
					<div class="_desktop_1ge20_141">
						<div class="items">
							<div class="item">
								<router-link class="link active-o1lhr" :to="{ name: 'home' }"
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
					<!-- <div class="_mobile_1ge20_151">mobile</div> -->
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

._header_15xdh_141 {
	background: orange;

	min-width: 320px;
	position: fixed;
	top: 0;
	transition: background-color 0.3s ease-in-out;
	width: 100%;
	z-index: 10;
}

@media (min-width: 768px) {
	._header_15xdh_141 {
		background-color: #fbbbbb;
	}
}

._menu-container_15xdh_265 {
	align-items: normal;
	display: flex;
	flex-direction: column;
	height: inherit;
	justify-content: normal;
}

@media (min-width: 1200px) {
	._menu-container_15xdh_265 {
		display: flex;
		max-width: 1470px;
		margin: 0 auto;
		padding: 20px 15px;
		justify-content: space-between;
		background-color: rgb(89, 77, 77);
		align-items: center;
		flex-direction: row;
	}
}

._menu-header_15xdh_284 {
	align-items: center;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 14px 24px;
}

@media (min-width: 768px) {
	._menu-header_15xdh_284 {
		padding: 16px 44px;
	}
}

@media (min-width: 1024px) {
	._menu-header_15xdh_284 {
		padding: 16px 40px;
	}
}
@media (min-width: 1200px) {
	._menu-header_15xdh_284 {
		padding: 0;
	}
}

._menu-content_15xdh_320 {
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 12px;
	padding-right: 24px;
	padding-top: 24px;
}

@media (min-width: 768px) {
	._menu-content_15xdh_320 {
		padding-left: 28px;
		padding-right: 44px;
		padding-top: 32px;
	}
}

@media (min-width: 1024px) {
	._menu-content_15xdh_320 {
		padding-left: 24px;
		padding-right: 40px;
	}
}

@media (min-width: 1200px) {
	._menu-content_15xdh_320 {
		align-items: center;
		flex-direction: row;
		padding: 0;
	}
}

.contact {
	//TODO: finished here 16.10
	margin-top: auto;
	min-width: 110px;
	padding-bottom: 48px;
	padding-left: 12px;
}
@media (min-width: 1200px) {
	.contact {
		padding: 0;
	}
}

._desktop_1ge20_141 {
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
		color: $orange;
	}
}

button {
	border-radius: 4px;
	background-color: $blue;
	padding: 8px 16px;

	font-family: $font-header;
	font-weight: 700;
}

.active-o1lhr {
	color: $orange;
}
</style>
