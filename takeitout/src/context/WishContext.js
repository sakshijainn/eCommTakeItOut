import {createContext} from "react";
import {useContext,useState} from "react";

export const WishContext = createContext();



export function WishProvider({children})
{
    const[itemsInWish,setItemsInWish] = useState([]);
  
   
    return(
        <WishContext.Provider value={{itemsInWish,setItemsInWish}}>
        {children}
        </WishContext.Provider>
    )
}

export function useWish()
{
    return  useContext(WishContext);
}
