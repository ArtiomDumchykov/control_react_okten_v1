import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GenreBadge = ({ genre }) => {
    const { id: with_genres, name } = genre;
    const navigate = useNavigate();

    return (
        <span
            style={{
                background: "grey",
                display: 'block',
                padding: "7px 10px",
                borderRadius: '5px',
                color: 'white',
                fontSize: '12px',
                cursor: 'pointer',
            }}
            onClick={() => navigate(`/moviesList/with_genres=${with_genres}`)}
        >
            {name}
        </span>
    );
};




