<template>
	<SideMenu v-if="!shouldHideMenuBar" />
	<PageContent></PageContent>
</template>

<script setup lang="ts">
	import SideMenu from "./components/SideMenu.vue";
	import PageContent from "./components/PageContent.vue";
	import { useRoute } from "vue-router";
	import { ComputedRef, computed } from "vue";

	const route = useRoute();

	const shouldHideMenuBar: ComputedRef<boolean> = computed(() => {
		return route.name === "welcome";
	});
</script>

<style scoped></style>
