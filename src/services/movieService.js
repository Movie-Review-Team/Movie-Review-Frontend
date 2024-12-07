import axios from 'axios';

const BASE_URL = '/api/movies';

export const fetchMovies = async (genre = '', isScreening = '') => {
    try {
        const response = await axios.get('/api/movies', {
            params: {
                genre: genre || undefined,
                isScreening: isScreening !== '' ? isScreening : undefined,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error.response?.data || error.message);
        throw error;
    }
};

export const addMovie = async (data) => {
    try {
        const response = await axios.post(BASE_URL, data);
        return response.data;
    } catch (error) {
        console.error('Error adding movie:', error.response?.data || error.message);
        throw error;
    }
};

export const fetchMovieById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching movie with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};

export const updateMovie = async (id, data) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error(`Error updating movie with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};

export const deleteMovie = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        console.error(`Error deleting movie with ID ${id}:`, error.response?.data || error.message);
        throw error;
    }
};