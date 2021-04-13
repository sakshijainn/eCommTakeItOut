import React, { useState, useEffect,useReducer } from "react";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Product.css";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";
import {useProduct} from "../../context/ProductContext"

export default function Products() {
  const { isToast, setToast } = useCart();

  
  const{ dispatch:productDispatch}= useProduct();
  

  const { state: { itemsInCart },  dispatch:cartDispatch } = useCart();

  const { state: { itemsInWish },dispatch:wishDispatch } = useWish();

  // const [products, setProducts] = useState([]);

  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        setLoader(true);
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setLoader(false);
        // setProducts(response.data.users);
        productDispatch({ type: "SET_PRODUCTS", payload: response.data.users})
        
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  const ItemsInList = (productID) =>
    itemsInWish.find((x) => x.id === productID) ? true : false;

  return (
    <>
      <div className="gallery-container">
        <h2>
          {isLoader && (
            <div className="wrapper">
              <div className="preloader">Loading...</div>
            </div>
          )}
        </h2>
        {isToast && (
          <div className="toast">
            <p>
              Added to cart {itemsInCart.length} items <i class="fa fa-check" />
            </p>
          </div>
        )}

        <div className="gallery">
          {products.map((product, index) => (
            <div className="content" key={index}>
              <img src={product.image} />
              <button
                onClick={() => {
                  wishDispatch({ type: "ADD_TO_WISH", payload: product});
                }}
                className={
                  ItemsInList(product.id) === true ? "heartRed" : "heart"
                }
              >
                <i className="fa fa-heart"></i>
              </button>

              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h6> Rs.{product.price}</h6>

              <button
                onClick={() => {
                  cartDispatch({ type: "ADD_TO_CART", payload: product });
                }}
                className="buy-1"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
