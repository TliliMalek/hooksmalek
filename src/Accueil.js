import { useState } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Filter from "./components/Filter/Filter";
import Movielist from "./components/MovieList/MovieList";

export const Accueil = ({ newList }) => {
  // filter name:
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
    <div>
      <Movielist data={newList} esem={esem} ra9em={ra9em} />
      <Link to="/add">
        <Button> Add </Button>
      </Link>
      <Filter thez={thez} hezi={hezi} />
    </div>
  );
};
