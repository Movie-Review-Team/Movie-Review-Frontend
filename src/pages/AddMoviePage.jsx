import React, { useState } from 'react';
import MovieForm from '../components/MovieForm';
import { addMovie } from '../services/movieService';
import { useNavigate } from 'react-router-dom';

function AddMoviePage() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        releaseDate: '',
        endDate: '',
        isScreening: true,
    });

    const handleAddMovie = async (payload) => {
        try {
            console.log('Submitting payload:', payload);
            await addMovie(payload);
            navigate('/');
        } catch (err) {
            console.error('Error adding movie:', err);
            alert('영화 등록에 실패했습니다. 입력값을 확인해주세요.');
        }
    };

    return (
        <div>
            <h1>영화 등록</h1>
            <MovieForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={handleAddMovie}
                buttonLabel="Submit"
            />
        </div>
    );
}

export default AddMoviePage;