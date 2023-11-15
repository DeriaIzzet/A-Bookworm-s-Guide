import * as request from './requester';

const baseUrl = 'http://localhost:3030/jsonstore/reviews';

export const getAll = async () => {
    const result = await request.get( baseUrl)
    const reviews = Object.values(result)
  
    return reviews;
};

// export const getOne = async (reviewId) => {
//     const result = await request.get(`${baseUrl}/${reviewId}`);

//     return result;
// };

// export const create = async (reviewData) => {
//     const result = await request.post(baseUrl, reviewData);

//     console.log(result);

//     return result;
// };

// export const addComment = async (reviewId, data) => {
//     const result = await request.post(`${baseUrl}/${reviewId}/comments`, data);

//     return result;
// };