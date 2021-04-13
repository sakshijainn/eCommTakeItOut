export const dataReducer = (state, action) => {
 
    switch (action.type) {
    
     
      case "SET_PRODUCTS":
        return { ...state, products: action.payload };

        case "ADD_TO_CART":
            return { ...state, itemsInCart: action.payload };
            
      
          
          case "INCREMENT_QTY":
            return {
              ...state,
              itemsInCart: state.itemsInCart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, Quantity: item.Quantity + 1 }
                  : item
              )
            };
      
          case "DECREMENT_QTY":
            return {
              ...state,
              itemsInCart: state.itemsInCart.map((item) =>
                item.id === action.payload.id
                  ? { ...item, Quantity: item.Quantity - 1 }
                  : item
              )
            };
      
          case "REMOVE_FROM_CART":
            return {
              ...state,
              itemsInCart: state.itemsInCart.filter(
                (prevItem) => prevItem.id !== action.payload.id
              )
            };

        case "ADD_TO_WISH": {
                return { ...state, itemsInWish: action.payload };
              }
      
    
    }
    
  };
  
 