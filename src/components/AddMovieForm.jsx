import '../CSS/AddMovieForm.css';
import { useState } from "react";

// useState
const AddMovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [posterUrl, setPosterUrl] = useState('');
  const [rating, setRating] = useState('');

//   soumettre nouveau film 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      posterUrl,
      rating: Number(rating),
    };
    onAddMovie(newMovie);
    setTitle('');
    setPosterUrl('');
    setRating('');
  };


  return (
    <div className="movie-card add-movie-form">
      <h3>Ajouter un nouveau film</h3>
      <form onSubmit={handleSubmit}>
        <div> 
          <input //titre
            type="text"
            placeholder="Titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <input //image
            type="url"
            placeholder="URL de l'affiche"
            value={posterUrl}
            onChange={(e) => setPosterUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="number" //note
            placeholder="Note (0-5)"
            min="0"
            max="5"
            step="0.1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter le film</button>
      </form>
    </div>
  );
};

export default AddMovieForm;
