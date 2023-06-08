<template>
	<h4>Top skills</h4>
	<v-expansion-panels>
		<v-expansion-panel
			><v-expansion-panel-title
				><v-icon icon="fas fa-code"></v-icon>
				<p>Front end development</p></v-expansion-panel-title
			>
			<v-expansion-panel-text>
				<v-list lines="one">
					<v-list-item title="TypeScript"></v-list-item>
					<v-list-item title="JavaScript"></v-list-item>
					<v-list-item title="HTML"></v-list-item>
					<v-list-item title="CSS"></v-list-item>
					<v-list-item title="Vue.js"></v-list-item>
				</v-list>
			</v-expansion-panel-text>
		</v-expansion-panel>
		<v-expansion-panel
			><v-expansion-panel-title
				><v-icon icon="fas fa-server"></v-icon>
				<p>Back end development</p></v-expansion-panel-title
			><v-expansion-panel-text>
				<v-list lines="one">
					<v-list-item title="C#"></v-list-item>
					<v-list-item title="SQL"></v-list-item>
					<v-list-item title="Node.js"></v-list-item>
				</v-list> </v-expansion-panel-text
		></v-expansion-panel>
	</v-expansion-panels>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
