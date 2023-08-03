import { urls } from '../constans'; 
import { instanceAxios } from './axiosService';

const movieService = {
  getAll: (params) => instanceAxios.get(urls.movie.base, { params: { ...params } }),
  getById: (movieId) => instanceAxios.get(urls.movie.byId(movieId)),
  
  getPosterImage: (posterPath) => instanceAxios.get(urls.posterUrl.posterImage(posterPath)),
  getNotPosterImage: () => instanceAxios.get(urls.notFoundPoster.base),

  getCredits: (movieId) => instanceAxios.get(urls.credits.base(movieId)),

  getMovieTrailer: (movieId) => instanceAxios.get(urls.videos.base(movieId)),
  getVideos: (id) => instanceAxios.get(urls.videos.base(id)),

  getGenres: () => instanceAxios.get(urls.genre.base),
  search: (query) => instanceAxios.get(urls.search.base, { params: { query } }),

  getPopular: () => instanceAxios.get(urls.popular.base),
  getTopRated: () => instanceAxios.get(urls.top_rated.base),
  getUpComing: () => instanceAxios.get(urls.upcoming.base),


  trendingDay: () => instanceAxios.get(urls.trending.day.base),
  trendingWeek: () => instanceAxios.get(urls.trending.week.base)
};

export { movieService };
