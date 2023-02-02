<script setup>
import urlStore from './store/url';

const siteUrl = urlStore.getBlogUrl;
const props = defineProps({
	path: { type: String },
});
const onChange = (ev) => urlStore.setBlogUrl(ev.target.value);
</script>

<template>
	<ClientOnly>
		<label for="site-input">Please enter your blog's domain:</label>
		<input name="site-input" type="url" :value="siteUrl" @keyup="onChange" />
	</ClientOnly>
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
</style>
