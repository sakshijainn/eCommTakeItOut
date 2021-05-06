import React, { useState, useEffect,useReducer } from "react";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Product.css";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";
import { useProduct } from "../../context/ProductContext";
import { dataReducer } from "../../Reducer/data-reducer";
export default function Products() {
  const { isToast} = useCart();

  const{dispatch} = useReducer(dataReducer,{sortBy:null});
 
  
  const {
    state: { products },
    dispatch: productDispatch,
  } = useProduct();

  const {
    state: { itemsInCart },
    dispatch: cartDispatch,
  } = useCart();

  const {
    state: { itemsInWish },
    dispatch: wishDispatch,
  } = useWish();

  const [search, setSearch] = useState("");

  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        setLoader(true);
        const response = await axios.get("/api/users");
        console.log(response.data.users);
        setLoader(false);
        productDispatch({ type: "SET_PRODUCTS", payload: response.data.users });
        setLoader(false);
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

        <div className="searchWrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="search the entire store here .."
              onChange={(event) => setSearch(event.target.value)}
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>

          
        </div>
      
        
        
        

        <div className="gallery">
          {products
            .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((product, index) => (
              <div className="content" key={index}>
                <img src={product.image} />
                <button
                  onClick={() => {
                    wishDispatch({ type: "ADD_TO_WISH", payload: product });
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
