import React, { useState } from 'react';

import { useMovieListsCard } from '../../hooks';
import { MovieInfo } from '../MovieInfo/MovieInfo'
import { PostersPreview } from '../PostersPreview/PostersPreview';
import { MovieTrailerModal } from '../Modal/MovieTrailerModal/MovieTrailerModal';


export function MovieListsCard({ movieId }) {

    const { data, dataCredits, dataMovieTrailers, setDataMovieTrailers } = useMovieListsCard({ movieId })

    const [isMovieTrailerOpen, setIsMovieTrailerOpen] = useState(false)

    const openModal = () => {
        setIsMovieTrailerOpen(true);
    };

    const closeModal = () => {
        setIsMovieTrailerOpen(false);
    };

    return (
        <>
            {!!data && <MovieInfo movie={data} onOpen={openModal} />}

            {!!dataCredits?.cast?.length && <PostersPreview casts={dataCredits.cast} />}

            {!!isMovieTrailerOpen && (
                <MovieTrailerModal
                    youtubeData={{
                        trailerKey: dataMovieTrailers[0]?.key,
                        trailerName: dataMovieTrailers[0]?.name
                    }}
                    onClose={closeModal}
                />
            )
            }

        </>
    )
}
