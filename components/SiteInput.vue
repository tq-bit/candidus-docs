<script setup>
import { ref, computed } from 'vue';
const siteUrl = ref('blog.q-bit.me');
const props = defineProps({
	path: { type: String },
});
const url = computed(() => `https://${siteUrl.value}/${props.path}`);
</script>

<template>
	<label for="site-input">Enter your blog's domain:</label>
	<input name="site-input" type="url" v-model="siteUrl" />
	<a :href="url" target="_blank">{{ url }}</a>
</template>

<style scoped>
label {
	font-size: medium;
	margin-right: 0.5rem;
}

input {
	margin-bottom: 0.5rem;
	font-size: medium;
	padding: 0.25rem 0.5rem;
	border: 1px solid gray;
	border-radius: 0.25rem;
}
a {
	display: block;
}
</style>
