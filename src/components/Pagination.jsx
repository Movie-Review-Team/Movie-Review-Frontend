import React from 'react';
import '../styles/Pagination.css';

function Pagination({ currentPage, setPage }) {
    return (
        <div className="pagination">
            <button onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1}>
                Prev
            </button>
            <span className="active">{currentPage}</span>
            <button onClick={() => setPage(currentPage + 1)}>Next</button>
        </div>
    );
}

export default Pagination;