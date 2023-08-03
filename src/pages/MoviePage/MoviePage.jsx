import React from 'react'
import { useParams } from 'react-router-dom';

import { MovieListsCard } from '../../components'

export function MoviePage() {
    const { movieId } = useParams()
    return (
        <section className='movie' style={{ padding: "25px 0" }}>
            <div className="movie__container _container">
                <div className="movie__content">
                    {!!movieId && <MovieListsCard movieId={movieId} />}
                </div>
            </div>
        </section>
    )
}
