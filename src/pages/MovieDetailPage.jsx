import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movieService';
import { fetchReviewsByMovie, addReview } from '../services/reviewService';
import '../styles/MovieDetailPage.css';

function MovieDetailPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ content: '', rating: 0 });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const loadMovieDetails = async () => {
        try {
            setLoading(true);
            const movieData = await fetchMovieById(id);
            const reviewData = await fetchReviewsByMovie(id);
            setMovie(movieData);
            setReviews(reviewData);
        } catch (err) {
            console.error('Error loading movie details:', err);
            setError('Failed to load movie details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadMovieDetails();
    }, [id]);

    const handleSubmitReview = async (e) => {
        e.preventDefault();
        if (!newReview.content || newReview.rating < 1) {
            alert('내용과 평점을 모두 입력해주세요.');
            return;
        }
        try {
            await addReview({ movieId: id, ...newReview });
            setNewReview({ content: '', rating: 0 });
            loadMovieDetails(); // 리뷰 추가 후 새로고침

        } catch (err) {
            console.error('Error adding review:', err);
            alert('Failed to submit review. Please try again.');
        }
    };

    return (
        <div className="movie-detail-page">
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : movie ? (
                <>
                    <div className="movie-info">
                        <h1>{movie.title}</h1>
                        <div className="movie-details">
                            <p>평균 평점: {renderStars(movie.averageRating || 0)}</p>
                            <p>
                                상영 여부:{' '}
                                <span className={`status ${movie.isScreening ? 'active' : 'inactive'}`}>
                                    {movie.isScreening ? '상영 중' : '상영 종료'}
                                </span>
                            </p>
                            <p>장르: {movie.genre}</p>
                            <p>개봉일: {movie.releaseDate}</p>
                            <p>상영 종료일: {movie.endDate}</p>
                        </div>
                    </div>

                    {/* 리뷰 입력 폼 */}
                    <div className="review-form">
                        <h3>리뷰 작성</h3>
                        <form onSubmit={handleSubmitReview}>
                            <select
                                value={newReview.rating}
                                onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                            >
                                <option value="0">별점을 선택하세요</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                            <textarea
                                placeholder="리뷰를 입력하세요..."
                                value={newReview.content}
                                onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                            ></textarea>
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    {/* 리뷰 목록 */}
                    <div className="reviews">
                        <h3>리뷰 목록</h3>
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div key={review.id} className="review-item">
                                    <p>{renderStars(review.rating)}</p>
                                    <p>{review.content}</p>
                                </div>
                            ))
                        ) : (
                            <p>아직 등록된 리뷰가 없습니다.</p>
                        )}
                    </div>
                </>
            ) : (
                <p>영화를 찾을 수 없습니다.</p>
            )}
        </div>
    );
}

const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<span key={i} className={i < rating ? 'star filled' : 'star'}>★</span>);
    }
    return stars;
};

export default MovieDetailPage;