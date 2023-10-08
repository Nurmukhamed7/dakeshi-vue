<template>
	<!-- <div>This is DesignAndMarketing page</div> -->

	<div class="grid m-0">
		<div
			class="fontfamily col-fixed m-auto flex justify-content-between align-items-center container"
		>
			<span class="pi pi-apple"></span>
			<div
				class="xl:block xl:bg-primary xl:flex xl:gap-8 xl:align-items-center"
			>
				<router-link to="/">DAKESHI INC</router-link>
				<router-link to="/design-and-marketing"
					>ДИЗАЙН <br />
					И МАРКЕТИНГ</router-link
				>
				<router-link to="/">АКАДЕМИЯ</router-link>
				<router-link to="/">АНАЛИТИКА</router-link>
			</div>

			<Button
				style="background-color: #2be2f0; border-color: #2be2f0"
				class="text-900"
				label="Связаться с нами"
			/>
		</div>
	</div>

	<div
		class="p-4 bg-primary-400 md:flex md:justify-content-between md:align-items-start sm:flex sm:justify-content-between sm:align-items-start flex justify-content-between align-items-start container"
	>
		<div class="flex justify-content-start align-items-center bg-red-400 p-2">
			<span><i class="pi pi-apple"></i></span>
		</div>
		<Button icon="pi pi-arrow-right" @click="visible = true" />
		<Sidebar v-model:visible="visible" position="right">
			<ul
				class="flex flex-column align-items-end gap-2 md:flex md:flex-column md:align-items-end md:gap-2 lg:flex lg:flex-column lg:align-items-end lg:gap-2 xl:hidden"
			>
				<router-link to="/">DAKESHI INC</router-link>
				<router-link to="/design-and-marketing">ДИЗАЙН И МАРКЕТИНГ</router-link>
				<router-link to="/">АКАДЕМИЯ</router-link>
				<router-link to="/">АНАЛИТИКА</router-link>
				<Button
					style="background-color: #2be2f0; border-color: #2be2f0"
					class="text-900"
					label="Связаться с нами"
				/>
			</ul>
		</Sidebar>
	</div>
</template>

<script setup>
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'

import { ref } from 'vue'

const visible = ref(false)
</script>

<style lang="scss" scoped>
// @import '@/styles/layout/_variables';

// .fontfamily {
// 	font-family: $font-header;
// }
.container {
	width: 1200px;
}
</style>
