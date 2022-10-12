<script setup>
const props = defineProps({
	image: { type: String },
	name: { type: String },
	text: { type: String },
	link: { type: String },
});
</script>

<template>
	<div class="card">
		<img :src="props.image" :alt="props.name" />
		<p>{{ props.text }}</p>
		<h2>{{ props.name }}</h2>
	</div>
</template>

<style scoped>
.card {
	background-color: var(--vp-c-bg-alt);
	padding: 2rem;
	border-radius: 24px;
	text-align: center;
}
h2 {
	margin: 0;
}
img {
	height: auto;
	border-radius: 24px;
	width: 100%;
}
</style>
