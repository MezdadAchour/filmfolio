import '../CSS/MovieList.css';
import MovieCard from "./MovieCard";
import AddMovieForm from './AddMovieForm';

const MovieList = ({ movies, onDeleteMovie, onAddMovie }) => {
  return (
    <div className="movie-list">
      <AddMovieForm onAddMovie={onAddMovie} />
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={() => onDeleteMovie(movie.id)}
        />
      ))}
    </div>
  );
};

export default MovieList;
