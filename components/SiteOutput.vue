<script setup>
import { ref, computed } from 'vue';
import urlStore from './store/url';

const siteUrl = window ? urlStore.getBlogUrl : ref('');
const props = defineProps({
	path: { type: String },
});
const url = computed(() => `https://${siteUrl.value}/${props.path}`);
const onChange = (ev) => (window ? urlStore.setBlogUrl(ev.target.value) : null);
</script>

<template>
	<a :href="url" target="_blank">{{ url }}</a>
</template>

<style scoped></style>
