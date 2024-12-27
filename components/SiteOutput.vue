<script setup>
import { ref, computed } from 'vue';
import urlStore from './store/url';

const siteUrl = window ? urlStore.getBlogUrl : ref('candidus.q-bit.me');
const props = defineProps({
	path: { type: String },
});
const url = computed(() => `https://${siteUrl.value}/${props.path}`);
const onChange = (ev) => (window ? urlStore.setBlogUrl(ev.target.value) : null);
</script>

<template>
	<a class="site-output" :href="url" target="_blank">{{ url }}</a>
</template>

<style scoped>
.site-output {
	display: block;
}
</style>
