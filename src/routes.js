const MAIN = '/';
const MOVIES_LIST = 'moviesList';
const MOVIES_LIST_QUERY = 'moviesList/:query';
const MOVIE_ID = '/movieInfo/:movieId';
const MOVIE_FILTER_GENRE = "/filterMovie/genre/:with_genres";
const MOVIE_FILTER_REALESE_DATE = "/filterMovie/years/:primary_release_year";
const LOGIN = '/login'
const FAVORITE = '/favorite'

export const ROUTES = {
    MAIN,
    MOVIES_LIST,
    MOVIE_ID,
    MOVIE_FILTER_GENRE,
    MOVIE_FILTER_REALESE_DATE,
    LOGIN,
    FAVORITE,
    MOVIES_LIST_QUERY
}