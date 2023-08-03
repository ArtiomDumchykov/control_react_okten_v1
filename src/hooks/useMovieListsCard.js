import { useEffect, useState } from 'react'
import { movieService } from '../services';

export const useMovieListsCard = ({movieId}) => {
    const [data, setData] = useState(null);
    const [dataCredits, setDataCredits] = useState(null);
    const [dataMovieTrailers, setDataMovieTrailers] = useState(null);

    useEffect(() => {
        (async () => {
            const { data } = await movieService.getById(movieId)
            const { data: creditData } = await movieService.getCredits(movieId)
            const {data: movieTrailersData} = await movieService.getMovieTrailer(movieId)

            const filterData = [...movieTrailersData?.results].map(({key, name}) => ({key, name}))

            setData(data)
            setDataCredits(creditData)
            setDataMovieTrailers(filterData)
        })()
    }, [movieId])

    return {
        data, setData,
        dataCredits, setDataCredits,
        dataMovieTrailers, setDataMovieTrailers
    }
}
