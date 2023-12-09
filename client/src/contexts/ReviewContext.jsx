import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { reviewServiceMaker } from '../services/reviewService'; 

export const ReviewContext = createContext();

export const ReviewProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [reviews, setReviews] = useState([]);
    const reviewService = reviewServiceMaker();

    useEffect(() => {
        reviewService.getAll().then((result) => {
          setReviews(result);
        });
      }, []);

    const onCreateReviewSubmit = async (data) => {
        const newReview = await reviewService.create(data);
        setReviews((state) => [...state, newReview]);
        navigate("/catalog");
      };
    
      const OnEditSubmit = async (values) => {
        const result = await reviewService.edit(values._id, values);
    
        setReviews((state) =>
          state.map((x) => (x._id === values._id ? result : x))
        );
    
        navigate(`/catalog/${values._id}`);
      };
    

    const deleteReview = (reviewId) => {
        setReviews(state => state.filter(review => review._id !== reviewId));
    };

    const getReview = (reviewId) => {
        return reviews.find(review => review._id === reviewId);
    };

    const contextVal = {
        reviews,
        onCreateReviewSubmit,
        OnEditSubmit,
        deleteReview,
        getReview,
    };

    return (
        <ReviewContext.Provider value={contextVal}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReviewContext = () => {
    const context = useContext(ReviewContext);
    return context;
};