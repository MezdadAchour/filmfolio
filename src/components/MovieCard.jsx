import '../CSS/MovieCard.css';
import { FaTrash } from 'react-icons/fa'; //icone supprimer font awesome
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, onDelete }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={movie.posterUrl} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>Note : {movie.rating}/5</p>
        </div>
      </Link>
      <button className="delete-btn" onClick={onDelete} aria-label="Supprimer le film">
        <FaTrash />
      </button>
    </div>
  );
};

export default MovieCard;
