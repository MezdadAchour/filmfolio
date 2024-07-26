import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../CSS/MovieDetails.css';

const MovieDetails = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  if (!movie) return <div>Film non trouvé</div>;

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-header">
          <Link to="/" className="back-link">← Retour</Link>
          <h2>{movie.title}</h2>
        </div>
        <div className="movie-content">
          <div className="movie-poster">
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
          <div className="movie-info">
            <p className="movie-description">{movie.description}</p>
            <p className="movie-rating">Note : {movie.rating}/5</p>
            <div className="movie-trailer">
              <h3>Bande-annonce</h3>
              <iframe 
                src={`${movie.trailerLink}?autoplay=0&origin=${window.location.origin}`}
                title={`${movie.title} trailer`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;