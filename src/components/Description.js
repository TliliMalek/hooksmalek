import { useNavigate, useParams } from "react-router-dom";

export const Description = ({ newList }) => {
  const navigate = useNavigate();
  const { idmovie } = useParams();
  const movie = newList.find((el) => el.id == idmovie);
  return (
    <div>
      <h1 style={{ color: "white" }}>{movie.title}</h1>
      <img src={movie.posterUrl} />
      <p style={{ color: "white" }}> {movie.description}</p>
      <iframe
        width="900"
        height="506"
        src={movie.trailerSrc}
        title="Perfect Night With Relaxing Fireplace Burning 🔥🔥 | 4K Fireplace With Crackling Fire Sounds 10 Hours"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <button onClick={() => navigate("/")}> Back to Home</button>
    </div>
  );
};
