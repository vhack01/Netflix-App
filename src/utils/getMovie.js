const getMovie = ({ movies }, id) => {
  console.log("movies: ", movies);
  if (!movies || !id) {
    console.log("state = null");
    return null;
  }
  if (Array.isArray(movies) === false) {
    return [movies];
  }
  const movie = movies.filter((movie, index) => movie.id === parseInt(id));
  return movie;
};

export default getMovie;
