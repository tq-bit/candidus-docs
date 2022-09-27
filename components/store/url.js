import { ref, computed } from 'vue';

const blogUrlState = ref('blog.q-bit.me');
const setBlogUrl = (value) => (blogUrlState.value = value);
const getBlogUrl = computed(() => blogUrlState.value);

export default { setBlogUrl, getBlogUrl };
