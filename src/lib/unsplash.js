import { createApi } from 'unsplash-js';
import { UNSPLASH_ACCESS_KEY } from '@config/appConfig';

export const unsplash = createApi({
	accessKey: UNSPLASH_ACCESS_KEY,
});