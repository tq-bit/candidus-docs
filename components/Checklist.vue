<script setup>
defineProps({
	items: {
		type: Array,
	},
});
const emit = defineEmits(['change-item']);
</script>

<template>
	<form>
		<div v-for="item in items" :key="item.id">
			<input
				type="checkbox"
				@change="emit('change-item', item)"
				:name="item.text"
				:checked="item.done"
			/>
			<label :for="item.text">
				<a v-if="item.link" :href="item.link"> {{ item.text }}</a>
				<span v-else>{{ item.text }}</span>
			</label>
		</div>
	</form>
</template>

<style scoped>
input {
	margin-right: 0.5rem;
}
</style>
