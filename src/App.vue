<template>
	<div class="app" :class="darkMode ? 'dark' : ''">
		<MenuBar @toggleDarkMode="darkMode = !darkMode" />
		<PageContent></PageContent>
	</div>
</template>

<script setup lang="ts">
	import MenuBar from "./components/MenuBar.vue";
	import PageContent from "./components/PageContent.vue";
	import { Ref, ref } from "vue";

	const darkMode: Ref<boolean> = ref(true);
</script>

<style scoped>
	.dark {
		background-color: #494d5f;
		color: #e5eaf5;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
</style>
