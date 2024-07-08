import "./App.css";
import React, { useState } from "react";
import Filter from "./Filter";
import MovieList from "./components/MovieList";

const App = () => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleTitleChange = (newTitle) => {
    setTitleFilter(newTitle);
    // Appliquez ici la logique de filtrage
  };

  const handleRatingChange = (newRating) => {
    setRatingFilter(newRating);
    // Appliquez ici la logique de filtrage
  };
};

function App() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      posterUrl: "url_de_l_affiche",
      rating: 4.8,
    },
    {
      id: 2,
      title: "The Matrix",
      posterUrl: "url_de_l_affiche",
      rating: 4.7,
    },
    // Ajoutez d'autres films ici
  ];
  return (
    <div className="app">
      <h1>Ma liste de films</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
