import React, { useState, useEffect } from "react";
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./Product.css";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";


export default function Products() {
  const { itemsInCart, setItemsInCart, isToast, setToast } = useCart();
  const { itemsInWish, setItemsInWish } = useWish();

  const [products, setProducts] = useState([]);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setupMockServer();
        setLoader(true);
        const response = await axios.get("/api/users");
        setLoader(false);
        setProducts(response.data.users);
      } catch (error) {
        console.log("error");
      }
    })();
  }, []);

  const addToCart = (product) => {
    console.log(itemsInCart);
    const exist = itemsInCart.find((x) => x.id === product.id);

    if (exist) {
      setToast(true);
      setItemsInCart(
        itemsInCart.map((x) =>
          x.id === product.id ? { ...exist, Quantity: exist.Quantity + 1 } : x
        )
      );
      setTimeout(() => {
        setToast(false);
      }, 2000);
    } else {
      setToast(true);
      setItemsInCart([...itemsInCart, { ...product, Quantity: 1 }]);
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }
  };

  const addToWish = (product) => {
    console.log(itemsInWish);
    const exist = itemsInWish.find((x) => x.id === product.id);
   
    if (exist) {
      setItemsInWish(
        itemsInWish.map((x) =>
          x.id === product.id ? { ...exist, Quantity: exist.Quantity + 1 } : x
        )
      );
    } else {
      setItemsInWish([...itemsInWish, { ...product, Quantity: 1 }]);
    }
  };

  const ItemsInList = (productID)=> 
    (itemsInWish.find((x)=>x.id===productID))? true:false;

  
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
        {isToast && 
             <div className="toast" >
             <p>Added to cart {itemsInCart.length} items <i class="fa fa-check"/></p>
             </div>
        }
      

        

        <div 	className="gallery">
          {products.map((product, index) => (
            <div className="content" key={index}>
              <img src={product.image} />
             <button onClick={() => {
              addToWish(product);
            }}className={ItemsInList(product.id)===true ?"heartRed": "heart"}>
             <i className="fa fa-heart"></i></button>
             
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <h6> Rs.{product.price}</h6>

              <button
                onClick={() => {
                  addToCart(product);
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
