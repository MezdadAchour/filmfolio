import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

const App = () => {
  const [movies, setMovies] = useState(() => {
    const savedMovies = localStorage.getItem("movies");
    return savedMovies
      ? JSON.parse(savedMovies)
      : [
          {
            id: 1,
            title: "LA LA LAND",
            posterUrl:
              "https://th.bing.com/th/id/OIP.A50ToYFonXKzJ9p9lpi2VAHaLH?rs=1&pid=ImgDetMain",
            rating: 4.5,
          },
          {
            id: 2,
            title: "DUNE 2",
            posterUrl:
              "https://fr.web.img4.acsta.net/pictures/24/01/26/10/18/5392835.jpg",
            rating: 4.7,
          },
          {
            id: 3,
            title: "Zack Snyder's Justice League",
            posterUrl:
              "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            rating: 4.8,
          },
        ];
  });

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (newMovie) => {
    const newId =
      movies.length > 0 ? Math.max(...movies.map((m) => m.id)) + 1 : 1;
    const movieWithId = { ...newMovie, id: newId };
    setMovies([...movies, movieWithId]);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    const filtered = movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
        movie.rating >= (ratingFilter || 0)
    );
    setFilteredMovies(filtered);
  }, [movies, titleFilter, ratingFilter]);

  return (
    <div className="app">
      <h1>Welcome to FilmFolio</h1>
      <Filter onTitleChange={setTitleFilter} onRatingChange={setRatingFilter} />
      <MovieList
        movies={filteredMovies}
        onDeleteMovie={deleteMovie}
        onAddMovie={addMovie}
      />
    </div>
  );
};

export default App;
