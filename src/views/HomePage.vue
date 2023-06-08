<template>
	<div class="headingName">
		<h3>Hi, I'm Alex Swan</h3>
		<h4>Full Stack Software Developer</h4>
		<v-btn rounded="xl" append-icon="fas fa-comment">Lets Talk!</v-btn>
		<v-btn icon="fa-brands fa-linkedin-in" variant="plain"></v-btn>
		<v-btn icon="fa-brands fa-github" variant="plain"></v-btn>
		<v-btn append-icon="fas fa-arrow-down" prepend-icon="fas fa-computer-mouse" variant="plain" :ripple="false">Scroll down</v-btn>
	</div>
	<AboutMe></AboutMe>
	<MySkills></MySkills>
	<MyProjects></MyProjects>
</template>

<script setup lang="ts">
	import AboutMe from "@/components/AboutMe.vue";
	import MyProjects from "@/components/WorkExperience.vue";
	import MySkills from "@/components/TopSkills.vue";
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
