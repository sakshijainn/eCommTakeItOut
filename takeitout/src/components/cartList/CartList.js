import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";
import "./cartList.css";

function CartList() {
  let taxPrice = 0;
  let shippingPrice = 0;

  const {
    state: { itemsInCart },  dispatch :cartDispatch, setPage,} = useCart();
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    total();
  }, [itemsInCart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < itemsInCart.length; i++) {
      totalVal += itemsInCart[i].price * itemsInCart[i].Quantity;
    }
    setCartTotal(totalVal);
  };

  return (
    <div>
      <div className="gallery1">
        {itemsInCart.length === 0 ? (
          <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>
        ) : (
          itemsInCart.map((product, index) => (
            <div className="content1" key={index}>
              <img src={product.image} />
              <button className="heart">
                <i className="wishheart fa fa-heart" aria-hidden="true"></i>
              </button>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h6>
                <button
                  onClick={() =>
                    cartDispatch({ type: "INCREMENT_QTY", payload: product })
                  }
                  className="btn"
                >
                  +
                </button>
                {product.Quantity}
                <button
                  onClick={() =>
                    cartDispatch({ type: "DECREMENT_QTY", payload: product })
                  }
                  className="btn"
                >
                  -
                </button>
              </h6>
              <h6> Rs.{product.price}</h6>
              <div className="check">
                <button
                  onClick={() => setPage("CheckOut")}
                  style={{ fontSize: "1.6rem" }}
                  className="btn"
                >
                  <i style={{ color: "white" }} class="fa fa-shopping-bag"></i>
                </button>
                <button
                  style={{ fontSize: "1.6rem" }}
                  onClick={() =>
                    cartDispatch({ type: "REMOVE_FROM_CART", payload: product })
                  }
                  className="btn"
                >
                  <i
                    style={{ color: "white" }}
                    class="fa fa-trash"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="checkoutsummary">
        <div>
          <h3>Checkout Summary</h3>
        </div>
        <hr />
        <div>
          <h3>Item Price: {cartTotal}</h3>
        </div>

        <div>
          <h3>Tax Price :{(cartTotal * 0.14).toFixed(2)}</h3>
        </div>

        <div>
          <h3>
            Shipping Price:
            {cartTotal > 500 ? (shippingPrice = 100) : (shippingPrice = 200)}
          </h3>
        </div>

        <div>
          <h3>Total price:{cartTotal + taxPrice + shippingPrice}</h3>
        </div>

        <div>
          <button onClick={() => setPage("CheckOut")} className="btn">
            CheckOut
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartList;
