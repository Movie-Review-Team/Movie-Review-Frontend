import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/movieService';

const useFetchMovies = (page) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadMovies = async () => {
            try {
                const data = await fetchMovies(page);
                console.log('Movies from API:', data);
                setMovies(data);
            } catch (err) {
                console.error('Error fetching movies:', err);
            }
        };

        loadMovies();
    }, [page]);

    return { movies, loading };
};

export default useFetchMovies;