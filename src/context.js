import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [gifs, setGifs] = useState([]);
  const [gif, setGif] = useState({});
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState("");

  return (
    <AppContext.Provider
      value={{ gifs, setGifs, loading, setLoading, gif, setGif, term, setTerm }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
