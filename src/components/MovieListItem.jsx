import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/MovieListItem.css';

function MovieListItem({ movie, onDelete }) {
    const navigate = useNavigate();

    return (
        <div className="movie-list-item">
            <div className="movie-info">
                <h3
                    className="movie-title"
                    onClick={() => navigate(`/movies/${movie.id}`)}
                >
                    {movie.title}
                </h3>

                <div className="movie-tags">
                    <span className="genre-tag">{movie.genre}</span>
                    <span
                        className={`status-tag ${movie.isScreening ? 'active' : 'inactive'}`}
                    >
                        {movie.isScreening ? '상영 중' : '상영 종료'}
                    </span>
                </div>

                <div className="movie-rating">
                    {renderStars(movie.averageRating || 0)}
                </div>
            </div>

            <div className="movie-actions">
                <button
                    className="edit-btn"
                    onClick={() => navigate(`/movies/edit/${movie.id}`)}
                >
                    ✏️ Edit
                </button>
                <button
                    className="delete-btn"
                    onClick={() => onDelete(movie.id)}
                >
                    🗑️ Delete
                </button>
            </div>
        </div>
    );
}

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>
                ★
            </span>
        );
    }
    return stars;
};

export default MovieListItem;