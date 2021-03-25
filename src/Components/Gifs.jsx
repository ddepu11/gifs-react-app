import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useFetch } from "../useFetch";
import Search from "./Search";

const API_KEY = process.env.REACT_APP_API_KEY;
let endPoint = `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}&limit=10&rating=g`;

const Gifs = () => {
  const { gifs, term, loading } = useGlobalContext();

  if (term !== "") {
    endPoint = `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${term.trim()}&limit=20&offset=0&rating=g&lang=en`;
  }

  useFetch(endPoint, [term]);

  let showGifs =
    loading === false ? (
      gifs.map((item, index) => {
        if (term) {
          var {
            id,
            images: {
              downsized_large: { url },
            },
            username,
            trending_datetime,
          } = item;
        } else {
          var {
            id,
            images: {
              downsized_large: { url },
            },
            user: { avatar_url },
            username,
            trending_datetime,
          } = item;
        }

        trending_datetime = new Date(trending_datetime).toLocaleDateString();

        return (
          <Link to={`/gif/${id}`} key={index} className="gif card">
            <img src={url} alt="" />
            <div className="info">
              {avatar_url !== "" && avatar_url ? (
                <img src={avatar_url} alt={username} className="avatar" />
              ) : (
                <FcBusinessman className="avatar" />
              )}

              <p className="us_name">{username}</p>

              <span className="tr_time">{trending_datetime}</span>
            </div>
          </Link>
        );
      })
    ) : (
      <Loading />
    );

  return (
    <>
      <Search />
      <main className="hero">{showGifs}</main>;
    </>
  );
};
export default Gifs;
