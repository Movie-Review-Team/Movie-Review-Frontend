import React, { useState } from 'react';
import '../styles/ReviewForm.css';

function ReviewForm({ onSubmit }) {
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!review.trim()) {
            alert('리뷰 내용을 입력해주세요.');
            return;
        }
        onSubmit({ review, rating });
        setReview('');
        setRating(1);
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            <label>Review:</label>
            <textarea
                rows="3"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Write your review here"
            />

            <label>Rating:</label>
            <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
                {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                        {num} Stars
                    </option>
                ))}
            </select>

            <button type="submit">Submit Review</button>
        </form>
    );
}

export default ReviewForm;