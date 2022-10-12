<script setup>
const props = defineProps({
	columns: Number,
});
</script>

<template>
	<div class="grid">
		<slot />
	</div>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: auto auto;
	grid-gap: 2rem;
}

@media screen and (max-width: 400px) {
	.grid {
		grid-template-columns: auto;
	}
}
</style>
