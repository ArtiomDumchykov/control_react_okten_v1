import { useEffect, useState } from "react";
import { movieService } from "../services";

export const useGenre = () => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await movieService.getGenres();
        setGenres(data?.genres);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return {
    genres,
    setGenres,
  };
};