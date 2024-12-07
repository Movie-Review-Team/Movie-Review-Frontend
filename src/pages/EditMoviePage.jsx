import React, { useEffect, useState } from 'react';
import MovieForm from '../components/MovieForm';
import { fetchMovieById, updateMovie } from '../services/movieService';
import { useNavigate, useParams } from 'react-router-dom';

function EditMoviePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        releaseDate: '',
        endDate: '',
        isScreening: true,
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadMovie = async () => {
            try {
                const movie = await fetchMovieById(id);
                setFormData({
                    title: movie.title,
                    genre: movie.genre,
                    releaseDate: movie.releaseDate,
                    endDate: movie.endDate,
                    isScreening: movie.isScreening,
                });
            } catch (err) {
                console.error('Error fetching movie:', err);
                setError('Failed to load movie data.');
            } finally {
                setLoading(false);
            }
        };
        loadMovie();
    }, [id]);

    const handleUpdateMovie = async () => {
        try {
            await updateMovie(id, formData);
            navigate('/');
        } catch (err) {
            console.error('Error updating movie:', err);
            alert('Failed to update movie.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div>
            <h1>영화 수정</h1>
            <MovieForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleUpdateMovie}
                buttonLabel="Update Movie"
            />
        </div>
    );
}

export default EditMoviePage;