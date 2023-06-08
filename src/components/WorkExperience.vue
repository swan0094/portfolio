<template>
	<h4>Experience</h4>
	<v-card>
		<v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
			<v-tab :value="1">Education</v-tab>
			<v-tab :value="2">Experience</v-tab>
		</v-tabs>
		<v-window v-model="tab">
			<v-window-item :value="1">
				<v-container>
					<v-img :src="educationImage" :width="800" aspect-ratio="1"></v-img>
				</v-container>
			</v-window-item>
			<v-window-item :value="2">
				<v-container>
					<v-img :src="experienceImage" :width="800" aspect-ratio="1"></v-img>
				</v-container>
			</v-window-item>
		</v-window>
	</v-card>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import educationImage from "../assets/education.png";
	import experienceImage from "../assets/experience.png";

	const tab = ref(null);
</script>

<style scoped lang="scss"></style>
