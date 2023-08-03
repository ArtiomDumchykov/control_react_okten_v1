import { urls } from '../constans'; 
import { instanceAxios } from './axiosService';

export const favoriteMovieService = {
  getAll: (id) => instanceAxios.get(urls.getFavorite.base(id)),
  addFavorite: (id, data) => instanceAxios.post(urls.postFavorite.base(id)),
};


