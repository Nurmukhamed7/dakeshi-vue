<script setup>
import { ref } from 'vue'

const isOpenMenu = ref(false)

const toggleMenu = () => {
	isOpenMenu.value = !isOpenMenu.value
}
</script>

<template>
	<header
		id="header"
		class="_header_15xdh_141 main_15xdh_154 _scrolled_15xdh_162"
	>
		<div class="_container_1ezss_141 _mobile_15xdh_166">
			<router-link
				:to="{ name: 'home' }"
				class="router-link-active router-link-exact-active _logo_1snct_141 _logo_15xdh_184"
			>
				<span class="_icon_1lg8m_141"
					><img src="/images/logo.svg" alt="logo"
				/></span>
			</router-link>
			<button class="_button_15xdh_198" @click="toggleMenu">Меню</button>
		</div>

		<nav class="_menu_15xdh_234" :class="{ _active_15xdh_246: isOpenMenu }">
			<div class="_menu-container_15xdh_265">
				<div class="_menu-header_15xdh_284">
					<router-link to="/">
						<img src="/images/logo.svg" alt="logo" />
					</router-link>
					<button class="_close_egbwb_141 _close_15xdh_309" @click="toggleMenu">
						<span class="_icon_1lg8m_141">
							<svg
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.25 17.25L6.75 6.75M17.25 6.75L6.75 17.25"
									stroke="black"
									stroke-width="1.5"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>
							</svg>
						</span>
					</button>
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
					<div class="_mobile_1ge20_151">
						<div>
							<div class="_title_140u5_141">Меню</div>
							<ul class="accordion">
								<div class="_items_140u5_184">
									<div class="_item-wrapper_140u5_154">
										<li class="_item_140u5_154">
											<div>
												<router-link
													class="router-link-active router-link-exact-active _link_140u5_213 _active_140u5_180"
													:to="{ name: 'home' }"
												>
													<span class="_item-text_140u5_170">DAKESHI INC</span>
												</router-link>
											</div>
											<div
												style="
													padding: 0px;
													border: 0px;
													margin: 0px;
													will-change: height;
													overflow: hidden;
													height: 0px;
													--vc-auto-duration: 0ms;
												"
												data-collapse="collapsing"
												class="_collapse_h3qlo_141"
											></div>
										</li>
										<div class="_divider_140u5_245"></div>
									</div>
									<div class="_item-wrapper_140u5_154">
										<li class="_item_140u5_154">
											<div>
												<router-link
													class="router-link-active router-link-exact-active _link_140u5_213"
													:to="{ name: 'DesignAndMarketing' }"
												>
													<span class="_item-text_140u5_170"
														>ДИЗАЙН И МАРКЕТИНГ</span
													>
												</router-link>
											</div>
											<div
												style="
													padding: 0px;
													border: 0px;
													margin: 0px;
													will-change: height;
													overflow: hidden;
													height: 0px;
													--vc-auto-duration: 0ms;
												"
												data-collapse="collapsing"
												class="_collapse_h3qlo_141"
											></div>
										</li>
										<div class="_divider_140u5_245"></div>
									</div>
									<div class="_item-wrapper_140u5_154">
										<li class="_item_140u5_154">
											<div>
												<router-link
													class="router-link-active router-link-exact-active _link_140u5_213"
													:to="{ name: 'Academy' }"
												>
													<span class="_item-text_140u5_170">АКАДЕМИЯ</span>
												</router-link>
											</div>
											<div
												style="
													padding: 0px;
													border: 0px;
													margin: 0px;
													will-change: height;
													overflow: hidden;
													height: 0px;
													--vc-auto-duration: 0ms;
												"
												data-collapse="collapsing"
												class="_collapse_h3qlo_141"
											></div>
										</li>
										<div class="_divider_140u5_245"></div>
									</div>
									<div class="_item-wrapper_140u5_154">
										<li class="_item_140u5_154">
											<div>
												<router-link
													class="router-link-active router-link-exact-active _link_140u5_213"
													:to="{ name: 'Analytic' }"
												>
													<span class="_item-text_140u5_170">АНАЛИТИКА</span>
												</router-link>
											</div>
											<div
												style="
													padding: 0px;
													border: 0px;
													margin: 0px;
													will-change: height;
													overflow: hidden;
													height: 0px;
													--vc-auto-duration: 0ms;
												"
												data-collapse="collapsing"
												class="_collapse_h3qlo_141"
											></div>
										</li>
									</div>
								</div>
							</ul>
						</div>
					</div>
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

.none {
	display: none;
}
._header_15xdh_141 {
	background: pink;

	min-width: 320px;
	position: fixed;
	top: 0;
	transition: background-color 0.3s ease-in-out;
	width: 100%;
	z-index: 10;
}

@media (min-width: 768px) {
	._header_15xdh_141 {
		// background-color: $blue;
	}
}

._container_1ezss_141 {
	margin: 0 auto;
	max-width: 100%;
}
@media (min-width: 768px) {
	._container_1ezss_141._desktop-only_1ezss_146 {
		max-width: 100%;
	}

	._container_1ezss_141 {
		max-width: 680px;
	}
}
@media (min-width: 1024px) {
	._container_1ezss_141 {
		max-width: 944px !important;
	}
}
@media (min-width: 1200px) {
	._container_1ezss_141 {
		max-width: 1120px !important;
	}
}

._menu_15xdh_234 {
	background-color: #fff;
	height: 100%;
	left: 0;
	overflow-y: auto;
	position: fixed;
	top: 0;
	transform: translate(100%);
	transition: transform 0.3s ease-in;
	width: 100%;
	z-index: 2;
}
._menu_15xdh_234._active_15xdh_246 {
	transform: translate(0);
	transition-timing-function: ease-out;
}
@media (min-width: 1200px) {
	._menu_15xdh_234 {
		height: auto;
		left: auto;
		overflow-y: visible;
		overflow-y: initial;
		padding: 0;
		position: relative;
		top: auto;
		transform: none;
		transition: none;
		width: 100%;
		z-index: auto;
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

._mobile_15xdh_166 {
	align-items: center;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 13px 24px;
}
@media (min-width: 768px) {
	._mobile_15xdh_166 {
		padding-left: 0;
		padding-right: 0;
	}
}
@media (min-width: 1200px) {
	._mobile_15xdh_166 {
		display: none;
	}
}

._close_egbwb_141 {
	background: $close-menu-btn;
	border: none;
	border-radius: 8px;
	cursor: pointer;
	padding: 4px;
}
._close_egbwb_141 svg {
	height: 24px;
	width: 24px;
}
._close_egbwb_141:active {
	background: $close-menu-btn;
}
@media (min-width: 768px) {
	._close_egbwb_141 svg {
		height: 32px;
		width: 32px;
	}
}

._close_15xdh_309 {
}
@media (min-width: 768px) {
	._close_15xdh_309 svg {
		height: 32px;
		width: 32px;
	}
}
@media (min-width: 1200px) {
	._close_15xdh_309 {
		display: none;
	}
}

._icon_1lg8m_141 {
	display: flex;
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

._desktop_1ge20_141 {
	display: none;
	margin: 0 auto;
}
@media (min-width: 1200px) {
	._desktop_1ge20_141 {
		display: block;
	}
}

._mobile_1ge20_151 {
	display: block;
}
@media (min-width: 1200px) {
	._mobile_1ge20_151 {
		display: none;
	}
}

._title_140u5_141 {
	font-size: 40px;
	font-weight: 600;
	line-height: 1.4;
	margin-bottom: 12px;
	margin-left: 12px;

	font-family: $font-header;
}
@media (min-width: 768px) {
	._title_140u5_141 {
		font-size: 60px;
	}
}

.accordion {
	align-items: normal;
	display: flex;
	flex-direction: column;
	gap: 20px;
	justify-content: normal;
	list-style: none;
	margin: 0;
	padding: 0;
}
@media (min-width: 768px) {
	.accordion {
		gap: 24px;
	}
}

._items_140u5_184 {
	color: #888b94;
	flex-grow: 1;
	font-size: 16px;
	line-height: 1.4;
}

._item-wrapper_140u5_154 {
	overflow: hidden;
}

._item_140u5_154 {
	font-size: 23px;
	line-height: 1.4;
	padding: 12px 0;
}
@media (min-width: 768px) {
	._item_140u5_154 {
		font-size: 28px;
		padding: 16px 0;
	}
}

._item-text_140u5_170 {
	border-radius: 8px;
	padding: 8px 12px;
	font-family: $font-header;
	font-weight: 600;
}
@media (min-width: 768px) {
	._item-text_140u5_170 {
		padding: 8px 16px;
	}
}
._active_140u5_180 {
	._item-text_140u5_170 {
		color: $orange;
		// background-color: $active-menu;
	}
}

._link_140u5_213,
._text_140u5_212 {
	align-items: center;
	color: $black;
	display: flex;
	justify-content: space-between;
}
@media (min-width: 1024px) {
	._link_140u5_213,
	._text_140u5_212 {
		cursor: pointer;
	}

	._link_140u5_213:hover:not(._active_140u5_180) ._item-text_140u5_170,
	._text_140u5_212:hover:not(._active_140u5_180) ._item-text_140u5_170 {
		background: #f2f2f3;
	}
}
._link_140u5_213 {
	-webkit-text-decoration: none;
	text-decoration: none;
}

._divider_140u5_245 {
	background: #f2f2f3;
	height: 1px;
	margin: 0 12px;
	width: 100%;
}

.contact {
	margin-top: auto;
	min-width: 110px;
	padding-bottom: 48px;
	padding-left: 12px;
	font-size: 23px;
}
@media (min-width: 768px) {
	.contact {
		font-size: 28px;
	}
}

@media (min-width: 1200px) {
	.contact {
		padding: 0;
		font-size: 16px;
	}
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
