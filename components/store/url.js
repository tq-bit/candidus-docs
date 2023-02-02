import { ref, computed } from 'vue';

const isClientSide = typeof window !== 'undefined';
const STORAGE_KEY = 'candidus.docs.blog-url';
const blogUrlState = ref(isClientSide ? localStorage?.getItem(STORAGE_KEY) : '');
const setBlogUrl = (value) => {
	if (isClientSide) {
		blogUrlState.value = value;
		localStorage?.setItem(STORAGE_KEY, value);
	}
};
const getBlogUrl = computed(() => blogUrlState.value);

export default { setBlogUrl, getBlogUrl };
