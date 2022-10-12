import { ref, computed } from 'vue';

const STORAGE_KEY = 'candidus.docs.blog-url';
const blogUrlState = ref(localStorage.getItem(STORAGE_KEY));
const setBlogUrl = (value) => {
	blogUrlState.value = value;
	localStorage.setItem(STORAGE_KEY, value);
};
const getBlogUrl = computed(() => blogUrlState.value);

export default { setBlogUrl, getBlogUrl };
