import { requestMaker } from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestMaker();

export const getAll = async (reviewId) => {
    const searchQuery = encodeURIComponent(`reviewId="${reviewId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (reviewId, comment) => {
    const result = await request.post(baseUrl, { reviewId , comment });

    return result;
};