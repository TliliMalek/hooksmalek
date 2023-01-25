import { useState } from "react";
import "./App.css";
import Add from "./components/Add/Add";
import MovieList from "./components/MovieList/MovieList";
import { dataMovies } from "./data";
import Filter from "./components/Filter/Filter";

function App() {
  // add movie section:
  const [newList, setnewList] = useState(dataMovies);

  const addNewMovie = (newMovie) => {
    setnewList([...newList, newMovie]);
  };

  // filter section:
  const [esem, setName] = useState("");
  const thez = (value) => {
    setName(value);
  };
  // filter rating:
  const [ra9em, setRating] = useState("");
  const hezi = (value) => {
    setRating(value);
  };

  return (
    <div className="App">
      <MovieList data={newList} esem={esem} ra9em={ra9em} />
      <Add addNewMovie={addNewMovie} />
      <Filter thez={thez} hezi={hezi} />
    </div>
  );
}

export default App;
