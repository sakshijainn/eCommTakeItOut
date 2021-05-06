import { createContext } from "react";
import { useContext, useReducer } from "react";
import {dataReducer} from "../Reducer/data-reducer";

export const WishContext = createContext();

export function WishProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, { itemsInWish: [] });

  return (
    <WishContext.Provider value={{ state, dispatch }}>
      {children}
    </WishContext.Provider>
  );
}

export function useWish() {
  return useContext(WishContext);
}


