import * as request from './request';

const baseUrl = 'http://localhost:3030/jsonstore/posts';

export const getAll = async () => {
    const result = await request.get(baseUrl);
    const posts = Object.values(result);

    return posts;
};

export const getOne = async (postId) => {
    const result = await request.get(`${baseUrl}/${postId}`);

    return result;
};

export const create = async (postData) => {
    const result = await request.post(baseUrl, postData);

    console.log(result);

    return result;
};

export const addComment = async (postId, data) => {
    const result = await request.post(`${baseUrl}/${postId}/comments`, data);

    return result;
};