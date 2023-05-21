import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "home",
			component: async () => import("../views/HomePage.vue"),
		},
		{
			path: "/welcome",
			name: "welcome",
			component: async () => import("../views/WelcomePage.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: async () => import("../views/AboutMe.vue"),
		},
		{
			path: "/projects",
			name: "Projects",
			component: async () => import("../views/MyProjects.vue"),
		},
		{
			path: "/resume",
			name: "resume",
			component: async () => import("../views/ContactMe.vue"),
		},
	],
	scrollBehavior() {
		return {
			top: 0,
			behavior: "smooth",
		};
	},
});

export default router;
