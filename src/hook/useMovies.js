import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config.json";

export default function useMovies(fetchUrl) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const { data } = await axios.get(`${config.baseURL}${fetchUrl}`);
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  return movies;
}
