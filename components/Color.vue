<script setup>
const props = defineProps({
	text: { type: String },
	color: { type: String },
});
</script>

<template>
	<div>
		<svg class="color" width="18" height="18">
			<rect width="12" height="12" :fill="props.color"></rect>
		</svg>
		<span>{{ text }}</span>
	</div>
</template>

<style>
.color {
	display: inline;
}
</style>
