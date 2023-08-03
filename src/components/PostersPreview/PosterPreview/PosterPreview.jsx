import React from 'react'

import styles from './PosterPreview.module.scss';

import { urls } from '../../../constans';

export function PosterPreview({ cast }) {
    const { original_name, profile_path } = cast;

    const img = profile_path ? urls.posterUrl.base + profile_path : urls.notFoundPoster.base;

    return (
        <div
            className={styles.poster}
            style={{
                backgroundImage: `url(${img})`,
            }}
        >
            <p className={styles.poster_name}>
                {original_name}
            </p>
        </div>
    )
}






