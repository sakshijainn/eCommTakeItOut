import { createContext } from "react";
import { useContext, useReducer } from "react";
import { dataReducer } from "../Reducer/data-reducer";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, { products:[] });
  console.log(state);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProduct() {
  return useContext(ProductContext);
}
