import AcademyView from '@/views/AcademyView.vue'
import AnalyticView from '@/views/AnalyticView.vue'
import DesignAndMarketingView from '@/views/DesignAndMarketingView.vue'
import HomeView from '@/views/HomeView.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/design-and-marketing',
			name: 'DesignAndMarketing',
			component: DesignAndMarketingView,
		},
		{
			path: '/academy',
			name: 'Academy',
			component: AcademyView,
		},
		{
			path: '/analytic',
			name: 'Analytic',
			component: AnalyticView,
		},
	],
})

export default router
