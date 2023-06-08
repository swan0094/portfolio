<template>
	<v-layout>
		<v-app-bar color="primary" prominent>
			<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Alex Swan</v-toolbar-title>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" location="bottom" temporary app>
			<v-list :items="items"></v-list>
		</v-navigation-drawer>

		<v-main>
			<v-container fluid>
				<div class="headingName">
					<h3>Hi, I'm Alex Swan</h3>
					<h4>Full Stack Software Developer</h4>
					<v-btn icon="fa-brands fa-linkedin-in" variant="plain"></v-btn>
					<v-btn icon="fa-brands fa-github" variant="plain"></v-btn>
					<v-btn append-icon="fas fa-arrow-down" prepend-icon="fas fa-computer-mouse" variant="plain" :ripple="false">Scroll down</v-btn>
				</div>
				<AboutMe></AboutMe>
				<MySkills></MySkills>
				<MyProjects></MyProjects>
			</v-container>
		</v-main>
	</v-layout>
</template>

<script setup lang="ts">
	import AboutMe from "@/components/AboutMe.vue";
	import MyProjects from "@/components/WorkExperience.vue";
	import MySkills from "@/components/TopSkills.vue";
	import { ref } from "vue";

	const drawer = ref(false);
	const items = [
		{
			title: "Home",
			value: "home",
		},
		{
			title: "About me",
			value: "about",
		},
		{
			title: "Top skills",
			value: "skills",
		},
		{
			title: "Experience",
			value: "experience",
		},
	];
</script>

<style scoped lang="scss">
	.headingName {
		height: 100%;
		font-size: 8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		& h2 {
			margin: 30px;
		}
	}
</style>
