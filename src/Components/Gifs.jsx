import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { FcBusinessman } from "react-icons/fc";
import { Link } from "react-router-dom";

const Gifs = () => {
  const { gifs } = useGlobalContext();

  let showGifs =
    gifs.length !== 0 ? (
      gifs.map((item, index) => {
        let {
          id,
          images: {
            downsized_large: { url },
          },
          user: { avatar_url },
          username,
          trending_datetime,
        } = item;

        trending_datetime = new Date(trending_datetime).toLocaleDateString();

        return (
          <Link to={`/gif/${id}`} key={index} className="gif card">
            <img src={url} alt="" />
            <div className="info">
              {avatar_url !== "" ? (
                <img src={avatar_url} alt="s" className="avatar" />
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
      <form className="search_form">
        <input type="text" placeholder="Search for sticker" />
        <button type="submit">Search</button>
      </form>
      <main className="hero">{showGifs}</main>;
    </>
  );
};
export default Gifs;
