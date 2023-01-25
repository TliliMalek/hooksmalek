import { useState } from "react";
import "./App.css";
import Add from "./components/Add/Add";
import MovieList from "./components/MovieList/MovieList";
import { dataMovies } from "./data";
import Filter from "./components/Filter/Filter";
import { Navigate, Routes, Route } from "react-router-dom";
import { Accueil } from "./Accueil";

function App() {
  // add movie section:
  const [newList, setnewList] = useState(dataMovies);
  const addNewMovie = (newMovie) => {
    setnewList([...newList, newMovie]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/Add" element={<Add addNewMovie={addNewMovie} />} />
        <Route path="/" element={<Accueil newList={newList} />} />
      </Routes>
    </div>
  );
}

export default App;
