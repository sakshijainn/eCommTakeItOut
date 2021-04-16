export const dataReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

      case "SORTLOWTOHIGH":
        return {
            ...state,
            products: state.products.sort((a, b) => a.price - b.price)
          
        };
      case "SORTHIGHTOLOW":
        return {
          ...state,
          products: state.products.sort((a, b) => b.price - a.price)
        };

        
    case "ADD_TO_CART":
      if (
        state.itemsInCart.some((cartItem) => cartItem.id === action.payload.id)
      ) {
        return {
          ...state,
          itemsInCart: state.itemsInCart.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          ),
        };
      } else {
        return {
          ...state,
          itemsInCart: state.itemsInCart.concat({
            ...action.payload,
            quantity: 1,
          }),
        };
      }

    case "INCREMENT_QTY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_QTY":
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) =>
          item.id === action.payload.id && item.quantity >= 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        itemsInCart: state.itemsInCart.filter(
          (prevItem) => prevItem.id !== action.payload.id
        ),
      };

    case "ADD_TO_WISH":
      if (
        state.itemsInWish.find((wishItem) => wishItem.id === action.payload.id)
      ) {
        return {
          ...state,
          itemsInWish: state.itemsInWish.map((wishItem) =>
            wishItem.id === action.payload.id
              ? { ...wishItem, quantity: wishItem.quantity + 1 }
              : wishItem
          ),
        };
      } else {
        return {
          ...state,
          itemsInWish: state.itemsInWish.concat({
            ...action.payload,
            quantity: 1,
          }),
        };
      }
  }
};
