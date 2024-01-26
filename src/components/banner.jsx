import { useEffect, useState } from "react";
import "../css/banner.css";
import IconButton from "./common/iconButton";
import axios from "axios";
import config from "../config.json";
import request from "../services/request";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `${config.baseURL}${request.fetchNetflixOriginals}`
      );
      const index = Math.floor(Math.random() * data.results.length - 1);

      setMovie(
        data.results[index >= 0 && index < data.results.length ? index : 0]
      );
    }
    fetchData();
  }, []);
  // console.log("banner movies: ", movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__left">
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie.name || movie.original_title || movie.title}
          </h1>
          <p className="banner__description">{movie.overview}</p>
          <div className="banner__buttons">
            <IconButton
              label="Play"
              iconName="Play"
              className="button__icons button__play btn--white"
              jump={`/watch?movie_id=${movie.id}`}
              state={movie}
            />
            <IconButton
              label="My List"
              iconName="Plus"
              className="button__icons button__play btn--grey"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
