<template>
	<header>
		<img src="../assets/icon.png" style="height: 50px; width: 100px" />
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/about">About Me</router-link>
			<router-link to="/projects">Projects</router-link>
			<router-link to="/resume">Resume</router-link>
		</nav>
		<label class="switch">
			<input type="checkbox" @change="$emit('toggleDarkMode')" />
			<span class="slider"></span>
		</label>
	</header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
	header {
		display: grid;
		grid-template-columns: max-content 1fr max-content;
		align-items: center;
		justify-content: center;

		& nav {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 80px;
		}
	}

	a {
		text-decoration: none;
		color: #494d5f;
		-webkit-transition: 0.4s;
		transition: 0.4s;
	}
	.dark a {
		color: #e5eaf5;
	}

	.switch {
		position: relative;
		display: inline-block;
		width: 60px;
		height: 34px;

		& input {
			opacity: 0;
			width: 0;
			height: 0;
		}

		& .slider {
			position: absolute;
			cursor: pointer;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: #e5eaf5;
			-webkit-transition: 0.4s;
			transition: 0.4s;
			border-radius: 34px;
		}
	}

	.switch .slider:before {
		position: absolute;
		content: "";
		height: 26px;
		width: 26px;
		left: 4px;
		bottom: 4px;
		background-color: #494d5f;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked {
		+ .slider {
			background-color: #494d5f;
		}
		+ .slider:before {
			background-color: #e5eaf5;
		}
	}

	input:focus + .slider {
		box-shadow: 0 0 1px #494d5f;
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
	}
</style>
