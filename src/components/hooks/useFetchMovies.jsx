import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "services/services";


export function useFetchMovie() {
    const { id } = useParams();
    const [movie, setMovie] = useState({});
    useEffect(() => {
      getMovieById(id).then(setMovie);
    }, [id]);
    return movie;
  }