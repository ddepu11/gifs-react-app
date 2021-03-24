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
          } = item;
          return (
            <div key={index}>
              <img src={url} alt="" />
            </div>
          );
        })
      : "";
  return <main className="hero">{showGifs}</main>;
};
export default Gifs;
