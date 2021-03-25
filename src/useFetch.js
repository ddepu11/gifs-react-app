import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useFetch = (url) => {
  const { setGifs, setLoading, setGif } = useGlobalContext();

  const fetchGifs = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const { data } = await res.json();
      if (Array.isArray(data)) {
        setGifs(data);
      } else {
        const {
          images: {
            downsized: { url },
          },
          title,
          user: {
            avatar_url,
            display_name,
            instagram_url,
            description,
            website_url,
          },
        } = data;
        const newGif = {
          imgSrc: url,
          title,
          avatar: avatar_url,
          userName: display_name,
          instagram: instagram_url,
          profession: description,
          website: website_url,
        };
        setGif(newGif);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setGifs([]);
      setLoading(false);
    }
  };

  useEffect(
    () => fetchGifs(),
    // eslint-disable-next-line
    []
  );
};
export { useFetch };
