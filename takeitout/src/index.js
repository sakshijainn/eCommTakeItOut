import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CartProvider} from "./context/CartContext"
import {WishProvider} from "./context/WishContext"
import { ThemeProvider } from './context/ThemeContext';
import {ProductProvider} from "./context/ProductContext";


//WITHOUT AN UPSTATE:

// ReactDOM.render(
//   <React.StrictMode>
//   <CartContext.Provider value ={{cartItems:4}}>
//     <App />
//   </CartContext.Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider>
  <ProductProvider>
  <CartProvider>
  <WishProvider>
    <App />
    </WishProvider>
  </CartProvider>
  </ProductProvider>
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
