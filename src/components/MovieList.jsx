import MovieCard from "./MovieCard";

const MovieList = ({movies}) => {
    return (
      <div className="movie-list" style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {movies.map((movie)=>(
          <MovieCard
          key={movie.id}
          title={movie.title}
          posterUrl={movie.posterUrl}
          rating={movie.rating}
          />
        ))}
      </div>
    );
  };
  
  export default MovieList;