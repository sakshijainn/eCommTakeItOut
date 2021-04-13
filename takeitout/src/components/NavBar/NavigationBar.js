import React, { useState } from "react";
import HomeComp from "../Home/HomeComp";
import Product from "../productListing/Product";
import WishList from "../wishList/WishList";
import CartList from "../cartList/CartList.js";
import CheckOut from "../CheckOut/CheckOut";
import "./NavigationBar.css";
import { useCart } from "../../context/CartContext";
import { useWish } from "../../context/WishContext";
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext"

function NavigationBar() {
  const {state:{itemsInCart}} = useCart();
  const {state:{itemsInWish}} = useWish();
  const { page, setPage } = useCart();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const routeTo = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <nav>
        <div className="logo">
          takeItOut<i class="fa fa-gratipay" aria-hidden="true"></i>
        </div>

        <label for="drop" class="toggle">
          <i class="fa fa-bars"></i>
        </label>
        <input type="checkbox" id="drop" />
        <ul className="menu">
          <li>
            <a onClick={() => routeTo("HomeComp")}>Home</a>
          </li>

          <li>
            <a onClick={() => routeTo("Product")}>Products</a>
          </li>

          <li>
            <a onClick={() => routeTo("WishList")}>
              <i class="fa fa-heart-o" aria-hidden="true">
                <sup>{itemsInWish.length}</sup>{" "}
              </i>
            </a>
          </li>

          <li>
            <a onClick={() => routeTo("CartList")}>
              <i class="fa fa-shopping-cart" aria-hidden="true">
                <sup>{itemsInCart.length}</sup>{" "}
              </i>
            </a>
          </li>

          

          <li>
          <a onClick={toggleTheme}>
          <i className={theme === 'light'?"fa fa-moon-o":"fa fa-sun-o"}></i>{theme === 'light' ? 'dark' : 'light'}</a>
        </li>

         
        </ul>
        
      </nav>
      

      {page === "HomeComp" && <HomeComp />}
      {page === "Product" && <Product />}
      {page === "WishList" && <WishList />}
      {page === "CartList" && <CartList />}
      {page === "CheckOut" && <CheckOut />}
    </>
  );
}

export default NavigationBar;
