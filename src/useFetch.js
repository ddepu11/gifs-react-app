import { useEffect } from "react";
import { useGlobalContext } from "./context";

const useFetch = (url) => {
  const { setGifs } = useGlobalContext();

  const fetchGifs = async () => {
    try {
      const res = await fetch(url);
      const { data } = await res.json();
      setGifs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => fetchGifs(),
    // eslint-disable-next-line
    []
  );
};
export { useFetch };
