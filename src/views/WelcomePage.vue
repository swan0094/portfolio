<template>
	<header></header>
	<main>
		<h1>WELCOME</h1>
		<RouterLink to="/" v-slot="{ navigate }">
			<button @click="navigate" role="link">ENTER</button>
		</RouterLink>
	</main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
