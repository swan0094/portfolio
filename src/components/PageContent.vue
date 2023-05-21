<template>
	<div class="pageContent">
		<RouterView />
	</div>
</template>

<script setup lang="ts">
	import { RouterView } from "vue-router";
</script>

<style scoped lang="scss">
	.pageContent {
		width: -webkit-fill-available;
		width: -moz-available;
	}
</style>
