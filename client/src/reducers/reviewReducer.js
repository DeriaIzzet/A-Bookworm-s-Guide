export const reviewReducer = (state, action) => {
    switch (action.type) {
        case 'REVIEW_FETCH':
            // return Object.assign({}, action.payload);
            return { ...action.payload };
        case 'COMMENT_ADD':
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        ...action.payload,
                        author: {
                            username: action.userUsername,
                        }
                    }
                ],
            }
        default:
            return state;
    }
};