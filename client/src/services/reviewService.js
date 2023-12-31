import {requestMaker} from './requester';

const baseUrl = 'http://localhost:3030/data/reviews';

export const reviewServiceMaker = (token) => {
    const request = requestMaker(token);

    const getAll = async () => {
        const result = await request.get(baseUrl)
        const reviews = Object.values(result)

        return reviews;
    };

    const getOne = async (reviewId) => {
        const result = await request.get(`${baseUrl}/${reviewId}`);

        return result;
    };

    const create = async (reviewData) => {
        const result = await request.post(baseUrl, reviewData);
        return result;
    };

    const edit = (reviewId, data) => request.put(`${baseUrl}/${reviewId}`, data);

    const deleteReview = (reviewId) => request.delete(`${baseUrl}/${reviewId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteReview,
    };
}