import { useGlobalContext } from "../context";
import Loading from "./Loading";
import { FcBusinessman } from "react-icons/fc";

const Gifs = () => {
  const { gifs } = useGlobalContext();

  console.log(gifs);

  let showGifs =
    gifs.length !== 0 ? (
      gifs.map((item, index) => {
        let {
          id,
          images: {
            downsized_large: { url },
          },
          user: { banner_url },
          username,
          trending_datetime,
        } = item;
        trending_datetime = new Date(trending_datetime).toLocaleDateString();
        return (
          <a href="/a" key={index} className="gif card">
            <img src={url} alt="" />
            <div className="info">
              {banner_url !== "" ? (
                <img src={banner_url} alt="s" className="avatar" />
              ) : (
                <FcBusinessman className="avatar" />
              )}

              <p className="us_name">{username}</p>
              <span className="tr_time">{trending_datetime}</span>
            </div>
          </a>
        );
      })
    ) : (
      <Loading />
    );
  return <main className="hero">{showGifs}</main>;
};
export default Gifs;
