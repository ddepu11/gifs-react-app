import { useGlobalContext } from "../context";

const Gifs = () => {
  const { gifs } = useGlobalContext();

  console.log(gifs);

  let showGifs =
    gifs.length !== 0
      ? gifs.map((item, index) => {
          const {
            id,
            images: {
              downsized_large: { url },
            },
            user: { banner_url },
            username,
          } = item;

          return (
            <a href="/a" key={index} className="gif card">
              <img src={url} alt="" />
              <div className="info">
                <img src={banner_url} alt="" />
                <p>{username}</p>
              </div>
            </a>
          );
        })
      : "";
  return <main className="hero">{showGifs}</main>;
};
export default Gifs;
