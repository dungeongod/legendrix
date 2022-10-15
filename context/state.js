import { createContext, useContext } from "react";

const SearchContext = createContext();

export const JsonContext = ({ children }) => {
  const state = {
  };
  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
