<script setup>
import { computed } from 'vue';
import urlStore from './store/url';

const siteUrl = urlStore.getBlogUrl;
const props = defineProps({
	path: { type: String },
});
const url = computed(() => `https://${siteUrl.value}/${props.path}`);
const onChange = (ev) => urlStore.setBlogUrl(ev.target.value);
</script>

<template>
	<a :href="url" target="_blank">{{ url }}</a>
</template>

<style scoped></style>
