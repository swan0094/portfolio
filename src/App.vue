<template>
	<v-app>
		<v-layout>
			<v-app-bar app prominent>
				<v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
				<v-toolbar-title>Alex Swan</v-toolbar-title>
			</v-app-bar>

			<v-navigation-drawer v-model="drawer" location="bottom" temporary app>
				<v-list :items="items"></v-list>
			</v-navigation-drawer>

			<v-main>
				<v-container fluid>
					<HomePage></HomePage>
					<AboutMe></AboutMe>
					<MySkills></MySkills>
					<MyProjects></MyProjects>
				</v-container>
			</v-main>
		</v-layout>
	</v-app>
</template>

<script setup lang="ts">
	import HomePage from "./views/HomePage.vue";
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

<style scoped lang="scss"></style>
