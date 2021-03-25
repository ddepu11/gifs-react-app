import { useParams } from "react-router-dom";
import { useFetch } from "../useFetch";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
const API_KEY = process.env.REACT_APP_API_KEY;

const Gif = () => {
  const { gif, loading } = useGlobalContext();
  const { id } = useParams();
  const endPoint = `https://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`;

  useFetch(endPoint);
  console.log(gif);
  let toShow = loading ? (
    "asad"
  ) : (
    <div className="single_gif">
      <img src={gif.imgSrc} alt="s" />
      <div className="details">
        <img src={gif.avatar} alt="" />
        <span>{gif.userName}</span>
        <h3>{gif.title}</h3>
        <p>{gif.profession}</p>
      </div>
    </div>
  );

  return <main className="main">{loading ? <Loading /> : toShow}</main>;
};

export default Gif;
