import {createContext} from "react";
import {useContext,useReducer,useState} from "react";
import {dataReducer} from "../Reducer/data-reducer";

export const CartContext = createContext();



export function CartProvider({children})
{
   
    const[isToast,setToast]= useState(false);
    const[page,setPage] = useState("HomeComp");
    
    

    const[state,dispatch]= useReducer(dataReducer,{itemsInCart:[]});
   
    return(
        <CartContext.Provider value={{state,dispatch,isToast,setToast,page,setPage}}>
        {children}
        </CartContext.Provider>
    )
}

export function useCart()
{
    return  useContext(CartContext);
}

