import { instance } from './instance';
import { post } from './instance';

export const Services = {
    getAllCountries: () => instance.get('/all'),
    getAllComment: () => post.get('/posts')
};
