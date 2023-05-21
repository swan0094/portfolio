<template>
	<div id="topMenu">
		<h2>Alex Swan</h2>
		<nav>
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About Me</router-link>
			<router-link to="/projects">Projects</router-link> |
			<router-link to="/resume">Resume</router-link>
		</nav>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
	#topMenu {
		display: grid;
		grid-template-columns: max-content 1fr;
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}
</style>
