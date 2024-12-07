import axios from 'axios';

const BASE_URL = '/api/reviews';

export const fetchReviewsByMovie = async (movieId) => {
    const response = await axios.get(`${BASE_URL}/${movieId}`);
    return response.data;
};

export const addReview = async (reviewData) => {
    const response = await axios.post(BASE_URL, reviewData);
    return response.data;
};