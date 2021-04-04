import {createContext} from "react";
import {useContext,useState} from "react";

export const CartContext = createContext();



export function CartProvider({children})
{
    const[itemsInCart,setItemsInCart] = useState([]);
    const[isToast,setToast]= useState(false);
    const[page,setPage] = useState("HomeComp");
   
    return(
        <CartContext.Provider value={{itemsInCart,setItemsInCart,isToast,setToast,page,setPage}}>
        {children}
        </CartContext.Provider>
    )
}

export function useCart()
{
    return  useContext(CartContext);
}

