import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MovieListItem from '../components/MovieListItem';
import { fetchMovies, deleteMovie } from '../services/movieService';
import '../styles/MovieListPage.css';

function MovieListPage() {
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState('');
    const [isScreening, setIsScreening] = useState('');

    const loadMovies = async () => {
        try {
            setLoading(true);
            const data = await fetchMovies(genre, isScreening);
            console.log('Movies from API:', data);
            setMovies(data);
        } catch (err) {
            console.error('Error fetching movies:', err);
            setError('Failed to load movies. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMovies();
    }, [page, genre, isScreening]);

    const handleDelete = async (id) => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            try {
                await deleteMovie(id);
                loadMovies();
            } catch (err) {
                console.error('Error deleting movie:', err);
                alert('Failed to delete movie. Please try again.');
            }
        }
    };

    return (
        <div className="movie-list-page">
            <div className="header">
                <h1>🎬 Movie List</h1>
                <button
                    className="add-movie-btn"
                    onClick={() => navigate('/movies/add')}
                >
                    ➕ Add Movie
                </button>
            </div>

            <div className="filters">
                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">All Genres</option>
                    <option value="THRILLER">Thriller</option>
                    <option value="ROMANCE">Romance</option>
                    <option value="COMEDY">Comedy</option>
                    <option value="ACTION">Action</option>
                </select>

                <select
                    value={isScreening}
                    onChange={(e) => setIsScreening(e.target.value)}
                >
                    <option value="">All Movies</option>
                    <option value="true">Now Showing</option>
                    <option value="false">Finished</option>
                </select>
            </div>

            {loading ? (
                <p>Loading movies...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                <div className="movie-list">
                    {movies.length > 0 ? (
                        movies.map((movie) => (
                            <MovieListItem
                                key={movie.id}
                                movie={movie}
                                onDelete={handleDelete}
                            />
                        ))
                    ) : (
                        <p>등록된 영화가 없습니다.</p>
                    )}
                </div>
            )}

            <div className="pagination">
                <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                >
                    Prev
                </button>
                <span>Page {page}</span>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </div>
    );
}

export default MovieListPage;