import React from 'react';
import { GENRE_MAPPING } from '../constants/genres';
import { GENRES } from '../constants/genres';
import '../styles/MovieForm.css';

function MovieForm({ formData, setFormData, onSubmit, buttonLabel }) {
    const handleSubmit = (e) => {
        e.preventDefault();


        const payload = {
            title: formData.title,
            genre: GENRE_MAPPING[formData.genre],
            releaseDate: formData.releaseDate,
            endDate: formData.endDate,
            isScreening: formData.isScreening === true
        };
        console.log(formData.isScreening)
        console.log('Submitting payload:', payload);

        onSubmit(payload);
    };

    return (
        <form className="movie-form" onSubmit={handleSubmit}>
            <label className="form-label">
                영화 제목:
                <input
                    type="text"
                    className="form-input"
                    value={formData?.title || ''}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </label>

            <label className="form-label">
                장르:
                <select
                    className="form-select"
                    value={formData.genre || ''}
                    onChange={(e) => setFormData({ ...formData, genre: e.target.value })}
                >
                    <option value="" disabled>
                        장르를 선택하세요
                    </option>
                    {GENRES.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </label>

            <label className="form-label">
                개봉일:
                <input
                    type="date"
                    className="form-input"
                    value={formData?.releaseDate || ''}
                    onChange={(e) => setFormData({ ...formData, releaseDate: e.target.value })}
                />
            </label>

            <label className="form-label">
                상영 종료일:
                <input
                    type="date"
                    className="form-input"
                    value={formData?.endDate || ''}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                />
            </label>

            <label className="form-label">
                상영 여부:
                <select
                    className="form-select"
                    value={formData?.isScreening ? "true" : "false"}
                    onChange={(e) =>
                        setFormData({ ...formData, isScreening: e.target.value === "true" })
                    }
                >
                    <option value="true">상영 중</option>
                    <option value="false">상영 종료</option>
                </select>
            </label>

            <button type="submit" className="form-button">
                {buttonLabel}
            </button>
        </form>
    );
}

export default MovieForm;