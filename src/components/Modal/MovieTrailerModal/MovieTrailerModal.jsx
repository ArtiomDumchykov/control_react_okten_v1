import React from 'react';

import './MovieTrailerModal.scss';

import { urls } from '../../../constans';

export const MovieTrailerModal = ({ youtubeData, onClose }) => {
    const { trailerKey, trailerName } = youtubeData
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    Close
                </button>
                <iframe
                    title={trailerName}
                    src={urls.youTube.base(trailerKey)}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};


