import { localStorageKeys } from "../constans"
import { getLocalStorage, isCheckLocalStorage, setLocaStorage } from "./localStorage"

export const addToFavorites = (e, movie) => {
    const {favoritesKey} = localStorageKeys

    const isFavorites = isCheckLocalStorage(favoritesKey)

    if (!isFavorites) {
        setLocaStorage(favoritesKey, [])
    }

    const geFavorites = getLocalStorage(favoritesKey)

    const isCheckFavorites = geFavorites.find(item => item?.id === movie.id);
    console.log(isCheckFavorites);

    if (!isCheckFavorites) {
        const updatefavorites = [movie, ...geFavorites]
       setLocaStorage(favoritesKey, updatefavorites)
    } else {
        console.log("movie is localstprage");
    }
}