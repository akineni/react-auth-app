import { createApi } from 'unsplash-js';

const VITE_UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const unsplash = createApi({
	accessKey: VITE_UNSPLASH_ACCESS_KEY,
});