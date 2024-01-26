import "../../css/row.css";
import useMovies from "../../hook/useMovies";
import { Link } from "react-router-dom";
import config from "../../config.json";
import { ChevronLeft, ChevronRight, CloudCog } from "lucide-react";
import { useContext, useRef, useState } from "react";
import NavContext from "../../context/navContext";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const userID = useContext(NavContext);
  // console.log("userID1: ", userID);

  const slider = useRef();
  const movies = useMovies(fetchUrl);

  const [leftSlider, setLeftSlider] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleSlider = (e, direction) => {
    setLeftSlider(true);
    console.log(slider);
    const slideBy = 300;
    if (direction === "right") {
      setSlideNumber(slideNumber - slideBy);
    } else if (direction === "left") {
      slideNumber !== 0
        ? setSlideNumber(slideNumber + slideBy)
        : setLeftSlider(false);
    }
  };

  return (
    <div className="row">
      <h1 className="row__title">{title}</h1>

      <div className="row__posters">
        {/* slider */}
        <div className="slider">
          <div
            className="slider-direction slider__left"
            style={{ display: `${leftSlider ? "flex" : "none"}` }}
            onClick={(e) => handleSlider(e, "left")}
          >
            <ChevronLeft className="chevron chevron--left" />
          </div>
          <div
            className="slider-direction slider__right"
            onClick={(e) => handleSlider(e, "right")}
          >
            <ChevronRight className="chevron chevron--right" />
          </div>
        </div>
        <div
          className="row__bar"
          ref={slider}
          style={{ transform: `translateX(${slideNumber}px)` }}
        >
          {movies.map((movie) => (
            <Link
              to={`/watch?movie_id=${movie.id}`}
              key={movie.id}
              state={{ movies, userID }}
            >
              <img
                className={`row__poster-image ${
                  isLargeRow && "row__poster-image--large"
                }`}
                src={`${config.imgURL}${
                  isLargeRow === "true"
                    ? movie.poster_path
                    : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
